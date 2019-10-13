$(document).ready(function(){
  // Adapted from examples on the Querystring homepage.
  // var qs = new Querystring();
  // var v1 = qs.get("ServiceType");
  var aux = '';
  // Get it from the local storage
  var selected = localStorage.getItem('ServiceType');
  var selected1 = localStorage.getItem('DateAndTime');
  //var aux1 = "<small class='text-muted'>"+selected1+"</small>";
  aux += "<h2>"+selected+"</h2>";
  $('.h1la').append(selected);
//  $('.SelectedDate').append(aux1)
  document.getElementById('SelectedDate').innerHTML = selected1;
  console.log("selected="+selected);
  console.log(selected1);

/********************* ROYAL SOCIAL OPTIONS **********************************/
  //SEE THE OPTION OF A SWITCH CASE 
  //1 HOUR OF ROYAL SOCIAL
  if (selected == "1HSocial"){
    console.log("inside 1HSocial");
    document.getElementById('SelectedHours').innerHTML = "01:00 hora";
    document.getElementById('PriceHours').innerHTML = "$600";
  }

  //2 HOUR OF ROYAL SOCIAL
  if (selected == "2HSocial") {
    console.log("inside 2HSocial");
    document.getElementById('SelectedHours').innerHTML = "02:00 hora";
    document.getElementById('PriceHours').innerHTML = "$1,100";
  }

  //3 HOUR OF ROYAL SOCIAL
  if (selected == "3HSocial") {
    console.log("inside 3HSocial");
    document.getElementById('SelectedHours').innerHTML = "03:00 hora";
    document.getElementById('PriceHours').innerHTML = "$1,500";
  }

  //MORE HOURS OF ROYAL SOCIAL
  if (selected == "MoreHSocial") {
    document.getElementById('SelectedHours').innerHTML = "01:00 hora";
    document.getElementById('PriceHours').innerHTML = "$600";
  }
/********************* ROYAL SOCIAL OPTIONS **********************************/

/********************* ROYAL BUSINESS OPTIONS **********************************/
  //SEE THE OPTION OF A SWITCH CASE 
  //1 HOUR OF ROYAL BUSINESS
  if (selected == "1HBusiness") {
    document.getElementById('SelectedHours').innerHTML = "01:00 hora";
    document.getElementById('PriceHours').innerHTML = "$600";
  }

  //2 HOUR OF ROYAL BUSINESS
  if (selected == "2HBusiness") {
    document.getElementById('SelectedHours').innerHTML = "02:00 hora";
    document.getElementById('PriceHours').innerHTML = "$1,100";
  }

  //3 HOUR OF ROYAL BUSINESS
  if (selected == "3HBusiness") {
    document.getElementById('SelectedHours').innerHTML = "03:00 hora";
    document.getElementById('PriceHours').innerHTML = "$1,500";
  }

  //MORE HOURS OF ROYAL BUSINESS
  if (selected == "MoreHBusiness") {
    document.getElementById('SelectedHours').innerHTML = "01:00 hora";
    document.getElementById('PriceHours').innerHTML = "$600";
  }
/********************* ROYAL BUSINESS OPTIONS **********************************/
});

/************* HREFs ********************************/
function ScheduleEvent() {
  location.href = "/ScheduleEvent";
}
function Login(){
  location.href = "/login";
}
/************* HREFs ********************************/

//   NICE TO HAVE!
/*switch (expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
  // code block
}*/

function confirmOrder(){
  var userTest = firebase.auth().currentUser
  //firebase.auth().getcurrentuser().reload();
  firebase.auth().onAuthStateChanged(function (user, additionalUserInfo) {
    //user.reload();
    if (user) {

      console.log("Is loged in");
      
      console.log(user);
      console.log(user.emailVerified);
      console.log(user.providerData[0].providerId);//Check SIGN IN METHOD facebook or email.
      userTest.reload();
      console.log(userTest);
      if (userTest.emailVerified == true) {
      //if (user.emailVerified == true) {
        console.log("ENTRO!");
        //window.location.replace("/successfulOrder");
      }/*else{
        window.alert("Verifica tu cuenta para continuar!");
      }*/
      // User is signed in.
      if (additionalUserInfo == null) {//&& user.emailVerified == false
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
        //window.location.replace("/");
      }

      /*document.getElementById("user_div").style.display = "block";
      document.getElementById("login_div").style.display = "none";*/
    } else {

      console.log("Is NOT loged in");
      // No user is signed in.
      window.location.replace("/login");
    }
  });
}