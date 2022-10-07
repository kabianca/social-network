import { createPost } from '../../lib/firestore.js';
import { auth } from '../../lib/auth.js';

export default () => {
  const modal = document.createElement('div');
  modal.id = 'modal';
  modal.innerHTML = ` 
    <section id="modal-content">
      <form id="input-post"> 
        <input type=text id="inputTitle" placeholder="Título da sua receita">
        <input type=number id="inputTime" placeholder="Tempo de preparo em minutos"><br>
        <select id="inputDifficult" name="difficult">
          <option name="difficult" value="difficult" selected>Dificuldade</option>
          <option name="easy" value="Fácil">Fácil</option>
          <option name="medium" value="Médio">Médio</option>
          <option name="hard" value="Difícil">Difícil</option>
        </select><br>
        <input type=text id="inputIngredients" placeholder="Ingredientes">
        <input type=text id="inputPrepare" placeholder="Modo de preparo">
      </form> 
      <div id="btns">
        <input type="submit" value="Voltar" id="btn-back">
        <input type="submit" value="Publicar" id="btn-publish">
      </div>
    </section>
  `;

  const btnPublish = modal.querySelector('#btn-publish');

  btnPublish.addEventListener('click', () => {
    const recipe = {
      title: modal.querySelector('#inputTitle').value,
      time: modal.querySelector('#inputTime').value,
      difficult: modal.querySelector('#inputDifficult').value,
      ingredients: modal.querySelector('#inputIngredients').value,
      prepare: modal.querySelector('#inputPrepare').value,
      date: new Date(),
      author: auth.currentUser.displayName,
      userUid: auth.currentUser.uid,
      likes: [],
    };

    if (recipe !== '') {
      createPost(recipe)
        .then(() => {
          modal.querySelector('form').reset();
          window.location.reload();
        });
    }
    modal.style.display = 'none';
  });

  const btnBack = modal.querySelector('#btn-back');
  btnBack.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
  return modal;
};
