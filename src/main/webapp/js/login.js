/*$(document).ready(function(){
    login();
});*/
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.

      /*document.getElementById("user_div").style.display = "block";
      document.getElementById("login_div").style.display = "none";*/
    } else {
      // No user is signed in.
      /*document.getElementById("user_div").style.display = "none";
      document.getElementById("login_div").style.display = "block";*/
    }
  });

function login(){

    //var userEmail = $("#email_field").val();
    //var userPass = $("#password_field").val();
    var userEmail = document.getElementById("email_field").value;
    var userPass = document.getElementById("password_field").value;

    

    console.log(userEmail.toString());
    console.log(userPass.toString());

    firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;

      window.alert("Error..." + errorMessage);
      // ...
    });

    window.alert(userEmail + " " + userPass + "fdsadfkjdsafk");
    /*firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;

        window.alert("Error.." + errorMessage);
      });*/
}