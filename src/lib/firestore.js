import {
  collection,
  addDoc,
  getDocs,
  arrayUnion,
  arrayRemove,
  // orderBy,
  updateDoc,
  // query,
  doc,
  deleteDoc,
} from './exports.js';

import { db } from './config.js';


export function createPost(recipe) {
  const postRecipe = addDoc(collection(db, 'recipes'), recipe);
  return postRecipe;
}

export async function printPostagem() {
  const arrayRecipes = [];
  const querySnapshot = await getDocs(collection(db, 'recipes'));
  // let teste = query(querySnapshot, orderBy('date'));
  querySnapshot.forEach((doc) => {
    const data = doc.data();
    const id = doc.id;
    arrayRecipes.push({ ...data, id });
  });
  const copy = [...arrayRecipes]
  return (copy.sort((a, b) => {
    if (a.date > b.date) {
      return -1;
    }
  }));
}

export async function editPost(idPost, newRecipe) {
  const docRef = doc(db, 'recipes', idPost);
  await updateDoc(docRef, newRecipe);
}

export async function likeRecipe(idPost, uidUser) {
  const docRef = doc(db, 'recipes', idPost);
  return await updateDoc(docRef, {
    likes: arrayUnion(uidUser),
  });
}

export async function deslikeRecipe(idPost, uidUser) {
  const docRef = doc(db, 'recipes', idPost);
  return await updateDoc(docRef, {
    likes: arrayRemove(uidUser),
  });
};

export async function deleteRecipe(idPost) {
  return await deleteDoc(doc(db, 'recipes', idPost))
}