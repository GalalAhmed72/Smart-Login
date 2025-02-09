var Htmldocument = document,
nameInputSign = Htmldocument.getElementById("nameSign"),
  emailInputSign = Htmldocument.getElementById("emailSign"),
  passwordSign = Htmldocument.getElementById("passwordSign"),
  loginBtnSign = Htmldocument.getElementById("login-btnSign"),
  alertRequiredSign = Htmldocument.getElementById("alertRequiredSign"),
  SuccessSign = Htmldocument.getElementById("SuccessSign"),
  capitalSign = Htmldocument.getElementById("capitalSign"),
  smallSign = Htmldocument.getElementById("smallSign"),
  exiteSign = Htmldocument.getElementById("exiteSign");




if (localStorage.getItem("signUpdata") == null) {
  var datacontainerSign = [];
} else {
  getlocal();
}

// console.log(datacontainerSign);

loginBtnSign.addEventListener("click", function () {
  if (validationInput() == true) {
    signdata();
    nameInputSign.classList.remove("is-valid");
  }
});

function signdata() {
  var data = {
    Ninput: nameInputSign.value,
    Einput: emailInputSign.value,
    pass: passwordSign.value,
  };
  datacontainerSign.push(data);
  setlocal();
  // console.log(datacontainerSign);
  reset();
}

function setlocal() {
  localStorage.setItem("signUpdata", JSON.stringify(datacontainerSign));
}
function getlocal() {
  datacontainerSign = JSON.parse(localStorage.getItem("signUpdata"));
}

function reset() {
  nameInputSign.value = "";
  emailInputSign.value = "";
  passwordSign.value = "";
}
function validationInput() {
  if (
    (nameInputSign.value != "") &
    (emailInputSign.value != "") &
    (passwordSign.value != "") &
    (nameregex() != false) &
    (emailvalidation() != false)
  ) {
    SuccessSign.classList.remove("d-none");
    alertRequiredSign.classList.add("d-none");
    return true;
  } else {
    SuccessSign.classList.add("d-none");
    alertRequiredSign.classList.remove("d-none");
    return false;
  }
}

function nameregex() {
  if (/^[A-Z]/.test(nameInputSign.value) == true) {
    if (/[a-z]{3,9}$/.test(nameInputSign.value) == true) {
      nameInputSign.classList.add("is-valid");
      nameInputSign.classList.remove("is-invalid");
      smallSign.classList.add("d-none");
      capitalSign.classList.add("d-none");
      return true;
    } else {
      nameInputSign.classList.add("is-invalid");
      nameInputSign.classList.remove("is-valid");
      capitalSign.classList.add("d-none");
      smallSign.classList.remove("d-none");
      return false;
    }
  } else {
    nameInputSign.classList.add("is-invalid");
    nameInputSign.classList.remove("is-valid");
    capitalSign.classList.remove("d-none");
    return false;
  }
}
nameInputSign.addEventListener("blur", function () {
  nameregex();
});

function emailvalidation() {
  for (var i = 0; i < datacontainerSign.length; i++) {
    if (emailInputSign.value == datacontainerSign[i].Einput) {
      exiteSign.classList.remove("d-none");
      return false;
    } else {
      exiteSign.classList.add("d-none");
      return true;
    }
  }
}

emailInputSign.addEventListener("blur", function () {
  emailvalidation();
});
