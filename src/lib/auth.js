import { app } from "./config.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  // onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider
} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js";

const auth = getAuth(app);
const provider = new GoogleAuthProvider(app);

//função de login por email e senha:
export function loginUserEmail(email, password) {
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      return user;
    })
}

//função de cadastro de usuário por email e senha:
export function signinUserEmail(userName, email, password) {
  return createUserWithEmailAndPassword(auth, userName, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      return user;
    })
}

//função de logar pelo Google:
export const signinGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      return user;
    })
}
