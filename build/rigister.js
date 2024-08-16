import { getAuth , createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js"
import { auth } from "./config.js";


const form = document.querySelector("#form")
const email = document.querySelector("#email")
const password = document.querySelector("#password")
const firstname = document.querySelector("#First")
const lastname = document.querySelector("#Last")

form.addEventListener("submit" , (event)=>{
    event.preventDefault()
    createUserWithEmailAndPassword(auth, email.value, password.value , firstname.value,lastname.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user);
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
    
    
  });
})