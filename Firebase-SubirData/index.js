// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
} from "https://www.gstatic.com/firebasejs/9.0.2/firebase-firestore.js";

//Aquí cambias a tu configuración con Firebase
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function addUser(user) {
  try {
    const docRef = await addDoc(collection(db, "users"), user);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

//Si es un arreglo de objetos, usas esta versión
/*
const users = [
  { name: "Alejandro", age: 22, email: "alejandromedinae02@gmail.com" },
  { name: "John", age: 25, email: "john@gmail.com" },
  { name: "Jane", age: 30, email: "jane@gmail.com" },
];

users.forEach(async (user) => {
  await addUser(user);
});*/

// ---------------------------------------------
//Si es un objeto, usas esta versión

/*
const user = {
  name: "Alejandro",
  age: 22,
  email: "alejandromedinae02@gmail.com",
};

addUser(user);
*/
