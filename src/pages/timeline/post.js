import { likeRecipe, deslikeRecipe, deleteRecipe } from '../../lib/firestore.js';
import editRecipe from './editRecipe.js';

export default (recipes, timelinePost, user) => {
  recipes.forEach((doc) => {
    let countLikes = doc.likes.length;
    const postContainer = document.createElement('div');
    postContainer.setAttribute('id', 'single-post');

    const templatePost = `
        <h1 id="title">${doc.title}</h1>
        <p id="author-post">por ${doc.author}</p>
        <div class="information">
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
          <p id="btn-edit"></p>
        </details>
        <section id="divModal"></section>
        `;

    postContainer.innerHTML = templatePost;

    const delPost = postContainer.querySelector('#btn-del');
    const editPost = postContainer.querySelector('#btn-edit');
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

    if (user.uid === doc.userUid) {
      editPost.innerHTML = `
      <button id="edit">Editar</button>
      `;
      const edit = postContainer.querySelector('#edit');
      edit.addEventListener('click', (e) => {
        e.preventDefault();
        const divModal = postContainer.querySelector('#divModal');
        divModal.appendChild(editRecipe(doc));
      });

      delPost.innerHTML = `<button data-remove="${doc.id}">Apagar</button>`;

      postContainer.addEventListener('click', (e) => {
        if (e.target.dataset.remove) {
          if (window.confirm('Tem certeza de que deseja excluir a publicação?')) { //eslint-disable-line
            deleteRecipe(e.target.dataset.remove)
              .then(() => {
                window.location.reload();
              });
          }
        }
      });
    }
    timelinePost.appendChild(postContainer);
  });
};
