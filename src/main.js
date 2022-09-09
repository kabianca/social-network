import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
export {initializeApp, getAnalytics} from "./config.js";

const inputEmail = document.querySelector('#email').value;
const inputPassword = document.querySelector('#password').value;
const btnLogin = document.querySelector('button');
btnLogin.addEventListener('click', () => {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, inputEmail, inputPassword)
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
  }

  //teste
