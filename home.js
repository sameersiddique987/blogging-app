import {onAuthStateChanged , signOut } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js"
import {
  collection,
  addDoc,
  getDocs,
  doc, 
  deleteDoc ,
  updateDoc,
  Timestamp,
  query,
   where,
   orderBy,
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";
import { auth , db } from "./config.js";

const logout = document.querySelector("#logout")
const form = document.querySelector("#form")
const input = document.querySelector("#input")
const textarea = document.querySelector("#textarea")
const div = document.querySelector("#div")


let arr = []

function renderTodo(){
  div.innerHTML= "";
  if(arr.length === 0){
    div.innerHTML = `<span class="fs-5">No deta found</span>`;
    return
  }
  
  arr.map((item)=>{
    div.innerHTML +=`
    <div class=" gap-3 d-flex justify-contant-center flex-wrap">
   <div class="card " style="width: 18rem;">
  <div class="card-body">
    <h2 class="card-title">${item.input}</h2>
    <p class="card-text">${item.textarea}</p>
   
    <button type="click" class="deletebtn btn btn-danger "><i class="fa-solid fa-trash"></i></button>
    <button type="click" class="aditbtn btn btn-success "><i class="fa-solid fa-pen-to-square"></i></button>
  </div>
</div>
   </div>
   `;
  })


  const deletebtn = document.querySelectorAll(".deletebtn")
  const aditbtn = document.querySelectorAll(".aditbtn")
  
  deletebtn.forEach((btn , index)=>{
  
      btn.addEventListener( "click" ,async ()=>{
      // console.log( arr[index]);
      
  await deleteDoc(doc(db, "user", arr[index].id));
  console.log("data deleted");
  arr.splice(index, 1)
  renderTodo()
        })
    })
    
  
  
  aditbtn.forEach((btn , index)=>{
    
      btn.addEventListener( "click" , async ()=>{
      // console.log( arr[index]);
      const updateNewvalue = prompt("Enter New value")
      const washingtonRef = doc(db, "user", arr[index].id);
  
  
  await updateDoc(washingtonRef, {
    input : washingtonRef
  });
  console.log("updated value");
  arr[index].input  = updateNewvalue ;
  renderTodo()
        })
    })
  
  }





form.addEventListener("submit", async (event) => {
  event.preventDefault();
  console.log(arr);
  renderTodo();

  try {
    const docRef = await addDoc(collection(db, "user"), {
      input : input.value ,
      textarea : textarea.value,
      time: Timestamp.fromDate(new Date()),
    });
    console.log("Document written with ID: ", docRef.id);
    arr.push({
      input : input.value ,
      textarea : textarea.value,
      id : docRef.id
    })
    renderTodo()
    
  } catch (e) {
    console.error("Error adding document: ", e);
  }


});















logout.addEventListener("click" , ()=>{
    
signOut(auth).then(() => {
    window.location= "index.html"
  console.log("Sign-out successful.");
  
}).catch((error) => {
  console.log("An error happened.");
  
});
})








onAuthStateChanged(auth, (user) => {
    if (user) {
     
      const uid = user.uid;
      console.log(uid);
      
    } else {
      console.log("User is signed out");
       
      
    }
  });