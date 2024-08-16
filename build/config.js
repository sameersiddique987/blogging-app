
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js"

import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";
const firebaseConfig = {
  apiKey: "AIzaSyCLmjVJr4z-3mvwyJlxmyEwSlA2EaEvZnI",
  authDomain: "crud-76e25.firebaseapp.com",
  projectId: "crud-76e25",
  storageBucket: "crud-76e25.appspot.com",
  messagingSenderId: "820198701919",
  appId: "1:820198701919:web:c187ee5a268de56fded4ea",
  measurementId: "G-4JJCX91CDZ"
};


 export const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app)
 export const db = getFirestore(app);
