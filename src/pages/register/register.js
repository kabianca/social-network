import { signinUserEmail } from "../../lib/auth.js"

//Gerar os elementos HTML da página:
export default () => {
    const container = document.createElement("div");
    container.id = "container-register"

    const template = `
        <img id="logo" src="assets/cooking.png">
        <h1>Eu Chef</h1>
        <h3>Cadastro</h3>
        <form>
            <input type="text" id="name" placeholder="Nome">
            <input type="text" id="user-name" placeholder="Nome de Usuário">
            <input type="email" id="email" placeholder="E-mail">
            <input type="password" id="password" placeholder="Senha">
            <input type="password" id="password-repeat" placeholder="Confirmação de Senha">
            <input type="submit" value="Cadastrar" id="btn-register">
        </form>
        <footer>
          <h4>Já possui conta?</h4>
          <a id="btn-register" href="#login">Logar</a>
        </footer>
    `;

    container.innerHTML = template;

    //Definir o comportamento da página de cadastro:
    const inputName = container.querySelector('#name');
    // const inputUserName = container.querySelector('#user-name');
    const inputEmail = container.querySelector('#email');
    const inputPassword = container.querySelector('#password');
    // const inputPassordRepeat = container.querySelector('#password-repeat');
    const btnRegister = container.querySelector('#btn-register');

    btnRegister.addEventListener('click', (event) => {
        event.preventDefault();
        signinUserEmail(inputEmail.value, inputPassword.value, inputName.value)
          .then((userCredential) => {
            window.location.hash = '#timeline';
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
          });
      });
    return container;
}