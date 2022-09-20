import { logout, auth } from "../../lib/auth.js";

export default () => {
  const container = document.createElement('div');
  container.id = 'container-timeline';

  container.innerHTML = `
    <section id="header-timeline">
        <figure class="box">
            <img id="gif-timeline" src="assets/104313-cooking-chef.gif">
        </figure>
        <p> Olá, ${auth.currentUser.displayName}
        <h3>O que vamos cozinhar hoje?</h3>
    </section>  
    <section id="body-timeline">
        <div id="post-timeline"> 
          <h5>Postagem</h5>
        </div> 
        <nav>
            <ul>
              <li><a id="btn-home"><i class="fa-solid fa-house fa-2xl"></i></a></li>
              <li><a id="btn-logout"><i class="fa-solid fa-right-from-bracket fa-2xl"></i></a></li>
            </ul>  
        </nav>

    </section> 
    
    `;

  // const postText = container.querySelector('input');
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

  // pensando o algorítmo das postagens:
  // 1. receber o post do usuário no campo de input do post;
  // 2. transformar as informações do post em um objeto (post, displayName do usuário, data e hora, id do post);
  // 3. enviar esses dados para o firestores;
  // 4. acessar esses dados no firestore e imprimir na timeline (ler dados);

  return container;
};
