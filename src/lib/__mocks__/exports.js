export const initializeApp = jest.fn();

const teste = { currentUser: 'user' };
export const getAuth = jest.fn(() => teste);
export const signInWithEmailAndPassword = jest.fn();
export const createUserWithEmailAndPassword = jest.fn();
export const onAuthStateChanged = jest.fn();
export const signInWithPopup = jest.fn();
export const GoogleAuthProvider = jest.fn();
export const signOut = jest.fn();
export const updateProfile = jest.fn();
