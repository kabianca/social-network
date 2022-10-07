import {
  collection,
  addDoc,
  getDocs,
} from './exports.js';

import { db } from './config.js';

export function createPost(recipe) {
  const postRecipe = addDoc(collection(db, 'recipes'), recipe);
  return postRecipe;
}

export async function printPostagem() {
  const arrayRecipes = [];
  const querySnapshot = await getDocs(collection(db, 'recipes'));
  querySnapshot.forEach((doc) => {
    const data = doc.data();
    const id = doc.id;
    arrayRecipes.push({ ...data, id });
  });
  return arrayRecipes;
}

// export async function printPostagem() {
//   const collectionRecipes = await getDocs(collection(db, 'recipes'));
//   collectionRecipes.forEach((doc) => {
//     console.log( doc.data());
//     });
// }

// const collectionRecipes = await getDocs(collection(db, 'recipes'));
// collectionRecipes.forEach((doc) => {
//       console.log( doc.data());
// });
