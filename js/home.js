var Htmldocument = document,
  passwordInputHome = Htmldocument.getElementById("passwordHome"),
  emailInputHome = Htmldocument.getElementById("emailHome"),
  ancorHome = Htmldocument.getElementById("ancorHome"),
  alertRequiredHome = Htmldocument.getElementById("alertRequiredHome")
  

// if (condition) {
  
// }
var datacontainerHome = [];
datacontainerHome = JSON.parse(localStorage.getItem("signUpdata"));

console.log(datacontainerHome.length);

function compare() {
  for (var i = 0; i < datacontainerHome.length; i++) {
    console.log(datacontainerHome[i]);
    if (
      emailInputHome.value == datacontainerHome[i].Einput &&
      passwordInputHome.value == datacontainerHome[i].pass
    ) {
      alertRequiredHome.classList.add("d-none");
      ancorHome.setAttribute("href", "./welcome.html");
      
      localStorage.setItem("userName", datacontainerHome[i].Ninput);
    } else {
      alertRequiredHome.classList.remove("d-none");
    }
  }
}
ancorHome.addEventListener("click", function () {
  compare();

});

// sign Up







//welcome 

