import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";
const auth = getAuth();

const signUp = () => {
    console.log(auth);
    let userName = document.getElementById("username")
    let email = document.getElementById("email")
    let password = document.getElementById("password")
    createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((resolve) => {
            alert("Signup successful")
            window.location = "https://www.foodpanda.com/"
        })
        .catch((reject) => {
            alert("Signup rejected")
        })
}
const signUp_Btn = document.getElementById("signup-btn")
signUp_Btn.addEventListener("click", signUp);




const login = () => {
    let email = document.getElementById("login-email")
    let password = document.getElementById("login-password")
    signInWithEmailAndPassword(auth, email.value, password.value)
        .then((resolve) => {
            alert("Login Successful!")
            window.location = "https://www.foodpanda.com/"
        })
        .catch((reject) => {
            alert("Login rejected!")
        })
}
const login_btn = document.getElementById("login-btn")
login_btn.addEventListener("click", login);