import {
  collection,
  addDoc,
  getDocs,
  arrayUnion,
  arrayRemove,
  updateDoc,
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
  querySnapshot.forEach((recipe) => {
    const data = recipe.data();
    data.id = recipe.id;
    arrayRecipes.push(data);
  });
  const copy = [...arrayRecipes];
  const sorted = copy.sort((a, b) => {
    if (a.date > b.date) {
      return -1;
    }
    return 0;
  });
  return sorted;
}

export async function editPost(idPost, newRecipe) {
  const docRef = doc(db, 'recipes', idPost);
  return updateDoc(docRef, newRecipe);
}

export async function likeRecipe(idPost, uidUser) {
  const docRef = doc(db, 'recipes', idPost);
  return updateDoc(docRef, {
    likes: arrayUnion(uidUser),
  });
}

export async function deslikeRecipe(idPost, uidUser) {
  const docRef = doc(db, 'recipes', idPost);
  return updateDoc(docRef, {
    likes: arrayRemove(uidUser),
  });
}

export async function deleteRecipe(idPost) {
  return deleteDoc(doc(db, 'recipes', idPost));
}
