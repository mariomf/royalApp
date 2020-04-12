/*$(document).ready(function(){
    login();
});*/
firebase.auth().onAuthStateChanged(function(user, additionalUserInfo) {
    if (user) {

      console.log("Is loged in");
      //console.log(additionalUserInfo.providerId);
      console.log(user);
      if (user.emailVerified = true){
        console.log("ENTRO!");
        window.location.replace("/ReviewOrder");
      }
      // User is signed in.
      if (additionalUserInfo == null){//&& user.emailVerified == false
        console.log("Is NOT verified");
        /*user.sendEmailVerification().then(function() {
          //Email sent
          window.alert("Te hemos enviado un mail de verificacion!")
        }).catch(function(error)) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;

          window.alert("Error..." + errorMessage);
        });*/

        //console.log("Is verified");
      } else {
        console.log("ENTRO!");
        window.location.replace("/ReviewOrder");
      }

      /*document.getElementById("user_div").style.display = "block";
      document.getElementById("login_div").style.display = "none";*/
    } else {

      console.log("Is NOT loged in");
      // No user is signed in.
    }
  });

 const signupForm = document.querySelector('#signup-form');
 signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;
  firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).then(function(result) {

    var user = result.user;
    user.sendEmailVerification().then(function(){
      //Email sent
      window.alert("Te hemos enviado un mail de verificacion!")
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;

      window.alert("Error..." + errorMessage);
    });

  }/*cred => {console.log(cred);}*/).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error..." + errorMessage);
    // ...
  });
 })

 const loginForm = document.querySelector('#login-form');
 loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  var userEmail_login = document.getElementById("email_field_login").value;
  var userPass_login = document.getElementById("password_field_login").value;
  firebase.auth().signInWithEmailAndPassword(userEmail_login, userPass_login).then(cred => {console.log(cred);}).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error..." + errorMessage);
    // ...
  });
 })

/******************Facebook LOGIN *****************/
function signinFacebook(){

  var provider = new firebase.auth.FacebookAuthProvider();
  //what kind of information or scope you want to access
  provider.addScope('user_birthday');
  firebase.auth().useDeviceLanguage();

  firebase.auth().signInWithPopup(provider).then(function (result) {
    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // .......................................
    console.log(user);
    var userEmailFacebook = document.querySelector("#user-emailFacebook");
    userEmailFacebook.innerHTML = user.email;
    var displayName = document.querySelector("#display-name");
    displayName.innerHTML = user.displayName;
    var img = document.createElement('img');
    img.src = user.photoURL;
    document.getElementById('profile-pic').appendChild(img);
    // .......................................

  }).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
    window.alert("Error..." + errorMessage);
  });
}
/******************Facebook LOGIN *****************/

function singUp(){
  window.location.replace("/SignUp");
}

/*function login(){
    //var userEmail = $("#email_field").val();
    //var userPass = $("#password_field").val();
    var userEmail = document.getElementById("email_field").value;
    var userPass = document.getElementById("password_field").value;



    console.log(userEmail.toString());
    console.log(userPass.toString());

    firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).then(cred => {console.log(cred);}).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;

      window.alert("Error..." + errorMessage);
      // ...
    });

    //window.alert(userEmail + " " + userPass + " fdsadfkjdsafk");
    /*firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;

        window.alert("Error.." + errorMessage);
      });*/
//}
