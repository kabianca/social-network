import { logout, auth } from '../../lib/auth.js';

export default () => {
  const container = document.createElement('div');
  container.id = 'container-timeline';
  // const userName = auth.currentUser.displayName;
  // const userFirstName = userName.split(' ])

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
};
