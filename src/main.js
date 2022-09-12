// const container = document.querySelector('#root');
// container.innerHTML = imprimir a template de uma rota específica (login, registro, timeline)

// window.addEventListener('load', ()=> {
//   login();
// });
// import login from './pages/login/login.js';
// import timeline from './pages/timeline/timeline.js'
// import routes from './routes.js';

// let container = document.querySelector('#root');

// const init = () => window.addEventListener('hashchange', renderPage);
// const validateHash = (hash) => hash === ''  ? 'login' : hash.replace('#', '');

// const renderPage = () => {
//   const page = validateHash(window.location.hash);
//   container.innerHTML = '';
//   container.appendChild(routes[page]);
// }

// window.addEventListener('load', ()=> {
//   login()
// });

import "./lib/config.js"
import login from "./pages/login/login.js";
import timeline from "./pages/timeline/timeline.js";
import register from "./pages/register/register.js";
// import { statusUser } from "./lib/auth.js";

const container = document.querySelector("#root");

const routes = () => {
  container.innerHTML = "";
  switch (window.location.hash) {
    case "#login":
      container.appendChild(login());
      break;

    case "#timeline":
      // statusUser((logged) => {
      //   if (logged) { //construir a condicional corretamente se logado entra na timeline
      container.appendChild(timeline());
        // } else { //se estiver deslogado vai para o login
        //   container.appendChild(login());
        // }
      // });
      break;
    case "#register":
      container.appendChild(register());
      break;
    default:
      container.appendChild(login());
  }
};

const init = () => {
  window.addEventListener("hashchange", () => {
    routes();
  });
};

window.addEventListener("load", () => {
  routes();
  init();
});