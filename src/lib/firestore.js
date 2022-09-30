import {
  collection,
  addDoc,
  // getDocs
} from './exports.js';

import { db } from './config.js';

export async function postagem(titulo, autor, tempo, dificuldade, ingredientes, preparo, data, user) {
    const publication = await addDoc(collection(db, 'users'), {
      title: titulo,
      author: autor,
      time: tempo,
      difficult: dificuldade,
      ingredients: ingredientes,
      prepare: preparo,
      date: data,
      userUid: user,
    });
}

// export async function printpostagem(userId) {
//   const querySnapshot = await getDocs(collection(db, "users"));
//   querySnapshot.forEach((doc) => {
//     console.log(`${doc.id} => ${doc.data()}`);
//   });
// }
