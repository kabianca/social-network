import { loginUserEmail, signinGoogle } from '../../lib/auth.js';
import { redirect } from '../../redirect.js';

export const login = () => {
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
        <p id="msg-error"></p>
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
  const errorMessage = container.querySelector('#msg-error');

  btnRegister.addEventListener('click', (event) => {
    event.preventDefault();
    redirect('#register');
  });

  btnLogin.addEventListener('click', (event) => {
    event.preventDefault();
    if (inputEmail.value === '' || inputPassword.value === '') {
      errorMessage.innerHTML = 'Por favor, preencha todos os campos';
    } else if (inputEmail && inputPassword) {
      loginUserEmail(inputEmail.value, inputPassword.value)
        .then(() => {
          container.innerHTML = '';
          redirect('#timeline');
        })
        .catch((error) => {
          switch (error.code) {
            case 'auth/invalid-email':
              errorMessage.innerHTML = 'O e-mail inserido não é válido!';
              break;
            case 'auth/wrong-password':
              errorMessage.innerHTML = 'O e-mail ou a senha não está correto!';
              break;
            case 'auth/user-not-found':
              errorMessage.innerHTML = 'O e-mail não possui cadastro, cadastre-se!';
              break;
            default:
          }
        });
    }
  });

  btnGoogle.addEventListener('click', (event) => {
    event.preventDefault();
    signinGoogle().then(() => {
      redirect('#timeline');
    })
      .catch((error) => error);
  });
  return container;
};
