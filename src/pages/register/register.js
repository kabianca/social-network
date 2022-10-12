import {
  auth,
  signinUserEmail,
} from '../../lib/auth.js';

import {
  errorsFirebase,
  validateRegister,
} from '../../validations.js';

import { redirect } from '../../redirect.js';
import { updateProfile } from '../../lib/exports.js';

export const register = () => {
  const container = document.createElement('div');
  container.setAttribute('class', 'container');
  container.setAttribute('id', 'container-register');

  const template = `
        <img class="logo" src="assets/cooking.png">
        <h1 class="eu-chef">Eu Chef</h1>
        <h3 class="subtitle">Cadastro</h3>
        <form>
            <input type="text" id="name" placeholder="Nome">
            <input type="email" id="email" placeholder="email@example.com">
            <input type="password" id="password" placeholder="Senha">
            <input type="password" id="password-repeat" placeholder="Confirmação de Senha">
            <input type="submit" value="Cadastrar" id="btn-register">
        </form>
        <p class="msg-error"></p>
        <footer>
          <h4>Já possui conta?</h4>
          <a id="btn-register" href="#login">Logar</a>
        </footer>
    `;

  container.innerHTML = template;

  const name = container.querySelector('#name');
  const email = container.querySelector('#email');
  const password = container.querySelector('#password');
  const passwordRepeat = container.querySelector('#password-repeat');
  const btnRegister = container.querySelector('#btn-register');
  const errorMessage = container.querySelector('.msg-error');

  btnRegister.addEventListener('click', (event) => {
    event.preventDefault();
    const validation = validateRegister(
      name.value,
      email.value,
      password.value,
      passwordRepeat.value,
    );
    if (validation === '') {
      signinUserEmail(email.value, password.value, name.value)
        .then(() => updateProfile(auth.currentUser, {
          displayName: name.value,
        }))
        .then(() => {
          redirect('#login');
        })
        .catch((error) => {
          const errorFirebase = errorsFirebase(error.code);
          errorMessage.innerHTML = errorFirebase;
        });
    } else {
      errorMessage.innerHTML = validation;
    }
  });
  return container;
};
