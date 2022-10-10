import { likeRecipe, deslikeRecipe, deleteRecipe } from '../../lib/firestore.js';

export function printTimeline(recipes, timelinePost, user) {
  recipes.forEach((doc) => {
    const postContainer = document.createElement('div');
    let countLikes = doc.likes.length;
    postContainer.setAttribute('id', 'single-post');

    const templatePost = `
        <h1 id="title">${doc.title}</h1>
        <p id="author-post">por ${doc.author}</p>
        <div class="linha1">
          <p>${doc.time}min</p>
          <p>${doc.difficult}</p>
          <button class="btn-like like-count"><i class="fa-regular fa-heart"></i>${countLikes} curtidas!</button>
        </div>
        <details>
          <summary>Ver mais</summary>
          <div>
            <ul></ul>
          </div>
          <div id="prepare-mode">${doc.prepare}</div>
          <p id="btn-del"></p>
      `;

    postContainer.innerHTML = templatePost;

    const delPost = postContainer.querySelector('#btn-del');
    const displayLikes = postContainer.querySelector('.like-count');
    const ingredients = doc.ingredients.split(', ');
    const likeBtn = postContainer.querySelector('.btn-like');
    const unorderedList = postContainer.querySelector('ul');
    let likeForUser = doc.likes.filter((client) => client === user.uid);

    ingredients.forEach((item) => {
      const list = document.createElement('li');
      unorderedList.appendChild(list);
      list.innerHTML += item;
    });

    if (likeForUser.length !== 0) {
      likeBtn.innerHTML = `<i class="fa-solid fa-heart"></i>${countLikes} curtidas!`;
    }

    likeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (likeForUser.length === 0) {
        likeRecipe(doc.id, user.uid).then(() => {
          likeForUser.push(user.uid);
          countLikes += 1;
          displayLikes.textContent = `${countLikes} curtidas!`;
          likeBtn.innerHTML = `<i class="fa-solid fa-heart"></i>${countLikes} curtidas!`;
        });
      } else {
        deslikeRecipe(doc.id, user.uid).then(() => {
          likeForUser = [];
          countLikes -= 1;
          displayLikes.textContent = `${countLikes} curtidas!`;
          likeBtn.innerHTML = `<i class="fa-regular fa-heart"></i>${countLikes} curtidas!`;
        });
      }
    });

    delPost.innerHTML = `<button data-remove="${doc.id}">Apagar</button>`;

    postContainer.addEventListener('click', (e) => {
      const removeButtonId = e.target.dataset.remove;

      if (removeButtonId) {
        deleteRecipe(removeButtonId)
          .then(() => {
            window.location.reload();
          })
          .catch((error) => error);
      }
    });
    timelinePost.appendChild(postContainer);
  });
}
