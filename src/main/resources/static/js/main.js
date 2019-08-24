

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {

      console.log("Is loged in");
      // User is signed in.
      var user = firebase.auth().currentUser;

      window.alert("Bienvenido " + user.displayName);
      //window.location.replace("/");

      /*document.getElementById("user_div").style.display = "block";
      document.getElementById("login_div").style.display = "none";*/
    } else {

      console.log("Is NOT loged in");
      // No user is signed in.
    }
  });
