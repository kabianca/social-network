import { logout, auth } from '../../lib/auth.js';
import { postagem } from '../../lib/firestore.js';

export default () => {
  const container = document.createElement('div');
  container.id = 'container-timeline';

  container.innerHTML = `
    <section id="header-timeline">
        <figure class="box">
            <img id="gif-timeline" src="assets/104313-cooking-chef.gif">
        </figure>
        <div id="text-header">
          <p> Olá, ${auth.currentUser.displayName}!</p>
          <h3>O que vamos cozinhar hoje?</h3>
        </div>
    </section>  
    <section id="body-timeline">
        <button id="btn-modal">Clique aqui para publicar sua receita!</button>
        <section id="modal"></section>
        <section id="timeline-post"></section>
        <nav>
            <ul>
              <li><a id="btn-home"><i class="fa-solid fa-house fa-2xl"></i></a></li>
              <li><a id="btn-logout"><i class="fa-solid fa-right-from-bracket fa-2xl"></i></a></li>
            </ul>
        </nav>
    </section>
    `;

  // ------- testes postagem a partir daqui -------
  const modal = container.querySelector('#modal');
  modal.innerHTML = ` 
    <section id="modal-content">
      <div id="input-post"> 
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
      </div> 
      <div id="btns">
        <input type="submit" value="Voltar" id="btn-back">
        <input type="submit" value="Publicar" id="btn-publish">
      </div>
    </section>
    `;

  const btnModal = container.querySelector('#btn-modal');

  const timelinePost = container.querySelector('#timeline-post');

  btnModal.addEventListener('click', (event) => {
    event.preventDefault();
    modal.style.display = "block";
  })

  const inputTitle = modal.querySelector('#inputTitle');
  const inputTime = modal.querySelector('#inputTime');
  const inputDifficult = modal.querySelector('#inputDifficult');
  const inputIngredients = modal.querySelector('#inputIngredients');
  const inputPrepare = modal.querySelector('#inputPrepare');

  const btnPublish = modal.querySelector('#btn-publish');

  btnPublish.addEventListener('click', (event) => {
    event.preventDefault();
    postagem(inputTitle.value,
      auth.currentUser.displayName,
      inputTime.value,
      inputDifficult.value,
      inputIngredients.value,
      inputPrepare.value,
      new Date(),
      auth.currentUser.uid);

    // const printPost = document.createElement('div');
    // printPost.id = 'newPost';
    // timelinePost.appendChild(printPost);
    timelinePost.innerHTML = `
      <h1 id="title">${inputTitle.value}</h1>
      <p>por ${auth.currentUser.displayName}</p>
      <div class="linha1">
        <p>${inputTime.value}min</p>
        <p>${inputDifficult.value}</p>
        <p>Curtir</p>
      </div>
      <h5>Ver mais</h5>
      `;
      modal.style.display = "none";
    // if (publication !== '') {
    //   recipePost(recipe);
    // }
  });

  const btnBack = modal.querySelector('#btn-back');
  btnBack.addEventListener('click', () => {
    modal.style.display = "none";
  });

  modal.addEventListener ('click', (e) => {
    if (e.target == modal){
    modal.style.display = "none";
    }
  });

  // --------- navegação timeline volta a partir daqui --------

  const btnLogout = container.querySelector('#btn-logout');
  const btnHome = container.querySelector('#btn-home');

  btnHome.addEventListener('click', (event) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  btnLogout.addEventListener('click', () => {
    logout()
      .then(() => {
        window.location.hash = '#login';
      });
  });

  return container;
}
