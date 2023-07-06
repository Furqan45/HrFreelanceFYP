import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqaOhvLlECs4Q8cck9H9Xmwi29jrRhdqo",
  authDomain: "fypcontactform.firebaseapp.com",
  databaseURL: "https://fypcontactform-default-rtdb.firebaseio.com",
  projectId: "fypcontactform",
  storageBucket: "fypcontactform.appspot.com",
  messagingSenderId: "318605684359",
  appId: "1:318605684359:web:16bd4f5ac6b6ad45fa9222"
};


firebase.initializeApp(firebaseConfig);

const fypcontactformDB = firebase.database().ref("fypcontactform")

document.getElementById("fypcontactform").addEventListener("submit", submitForm)

function submitForm(e) {
  e.preventDefault();

  console.log(e)
  var fname = getElementVal("name")
  var lname = getElementVal("Lname")
  var emailid = getElementVal("emailid")
  var msgContent = getElementVal("msgContent")
  saveMessages(fname, lname, emailid, msgContent);

  document.querySelector(".alert").style.display = "block";

  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
    document.getElementById("fypcontactform").reset()
  }, 3000);

}

const saveMessages = (fname, lname, emailid, msgContent) => {
  var newContactForm = fypcontactformDB.push();
  newContactForm.set({
    fname: fname,
    lname: lname,
    emailid: emailid,
    msgContent: msgContent,
  });
}

const getElementVal = (id) => {
  return document.getElementById(id).value;
}






document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.fa-bars').addEventListener('click', function () {
    this.classList.toggle('fa-times');
    document.querySelector('.navbar').classList.toggle('nav-toggle');
  });

  window.addEventListener('scroll', function () {
    var header = document.querySelector('.header');
    if (window.scrollY > 30) {
      header.style.background = '#112E7F';
      header.style.boxShadow = '0 .2rem .5rem rgba(0, 0, 0, .4)';
    } else {
      header.style.background = 'none';
      header.style.boxShadow = 'none';
    }
  });

  var accordionHeaders = document.querySelectorAll('.accordion-header');
  accordionHeaders.forEach(function (header) {
    header.addEventListener('click', function () {
      var accordionBody = this.nextElementSibling;
      var allAccordionBodies = document.querySelectorAll('.accordion .accordion-body');
      allAccordionBodies.forEach(function (body) {
        body.style.display = 'none';
      });
      accordionBody.style.display = 'block';
      var accordionHeaderSpan = this.querySelector('span');
      accordionHeaders.forEach(function (header) {
        header.querySelector('span').textContent = '+';
      });
      accordionHeaderSpan.textContent = '-';
    });
  });
});
