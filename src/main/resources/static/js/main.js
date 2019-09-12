

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {

      console.log("Is loged in");
      // User is signed in.
      var user = firebase.auth().currentUser;

      //window.alert("Bienvenido " + user.displayName);
      //window.location.replace("/");

      /*document.getElementById("user_div").style.display = "block";
      document.getElementById("login_div").style.display = "none";*/
    } else {

      console.log("Is NOT loged in");
      // No user is signed in.
    }
  });

function whatsapp_btn() {
  location.href="https://wa.me/5213320275495?text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre."
}

function ScheduleEvent() {
  location.href="/ScheduleEvent"
}

function Photographer() {
  location.href = "/photographer"
}
