import {app} from "./config.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js";

const inputEmail = document.querySelector('#email');
const inputPassword = document.querySelector('#password');
const btnLogin = document.querySelector('button');

btnLogin.addEventListener('click', (event) => {
  event.preventDefault();
  const auth = getAuth(app);
  createUserWithEmailAndPassword(auth, inputEmail.value, inputPassword.value)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
})