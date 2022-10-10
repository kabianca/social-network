import { likeRecipe, deslikeRecipe, deleteRecipe } from '../../lib/firestore.js';
import editRecipe from './editRecipe.js';

export default (recipes, timelinePost, user) => {
  recipes.forEach((doc) => {
    const postContainer = document.createElement('div');
    postContainer.id = 'single-post';
    let countLikes = doc.likes.length;

    const templatePost = `
        <h1 id="title">${doc.title}</h1>
        <p>por ${doc.author}</p>
        <div class="linha1">
          <p>${doc.time}min</p>
          <p>${doc.difficult}</p>
          <button class="btn-like like-count"><i class="fa-regular fa-heart"></i>${countLikes}</button>
        </div>
        <details>
          <summary>Ver mais</summary>
          <div>${doc.ingredients}</div>
          <div>${doc.prepare}</div>
          <p id="btn-del"></p>
          <p id="btn-edit"></p>
          <section id="divModal"></section>
        `;

    postContainer.innerHTML = templatePost;

    const delPost = postContainer.querySelector('#btn-del');
    const editPost = postContainer.querySelector('#btn-edit');
    const displayLikes = postContainer.querySelector('.like-count');
    const likeHeart = postContainer.querySelector('.fa-regular');
    const likeBtn = postContainer.querySelector('.btn-like');
    let likeForUser = doc.likes.filter((client) => client === user.uid);

    likeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (likeForUser.length === 0) {
        likeRecipe(doc.id, user.uid).then(() => {
          likeForUser.push(user.uid);
          countLikes += 1;
          displayLikes.textContent = `${countLikes}`;
          likeHeart.classList.toggle('fa-solid fa-heart');//não está funcionando agora
        });
      } else {
        deslikeRecipe(doc.id, user.uid).then(() => {
          likeForUser = [];
          countLikes -= 1;
          displayLikes.textContent = `${countLikes}`;
          likeHeart.classList.toggle('fa-regular fa-heart');//não está funcionando agora
        });
      }
    });

    if (user.uid === doc.userUid) {
      editPost.innerHTML = `<button id="edit">Editar</button>`;
      const edit = postContainer.querySelector('#edit');
      edit.addEventListener('click', (e) => {
        e.preventDefault();
        const divModal = postContainer.querySelector('#divModal');
        divModal.appendChild(editRecipe(doc));
      });
    
    delPost.innerHTML = `<button data-remove="${doc.id}">Apagar</button>`;

    postContainer.addEventListener('click', e => {
      if (e.target.dataset.remove) {
        if (window.confirm('Tem certeza de que deseja excluir a publicação?')) {
         deleteRecipe(e.target.dataset.remove)
          .then(() => {
            window.location.reload();
          })
          .catch(e => {
            console.log("Erro")
          });
        }
       }
    })
  }
    timelinePost.appendChild(postContainer);
  });

}
