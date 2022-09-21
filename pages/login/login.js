import { loginUserEmail, signinGoogle } from '../../lib/auth.js';

export default () => {
  const container = document.createElement('div');
  container.id = 'container-login';

  const template = `
        <img id="logo" src="assets/cooking.png">
        <h1>Eu Chef</h1>
        <h3>Sua Rede de Receitas</h3>
        <form>
          <input type="email" id="email" placeholder="Insira seu e-mail">
          <input type="password" id="password" placeholder="Digite sua senha">
          <input id="btn-login" type="submit" value="Logar" />
          <button id="btn-google">
            <img id="img-google" src="assets/btn_google_signin_light_normal_web@2x.png" alt="botão de login com conta google">
          </button>
        </form>
        <footer>
          <h4>Não possui conta?</h4>
          <a id="btn-register" href="#register">Cadastre-se</a>
        </footer>
    `;

  container.innerHTML = template;

  const inputEmail = container.querySelector('#email');
  const inputPassword = container.querySelector('#password');
  const btnLogin = container.querySelector('#btn-login');
  const btnGoogle = container.querySelector('#btn-google');
  const btnRegister = container.querySelector('#btn-register');

  btnRegister.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.hash = '#register';
  });

  btnLogin.addEventListener('click', (event) => {
    event.preventDefault();
    loginUserEmail(inputEmail.value, inputPassword.value)
      .then(() => {
        container.innerHTML = '';
        window.location.hash = '#timeline';
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  });

  btnGoogle.addEventListener('click', (eventTwo) => {
    eventTwo.preventDefault();
    signinGoogle().then(() => {
      window.location.hash = '#timeline';
    })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  });
  return container;
};
