import { auth } from '../../lib/auth.js';
import { createPost } from '../../lib/firestore.js';
import { validatePost } from '../../validations.js';

export default () => {
  const modal = document.createElement('div');
  modal.setAttribute('id', 'modal');

  modal.innerHTML = ` 
    <section class="modal-content">
      <form class="input-post"> 
        <input type=text class="inputTitle" placeholder="Título da sua receita">
        <div class="input-smaller">
          <select class="inputDifficult" name="difficult">
            <option name="difficult" value= "difficult" selected>Dificuldade</option>
            <option name="easy" value="easy">Fácil</option>
            <option name="medium" value="medium">Médio</option>
            <option name="hard" value="hard">Difícil</option>
          </select>
          <input type=number class="inputTime" placeholder="Duração em minutos">
        </div>
          <textarea class="inputIngredients" 
          placeholder="Ingredientes separados por vírgula e espaço. (ex: 1 xícara de farinha, 2 ovos)"></textarea>
        <textarea type=text class="inputPrepare" placeholder="Modo de preparo"></textarea>
      </form> 
      <p class="fill-all-inputs"></p>
      <div class="btns">
        <input type="submit" value="Voltar" class="btn-back">
        <input type="submit" value="Publicar" class="btn-publish">
      </div>
    </section>
  `;

  modal.style.display = 'block';

  const btnPublish = modal.querySelector('.btn-publish');
  const fillAllInputs = modal.querySelector('.fill-all-inputs');

  btnPublish.addEventListener('click', () => {
    const recipe = {
      title: modal.querySelector('.inputTitle').value,
      time: modal.querySelector('.inputTime').value,
      difficult: modal.querySelector('.inputDifficult').value,
      ingredients: modal.querySelector('.inputIngredients').value,
      prepare: modal.querySelector('.inputPrepare').value,
      date: new Date(),
      author: auth.currentUser.displayName,
      userUid: auth.currentUser.uid,
      likes: [],
    };

    const validation = validatePost(
      recipe.title,
      recipe.time,
      recipe.ingredients,
      recipe.prepare,
      recipe.difficult,
    );
    if (validation === '') {
      createPost(recipe)
        .then(() => {
          modal.querySelector('form').reset();
          window.location.reload();
          modal.style.display = 'none';
        });
    } else {
      fillAllInputs.innerHTML = validation;
    }
  });

  const btnBack = modal.querySelector('.btn-back');
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
