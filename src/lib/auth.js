import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  updateProfile,
}
  from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js';

import { app } from './config.js';

export const auth = getAuth(app);
const provider = new GoogleAuthProvider(app);

export async function loginUserEmail(email, password) {
  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  const user = userCredential.user;
  return user;
}

export async function signinUserEmail(email, password, name) {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  updateProfile(auth.currentUser, {
    displayName: name,
  })
    .then(() => {
    })
    .catch((error) => error);
  const user = userCredential.user;
  return user;
}

export async function signinGoogle() {
  const result = await signInWithPopup(auth, provider);
  const user = result.user;
  return user;
}

export function statusUser(status) {
  return onAuthStateChanged(auth, (user) => {
    status(user !== null);
  });
}

export function logout() {
  return signOut(auth);
}
