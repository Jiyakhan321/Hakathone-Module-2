import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyB1ARJes6Vq0nlbkXH2CsfgLXEabToHV4s",
  authDomain: "fir-signup-project-c04eb.firebaseapp.com",
  projectId: "fir-signup-project-c04eb",
  storageBucket: "fir-signup-project-c04eb.firebasestorage.app",
  messagingSenderId: "192780623776",
  appId: "1:192780623776:web:4f328076f6f25ea7464ec5"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Handle form submission
document.getElementById("registrationForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const message = document.getElementById("message");

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      message.style.color = "green";
      message.textContent = "Registration successful!";
    })
    .catch((error) => {
      message.textContent = error.message;
    });
});

