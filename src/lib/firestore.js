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
} from './exports.js';

import { db } from './config.js';

export function createPost(recipe) {
  const postRecipe = addDoc(collection(db, 'recipes'), recipe);
  return postRecipe;
}

export async function printPostagem() {
  const arrayRecipes = [];
  const querySnapshot = await getDocs(collection(db, "recipes"));
  querySnapshot.forEach((doc) => {
    const data = doc.data();
    const id = doc.id;
    arrayRecipes.push({ ...data, id });
  });
  return arrayRecipes;
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
