import {
  collection,
  addDoc,
  // getDocs
} from './exports.js';

import { db } from './config.js';

export function createPost(recipe) {
  const postRecipe = addDoc(collection(db, 'recipes'), recipe);
  return postRecipe;
}

// export async function printpostagem(userId) {
//   const querySnapshot = await getDocs(collection(db, "users"));
//   querySnapshot.forEach((doc) => {
//     console.log(`${doc.id} => ${doc.data()}`);
//   });
// }
