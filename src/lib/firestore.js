import {
    collection,
    addDoc,
    getDocs
} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";

import { auth } from "./auth.js";
import { db } from "./config.js";

//coletar os dados do post:
export const post = async (text) => {
    try {
        const docRef = await addDoc(collection(db, "post"), {
            name: auth.currentUser.displayName,
            postText: text,
            date: new Date(),
            userId: auth.currentUser.uid,
        });
        return docRef.id; //o que ele pede no console.log
    } catch (e) {
        // return e
    }
};

//ler os dados coletados:
const querySnapshot = await getDocs(collection(db, "post"));
querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`);
});