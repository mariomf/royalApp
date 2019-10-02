$(document).ready(function(){
  // Adapted from examples on the Querystring homepage.
  // var qs = new Querystring();
  // var v1 = qs.get("ServiceType");
  var aux = '';
  // Get it from the local storage
  var selected = localStorage.getItem('ServiceType');
  var selected1 = localStorage.getItem('DateAndTime');
  // var aux ="<h1>"+v1+"</h1>";
  aux += "<h2>"+selected+"</h2>";
  $('.h1la').append(selected);

  console.log(selected);
  console.log(selected1);

});

function ScheduleEvent() {
  location.href = "/ScheduleEvent";

}