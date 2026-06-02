import { initializeApp } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-app.js";

import {
  getFirestore,
  collection,
  addDoc
} from "https://www.gstatic.com/firebasejs/12.14.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyA4mCTjkVvc7MIJMtcoTz0DU4z8-P1xh14",
  authDomain: "wallz-quote-output.firebaseapp.com",
  projectId: "wallz-quote-output",
  storageBucket: "wallz-quote-output.firebasestorage.app",
  messagingSenderId: "824791792471",
  appId: "1:824791792471:web:54b3c97dd0eada07409c12"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const form = document.getElementById("quoteForm");

if(form){

form.addEventListener("submit", async(e)=>{

e.preventDefault();

try{

await addDoc(collection(db,"quotes"),{

name: document.getElementById("name").value,
phone: document.getElementById("phone").value,
email: document.getElementById("email").value,
product: document.getElementById("product").value,
location: document.getElementById("location").value,
message: document.getElementById("message").value,
createdAt: new Date()

});

alert("Enquiry Submitted Successfully");

form.reset();

}catch(error){

console.error(error);
alert("Submission Failed");

}

});

}