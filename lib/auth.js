import { app } from './config.js';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  updateProfile
} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js";

export const auth = getAuth(app);
const provider = new GoogleAuthProvider(app);

export function loginUserEmail(email, password) {
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      return user;
    });
}

//função de cadastro de usuário por email e senha:
export function signinUserEmail(email, password, name) {
  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      updateProfile(auth.currentUser, { //função do authentication para pegar dados do usuário como o displayName
        displayName: name,
      }).then(() => {
      }).catch((error) => {
      });
      const user = userCredential.user;
      return user;
    });
}

export const signinGoogle = () => {
  return signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      // const token = credential.accessToken;
      const user = result.user;
      return user;
    });
}

export function statusUser(status) {
  return onAuthStateChanged(auth, (user) => {
    status(user !== null);
  });
}

export function logout() {
  return signOut(auth);
}
