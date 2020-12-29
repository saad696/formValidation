//DOM & variables defination
//sign up
const signUpEmail = document.getElementById("signup-email");
const signUpPwd = document.getElementById("signup-pwd");
const signUpUserName = document.getElementById("signup-username");
const signUpBtn = document.getElementById("signup-btn");
const displayMsg = document.getElementById("display-signup-msg");
const nameHelp = document.getElementById("nameHelp");
const emailHelp = document.getElementById("emailHelp");
const passwordHelp = document.getElementById("passwordHelp");

//login
const displayUserName = document.getElementById("display-user-name");
const loginEmail = document.getElementById("login-email");
const loginPwd = document.getElementById("login-pwd");
const loginBtn = document.getElementById("login-btn");
const lEmailHelp = document.getElementById("l-emailHelp");
const lPasswordHelp = document.getElementById("l-passwordHelp") ;

const mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const pwdformat = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;

const users = [];

//function defination.
const signUpHandler = e => {
  e.preventDefault();
  const userDetails = {
    name: signUpUserName.value,
    email: signUpEmail.value,
    password: signUpPwd.value,
  };
  if ( signUpUserName.value === "" || signUpUserName.value == null) {
    signUpUserName.classList.add("is-danger")
    nameHelp.innerHTML = `<i class="fas fa-exclamation-circle"></i> Name is required.`
    return;
  } 
  else if(!(signUpEmail.value.match(mailformat))){
    signUpEmail.classList.add("is-danger")
    emailHelp.innerHTML = `<i class="fas fa-exclamation-circle"></i> Please enter a valid email.`
    return;
  }
  else if(!(signUpPwd.value.match(pwdformat))){
    signUpPwd.classList.add("is-danger")
    passwordHelp.innerHTML = `<i class="fas fa-exclamation-circle"></i> Password must be between 8-20 characters, and should includ one uppercase & one lowercase character & one number.`
    return;
  }  
  else{
    signUpUserName.classList.remove("is-danger")
    signUpEmail.classList.remove("is-danger")
    signUpPwd.classList.remove("is-danger")
    nameHelp.innerHTML = "";
    emailHelp.innerHTML = "";
    passwordHelp.innerHTML = "";
    users.push(userDetails);
    document.querySelector("form").reset();
  }
   displayMsg.innerText = `Sign Up successful`; 
   timeInterval(displayMsg);
   $("#signupForm").hide();
   $("#loginForm").show();
  console.log(users); 

};

const loginHandler = e => {
  e.preventDefault();
  users.every((uDetails) => {
    if(loginEmail.value === ""){
      loginEmail.classList.add("is-danger")
      lEmailHelp.innerHTML = `<i class="fas fa-exclamation-circle"></i> Input required.`
      return;
    }
    else if(uDetails.email  !==  loginEmail.value){
      loginEmail.classList.add("is-danger")
      lEmailHelp.innerHTML = `<i class="fas fa-exclamation-circle"></i> Invalid email.`
      return true;
    }
    else if(loginPwd.value === ""){
        loginPwd.classList.add("is-danger")
        lPasswordHelp.innerHTML = `<i class="fas fa-exclamation-circle"></i> Input required.`
        return;
      }
    else if(uDetails.password !== loginPwd.value){
      loginPwd.classList.add("is-danger")
      lPasswordHelp.innerHTML = `<i class="fas fa-exclamation-circle"></i> Invalid password.`
      return;
    }
    else{
      loginEmail.classList.remove("is-danger")
      loginPwd.classList.remove("is-danger")
      lEmailHelp.innerHTML = "";
      lPasswordHelp.innerHTML = "";
      loginEmail.value = "";
      loginPwd.value = "";
      displayUserName.innerText = `Welcome ${uDetails.name}`;
    } 
   });
    }  

const timeInterval = (clear) => {
  setInterval(() => {
    clear.innerText = "";
  }, 5000);
}

//jQuery to toggle the form.
$('#loginForm').hide();

$("#have-acc").click(function() {
  console.log('login btn clicked');
  $("#signupForm").hide();
  $("#loginForm").show() ;
});

$("#dont-have-acc").click(function() {
  console.log('regsiter btn clicked');
  $("#loginForm").hide();
  $("#signupForm").show();
});

//EventListeners .
signUpBtn.addEventListener("click", signUpHandler);
loginBtn.addEventListener("click", loginHandler);
