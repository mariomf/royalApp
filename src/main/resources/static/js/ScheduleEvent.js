
//$(document).ready(


//Date1 = document.getElementsByClassName('picker-switch');

//var aux1 = $('#datetimepicker12').data("DateTimePicker").viewDate();
//console.log(aux1);
var aux1;

$(function () {
  $('#datetimepicker12').datetimepicker({
    inline: true,
    sideBySide: true
  });
  $('#datetimepicker12').data("DateTimePicker").stepping(15);
  aux1 = $('#datetimepicker12').data("DateTimePicker").viewDate();
  var aux3 = $('#datetimepicker12').data("DateTimePicker").viewMode();
  var aux2 = $('#datetimepicker12').datetimepicker();
  console.log(aux1);
  console.log(aux1._d);
  console.log(aux3);
  console.log(aux2);
});

function reviewOrder1HourSocial(){
  //$('#datetimepicker').data("DateTimePicker").FUNCTION()
  aux1 = $('#datetimepicker12').data("DateTimePicker").viewDate();
  localStorage.setItem('DateAndTime', aux1._d);
  localStorage.setItem('ServiceType','1HSocial');
  location.href="/ReviewOrder";

}
//);


//********** GET DATE AND TIME **********/









