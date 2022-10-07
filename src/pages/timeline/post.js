import { likeRecipe, deslikeRecipe } from '../../lib/firestore.js';

export function printTimeline(recipes, timelinePost, user) {
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
          <p>${doc.ingredients}</p>
          <p>${doc.prepare}</p>
        </details>
      `;
      postContainer.innerHTML = templatePost;

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

      timelinePost.appendChild(postContainer);
  });

}