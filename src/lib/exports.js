export { initializeApp } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js';//eslint-disable-line

export {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  updateProfile,
} from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js';//eslint-disable-line

export {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  arrayUnion,
  arrayRemove,
  orderBy,
  updateDoc,
  doc,
  query,
} from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js';//eslint-disable-line
