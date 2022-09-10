const lName = document.getElementById("lname");
const fName = document.getElementById("fname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  if (/\S+/gi.test(fName.value) == false) {
    document.querySelector(".fname-error").style.display = "block";
    document.querySelector(".fname-img").style.display = "block";
  } else {
    document.querySelector(".fname-error").style.display = "none";
    document.querySelector(".fname-img").style.display = "none";
  }

  if (/\S+/gi.test(lName.value) == false) {
    document.querySelector(".lname-error").style.display = "block";
    document.querySelector(".lname-img").style.display = "block";
  } else {
    document.querySelector(".lname-error").style.display = "none";
    document.querySelector(".lname-img").style.display = "none";
  }

  if (/^\S+@\S+\.\S+$/gi.test(email.value) == false) {
    document.querySelector(".email-error").style.display = "block";
    document.querySelector(".email-img").style.display = "block";
  } else {
    document.querySelector(".email-error").style.display = "none";
    document.querySelector(".email-img").style.display = "none";
  }

  if (/\S+/gi.test(password.value) == false) {
    document.querySelector(".password-error").style.display = "block";
    document.querySelector(".password-img").style.display = "block";
  } else {
    document.querySelector(".password-error").style.display = "none";
    document.querySelector(".password-img").style.display = "none";
  }
});
