import { editPost } from '../../lib/firestore.js';
import { auth } from '../../lib/auth.js';

export default (doc) => {
  const modalEdit = document.createElement('div');
  modalEdit.setAttribute('id', 'modal-edit');

  modalEdit.innerHTML = ` 
    <section class="modal-content">
      <form class="input-post"> 
        <input type=text class="inputTitle" value= "${doc.title}"><br>
        <div class="input-smaller">
          <select class="inputDifficult" name="difficult">
            <option name="difficult" value= "${doc.difficult}" selected>${doc.difficult}</option>
            <option name="easy" value="Fácil">Fácil</option>
            <option name="medium" value="Médio">Médio</option>
            <option name="hard" value="Difícil">Difícil</option>
          </select>
          <input type=number class="inputTime" value= "${doc.time}">
        </div>
        <textarea type=text class="inputIngredients" value= "${doc.ingredients}">${doc.ingredients}</textarea>
        <textarea type=text class="inputPrepare" value= "${doc.prepare}">${doc.prepare}</textarea>
      </form> 
      <p class="fill-all-inputs"></p>
      <div class="btns">
        <input type="submit" value="Voltar" class="btn-back">
        <input type="submit" value="Publicar" class="btn-publish">
      </div>
    </section>
  `;

  modalEdit.style.display = 'block';

  const btnPublish = modalEdit.querySelector('.btn-publish');
  const fillAllInputs = modalEdit.querySelector('.fill-all-inputs');

  btnPublish.addEventListener('click', () => {
    const newRecipe = {
      title: modalEdit.querySelector('.inputTitle').value,
      time: modalEdit.querySelector('.inputTime').value,
      difficult: modalEdit.querySelector('.inputDifficult').value,
      ingredients: modalEdit.querySelector('.inputIngredients').value,
      prepare: modalEdit.querySelector('.inputPrepare').value,
      date: new Date(),
      author: auth.currentUser.displayName,
      userUid: auth.currentUser.uid,
      likes: [],
    };

    if ((newRecipe.title && newRecipe.time && newRecipe.ingredients && newRecipe.prepare) !== ''
      && newRecipe.difficult !== 'difficult') {
      editPost(doc.id, newRecipe)
        .then(() => {
          modalEdit.querySelector('form').reset();
          window.location.reload();
          modalEdit.style.display = 'none';
        });
    } else {
      fillAllInputs.innerHTML = `
      Você precisa preencher todos os campos
      `;
    }
  });

  const btnBack = modalEdit.querySelector('.btn-back');
  btnBack.addEventListener('click', () => {
    modalEdit.style.display = 'none';
  });

  modalEdit.addEventListener('click', (e) => {
    if (e.target === modalEdit) {
      modalEdit.style.display = 'none';
    }
  });
  return modalEdit;
};
