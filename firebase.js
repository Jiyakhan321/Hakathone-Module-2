
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import {getAuth, createUserWithEmailandPasswor, signInWithEmailandPassword} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js"
import {getfirestore, setdoc, doc} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js"

 const firebaseConfig = {
   apiKey: "AIzaSyAKRCTCFysLiY99UxhLkvYKD1Jxzsy1n88",
   authDomain: "login-form-e03b3.firebaseapp.com",
   projectId: "login-form-e03b3",
   storageBucket: "login-form-e03b3.firebasestorage.app",
   messagingSenderId: "372452263606",
   appId: "1:372452263606:web:81374caa9aa1d38b504817"
 };


 const app = initializeApp(firebaseConfig);
 const signUp=document.getElementById('submitsignup');
 signUp.addEventListener('click', (event)=>{
   event.preventDefault();
   const email=document.getElementById('Email Address').value;
   const Password=document.getElementById('Password').value;
   const Confirmpassword=document.getElementById('Confirm password').value;

   const auth=getAuth();
   const db=getfirestore();

   createUserWithEmailandPasswor(auth, email, Password)
   .then((userCrediential)=>{})
 })
