import { signinUserEmail } from "../../lib/auth.js"

//Gerar os elementos HTML da página:
export default () => {
    const container = document.createElement("div");

    const template = `
        <img src="assets/cooking.png">
        <h1>Eu Chef</h1>
        <h3>Sua Rede de Receitas</h3>
        <form>
            <input type="text" id="name" placeholder="Nome">
            <input type="text" id="user-name" placeholder="Nome de Usuário">
            <input type="email" id="email" placeholder="E-mail">
            <input type="date" id="user-born" placeholder="Data de Nascimento (ex: 01/31/2012)">
            <input type="password" id="password" placeholder="Senha">
            <input type="password" id="password" placeholder="Confirmação de Senha">
            <input type="submit" value="Cadastrar" id="btn-signin">
        </form>
        <h5>Já possui conta? <a href="#login">Entrar</a></h5>
    `;

    container.innerHTML = template;

    //Definir o comportamento da página de cadastro:
    const inputEmail = container.querySelector('#email');
    const inputPassword = container.querySelector('#password');
    const btnSignin = container.querySelector('#btn-signin');

    btnSignin.addEventListener('click', (event) => {
        event.preventDefault();
        signinUserEmail(auth, inputEmail.value, inputPassword.value)
          .then((userCredential) => {
            // encaminhar usuário para timeline
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
          });
      });
    return container;
}