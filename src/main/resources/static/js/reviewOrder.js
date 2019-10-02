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
  console.log(selected);
  console.log(selected1);

  if (selected = '1HSocial'){
    document.getElementById('SelectedHours').innerHTML = "01:00 hora";
    document.getElementById('PriceHours').innerHTML = "$600";
  }

});

function ScheduleEvent() {
  location.href = "/ScheduleEvent";

}