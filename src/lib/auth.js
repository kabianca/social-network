import { app } from "./config.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
  signOut
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
export function signinUserEmail(email, password) {
  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      return user;
    })
}

//função de logar pelo Google:
export const signinGoogle = () => {
  return signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      return user;
    })
}

//função que verifica se o usuário está logado ou não:
export function statusUser(status) {
  return onAuthStateChanged(auth, (user) => {
    status(user !== null);
  })
}

//função de logout:
export function logout() {
  return signOut(auth);
}
