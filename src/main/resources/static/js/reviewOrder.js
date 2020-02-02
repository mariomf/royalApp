$(document).ready(function(){
  // Adapted from examples on the Querystring homepage.
  // var qs = new Querystring();
  // var v1 = qs.get("ServiceType");
  //var aux = '';
  // Get it from the local storage
  var selected = localStorage.getItem('ServiceType');
  var selected1 = localStorage.getItem('DateAndTime');
  var TotalPrice = 0;
  //var aux1 = "<small class='text-muted'>"+selected1+"</small>";
  //aux += "<h2>"+selected+"</h2>";
  //$('.h1la').append(selected);
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

    TotalPrice = 600;
  }

  //2 HOUR OF ROYAL SOCIAL
  if (selected == "2HSocial") {
    console.log("inside 2HSocial");
    document.getElementById('SelectedHours').innerHTML = "02:00 hora";
    document.getElementById('PriceHours').innerHTML = "$1,100";

    TotalPrice = 1100;
  }

  //3 HOUR OF ROYAL SOCIAL
  if (selected == "3HSocial") {
    console.log("inside 3HSocial");
    document.getElementById('SelectedHours').innerHTML = "03:00 hora";
    document.getElementById('PriceHours').innerHTML = "$1,500";

    TotalPrice = 1500;
  }

  //4 HOUR OF ROYAL SOCIAL
  if (selected == "4HSocial") {
    document.getElementById('SelectedHours').innerHTML = "04:00 hora";
    document.getElementById('PriceHours').innerHTML = "$1,500";

    TotalPrice = 1500;
  }
  //5 HOUR OF ROYAL SOCIAL
  if (selected == "5HSocial") {
    document.getElementById('SelectedHours').innerHTML = "05:00 hora";
    document.getElementById('PriceHours').innerHTML = "$1,500";

    TotalPrice = 1500;
  }
  //6 HOUR OF ROYAL SOCIAL
  if (selected == "6HSocial") {
    document.getElementById('SelectedHours').innerHTML = "06:00 hora";
    document.getElementById('PriceHours').innerHTML = "$1,500";

    TotalPrice = 1500;
  }

  //7 HOUR OF ROYAL SOCIAL
  if (selected == "7HSocial") {
    document.getElementById('SelectedHours').innerHTML = "07:00 hora";
    document.getElementById('PriceHours').innerHTML = "$1,500";

    TotalPrice = 1500;
  }

  //MORE HOURS OF ROYAL SOCIAL
  if (selected == "MoreHSocial") {
    document.getElementById('SelectedHours').innerHTML = "01:00 hora";
    document.getElementById('PriceHours').innerHTML = "$600";

    TotalPrice = 600;
  }
/********************* ROYAL SOCIAL OPTIONS **********************************/

/********************* ROYAL BUSINESS OPTIONS **********************************/
  //SEE THE OPTION OF A SWITCH CASE
  //1 HOUR OF ROYAL BUSINESS
  if (selected == "1HBusiness") {
    document.getElementById('SelectedHours').innerHTML = "01:00 hora";
    document.getElementById('PriceHours').innerHTML = "$600";

    TotalPrice = 600;
  }

  //2 HOUR OF ROYAL BUSINESS
  if (selected == "2HBusiness") {
    document.getElementById('SelectedHours').innerHTML = "02:00 hora";
    document.getElementById('PriceHours').innerHTML = "$1,100";

    TotalPrice = 1100;
  }

  //3 HOUR OF ROYAL BUSINESS
  if (selected == "3HBusiness") {
    document.getElementById('SelectedHours').innerHTML = "03:00 hora";
    document.getElementById('PriceHours').innerHTML = "$1,500";

    TotalPrice = 1500;
  }

  //4 HOUR OF ROYAL BUSINESS
  if (selected == "4HBusiness") {
    document.getElementById('SelectedHours').innerHTML = "04:00 hora";
    document.getElementById('PriceHours').innerHTML = "$1,500";

    TotalPrice = 1500;
  }
  //5 HOUR OF ROYAL BUSINESS
  if (selected == "5HBusiness") {
    document.getElementById('SelectedHours').innerHTML = "05:00 hora";
    document.getElementById('PriceHours').innerHTML = "$1,500";

    TotalPrice = 1500;
  }
  //6 HOUR OF ROYAL BUSINESS
  if (selected == "6HBusiness") {
    document.getElementById('SelectedHours').innerHTML = "06:00 hora";
    document.getElementById('PriceHours').innerHTML = "$1,500";

    TotalPrice = 1500;
  }

  //7 HOUR OF ROYAL BUSINESS
  if (selected == "7HBusiness") {
    document.getElementById('SelectedHours').innerHTML = "07:00 hora";
    document.getElementById('PriceHours').innerHTML = "$1,500";

    TotalPrice = 1500;
  }

  //MORE HOURS OF ROYAL BUSINESS
  if (selected == "MoreHBusiness") {
    document.getElementById('SelectedHours').innerHTML = "01:00 hora";
    document.getElementById('PriceHours').innerHTML = "$600";

    TotalPrice = 600;
  }
/********************* ROYAL BUSINESS OPTIONS **********************************/

document.getElementById('TotalPrices').innerHTML = "$" + TotalPrice;

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

  firebase.auth().onAuthStateChanged(function (user, additionalUserInfo) {

    if (user) {

      if (user.providerData[0].providerId == 'facebook.com'){

        var FormInfo = {FirstName: user.displayName,
            LastName: null,
            Email: user.email,
            Link: null,
            Equipment: null,
            AgreeTerms: null,
        };
        //SEND MAIL HERE
        accion(FormInfo);

      }else{
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
          //SEND MAIL HERE
          var FormInfo = {FirstName: " ",
              LastName: "",
              Email: user.email,
              Link: "",
              Equipment: "",
              AgreeTerms: "",
          };
          //SEND MAIL HERE
          accion(FormInfo);
        } else {
          window.alert("Te enviamos un correo, verifica tu cuenta y refresca la pantalla para continuar!!");
        }
      }


    } else {

      console.log("Is NOT loged in");
      // No user is signed in.
      window.location.replace("/login");
    }
  });
}

function accion(FormInfo) {

    var urlVideogamesPersist = "/sendOrderMail";
    //var newForm = fillForms();

    postearMail(urlVideogamesPersist,FormInfo);

    console.log(JSON.stringify(FormInfo));
    alert(FormInfo.FirstName +" ¡GRACIAS!");
    window.location.replace("/successfulOrder");
}

function postearMail(UrlAEnviar,data){
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: UrlAEnviar,
        data:  JSON.stringify(data),
        dataType: "json"
    });
}

//*******************************    Object FormInfo       ***********************************************************
// function fillForms() {
//
//         var FormInfo = {FirstName: $("#validationDefault01").val(),
//             LastName: $("#validationDefault02").val(),
//             Email: $("#validationDefaultUsername").val(),
//             Link: $("#validationDefault03").val(),
//             Equipment: $("#exampleFormControlTextarea1").val(),
//             AgreeTerms: $("#invalidCheck2").val(),
//         };
//
//         return FormInfo;
//
// }
