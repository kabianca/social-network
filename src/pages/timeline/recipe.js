import { createPost } from '../../lib/firestore.js';
import { auth } from '../../lib/auth.js';

export default () => {
  const modal = document.createElement('div');
  modal.id = 'modal';
  modal.innerHTML = ` 
    <section class="modal-content">
      <form class="input-post"> 
        <input type=text class="inputTitle" placeholder="Título da sua receita">
        <select class="inputDifficult" name="difficult">
          <option name="difficult" value= "Dificuldade" selected>Dificuldade</option>
          <option name="easy" value="Fácil">Fácil</option>
          <option name="medium" value="Médio">Médio</option>
          <option name="hard" value="Difícil">Difícil</option>
        </select>
        <input type=number class="inputTime" placeholder="Tempo de preparo em minutos">
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

  // opção split modo de preparo
  // placeholder="Modo de preparo separado por ponto e espaço. (ex: Corte os legumes. Unte a forma)"></textarea>

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

    if ((recipe.title && recipe.time && recipe.ingredients && recipe.prepare) !== ''
      && recipe.difficult !== 'difficult') {
      createPost(recipe)
        .then(() => {
          modal.querySelector('form').reset();
          window.location.reload();
          modal.style.display = 'none';
        });
    } else {
      fillAllInputs.innerHTML = `Você precisa preencher todos os campos`;
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
