import { signinUserEmail, auth } from '../../lib/auth.js';
import { updateProfile } from '../../lib/exports.js';

export default () => {
  const container = document.createElement('div');
  container.id = 'container-register';

  const template = `
        <img id="logo" src="assets/cooking.png">
        <h1>Eu Chef</h1>
        <h3>Cadastro</h3>
        <form>
            <input type="text" id="name" placeholder="Nome">
            <input type="email" id="email" placeholder="email@example.com">
            <input type="password" id="password" placeholder="Senha">
            <input type="password" id="password-repeat" placeholder="Confirmação de Senha">
            <input type="submit" value="Cadastrar" id="btn-register">
        </form>
        <p id="msg-error"></p>
        <footer>
          <h4>Já possui conta?</h4>
          <a id="btn-register" href="#login">Logar</a>
        </footer>
    `;

  container.innerHTML = template;

  const inputName = container.querySelector('#name');
  const inputEmail = container.querySelector('#email');
  const inputPassword = container.querySelector('#password');
  const inputPasswordRepeat = container.querySelector('#password-repeat');
  const btnRegister = container.querySelector('#btn-register');
  const errorMessage = container.querySelector('#msg-error');

  btnRegister.addEventListener('click', (event) => {
    const regexEmail = /\S+@\S+\.\S+/;
    const emailValid = regexEmail.test(inputEmail.value);
    event.preventDefault();
    if (inputName.value === '') {
      errorMessage.innerHTML = 'Preencha o campo de nome!';
    } else if (inputEmail.value === '') {
      errorMessage.innerHTML = 'Preencha o campo de e-mail!';
    } else if (!emailValid) {
      errorMessage.innerHTML = 'Insira um e-mail válido (ex: seu@email.com)';
    } else if (inputPassword.value !== inputPasswordRepeat.value) {
      errorMessage.innerHTML = 'As duas senhas não são iguais';
    } else if (inputName && inputEmail && emailValid && inputPassword && inputPasswordRepeat) {
      signinUserEmail(inputEmail.value, inputPassword.value, inputName.value)
        .then(() => updateProfile(auth.currentUser, {
          displayName: inputName.value,
        }))
        .then(() => {
          window.location.hash = '#login';
        })
        .catch((error) => {
          switch (error.code) {
            case 'auth/invalid-email':
              errorMessage.innerHTML = 'O e-mail inserido não é válido!';
              break;
            case 'auth/weak-password':
              errorMessage.innerHTML = 'A senha deve ter 6 ou mais caracteres!';
              break;
            case 'auth/email-already-in-use':
              errorMessage.innerHTML = 'O e-mail inserido já possui cadastro, volte à página de login!';
              break;
            default:
          }
        });
    }
  });
  return container;
};
