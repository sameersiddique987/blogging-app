
// import { initializeApp , signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
import { getAuth , signInWithEmailAndPassword  ,signInWithPopup,GoogleAuthProvider  } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js"
import { auth } from "./config.js";


const form = document.querySelector("#form")
const email = document.querySelector("#email")
const password = document.querySelector("#password")
const google = document.querySelector("#googleBtn")

form.addEventListener("submit" , (event)=>{
    event.preventDefault()
    signInWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user)

      window.location = "home.html"
      email.value = " "
      password.value = " "
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);

      div.innerHTML+=errorMessage
    });
 
  });

  const provider = new GoogleAuthProvider();
google.addEventListener("click" , ()=>{
    signInWithPopup(auth, provider)
    .then((result) => {
      
      const credential = GoogleAuthProvider.credentialFromResult(result);
      
      
      const user = result.user;
      console.log(user);
      window.location = "home.html"
      
      
    }).catch((error) => {
      
      const errorCode = error.code;
      const errorMessage = error.message;
     console.log(errorMessage);
     
    });
})


