import { app } from './config.js';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
  signOut
} from 'https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js';

const auth = getAuth(app);
const provider = new GoogleAuthProvider(app);

export function loginUserEmail(email, password) {
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      return user;
    });
}

export function signinUserEmail(email, password) {
  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
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
