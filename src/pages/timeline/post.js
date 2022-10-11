import { likeRecipe, deslikeRecipe, deleteRecipe } from '../../lib/firestore.js';
import editRecipe from './editRecipe.js';

export default (recipes, timelinePost, user) => {
  recipes.forEach((doc) => {
    let countLikes = doc.likes.length;
    const postContainer = document.createElement('div');
    postContainer.setAttribute('class', 'single-post');

    const templatePost = `
        <h1 class="title">${doc.title}</h1>
        <p class="author-post">por ${doc.author}</p>
        <div class="information">
          <p>${doc.time}min</p>
          <p>${doc.difficult}</p>
          <button class="btn-like like-count"><i class="fa-regular fa-heart"></i>  ${countLikes}</button>
        </div>
        <details>
          <summary>Ver mais</summary>
          <div class="recipe-complete">
            <ul></ul>
          </div>
          <div class="recipe-complete">${doc.prepare}</div>
          <div class="btns">
            <div class="div-btn-del"></div>
            <div class="div-btn-edit"></div>
          </div>
        </details>
        <section class="divModal"></section>
        `;

    postContainer.innerHTML = templatePost;

    const delPost = postContainer.querySelector('.div-btn-del');
    const editPost = postContainer.querySelector('.div-btn-edit');
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
      likeBtn.innerHTML = `<i class="fa-solid fa-heart"></i>  ${countLikes}`;
    }

    likeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (likeForUser.length === 0) {
        likeRecipe(doc.id, user.uid).then(() => {
          likeForUser.push(user.uid);
          countLikes += 1;
          displayLikes.textContent = `${countLikes}`;
          likeBtn.innerHTML = `<i class="fa-solid fa-heart"></i>  ${countLikes}`;
        });
      } else {
        deslikeRecipe(doc.id, user.uid).then(() => {
          likeForUser = [];
          countLikes -= 1;
          displayLikes.textContent = `${countLikes}`;
          likeBtn.innerHTML = `<i class="fa-regular fa-heart"></i>  ${countLikes}`;
        });
      }
    });

    if (user.uid === doc.userUid) {
      editPost.innerHTML = `<button class="btn-edit">Editar</button>`;
      const btnEdit = postContainer.querySelector('.btn-edit');
             
      btnEdit.addEventListener('click', (e) => {
        e.preventDefault();
        const divModal = postContainer.querySelector('.divModal');
        divModal.appendChild(editRecipe(doc));
      });

      delPost.innerHTML = `<button class="btn-del">Apagar</button>`;
      const btnDel = postContainer.querySelector('.btn-del');

      btnDel.addEventListener('click', (e) => {
        e.preventDefault();
          if (window.confirm('Tem certeza de que deseja excluir a publicação?')) { //eslint-disable-line
            deleteRecipe(doc.id)
              .then(() => {
                window.location.reload();
              });
          }
      });
    }
    timelinePost.appendChild(postContainer);
  });
};
