
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

/********************* ROYAL SOCIAL OPTIONS **********************************/

//1 HOUR OF ROYAL SOCIAL
function reviewOrder1HourSocial(){
  //$('#datetimepicker').data("DateTimePicker").FUNCTION()
  aux1 = $('#datetimepicker12').data("DateTimePicker").viewDate();
  localStorage.setItem('DateAndTime', aux1._d);
  localStorage.setItem('ServiceType','1HSocial');
  location.href="/ReviewOrder";
}

//2 HOUR OF ROYAL SOCIAL
function reviewOrder2HourSocial() {
  //$('#datetimepicker').data("DateTimePicker").FUNCTION()
  aux1 = $('#datetimepicker12').data("DateTimePicker").viewDate();
  localStorage.setItem('DateAndTime', aux1._d);
  localStorage.setItem('ServiceType', '2HSocial');
  location.href = "/ReviewOrder";
}

//3 HOUR OF ROYAL SOCIAL
function reviewOrder3HourSocial() {
  //$('#datetimepicker').data("DateTimePicker").FUNCTION()
  aux1 = $('#datetimepicker12').data("DateTimePicker").viewDate();
  localStorage.setItem('DateAndTime', aux1._d);
  localStorage.setItem('ServiceType', '3HSocial');
  location.href = "/ReviewOrder";
}

//4 HOUR OF ROYAL SOCIAL
function reviewOrder4HourSocial() {
  //$('#datetimepicker').data("DateTimePicker").FUNCTION()
  aux1 = $('#datetimepicker12').data("DateTimePicker").viewDate();
  localStorage.setItem('DateAndTime', aux1._d);
  localStorage.setItem('ServiceType', '4HSocial');
  location.href = "/ReviewOrder";
}

//5 HOUR OF ROYAL SOCIAL
function reviewOrder5HourSocial() {
  //$('#datetimepicker').data("DateTimePicker").FUNCTION()
  aux1 = $('#datetimepicker12').data("DateTimePicker").viewDate();
  localStorage.setItem('DateAndTime', aux1._d);
  localStorage.setItem('ServiceType', '5HSocial');
  location.href = "/ReviewOrder";
}

//6 HOUR OF ROYAL SOCIAL
function reviewOrder6HourSocial() {
  //$('#datetimepicker').data("DateTimePicker").FUNCTION()
  aux1 = $('#datetimepicker12').data("DateTimePicker").viewDate();
  localStorage.setItem('DateAndTime', aux1._d);
  localStorage.setItem('ServiceType', '6HSocial');
  location.href = "/ReviewOrder";
}

//7 HOUR OF ROYAL SOCIAL
function reviewOrder7HourSocial() {
  //$('#datetimepicker').data("DateTimePicker").FUNCTION()
  aux1 = $('#datetimepicker12').data("DateTimePicker").viewDate();
  localStorage.setItem('DateAndTime', aux1._d);
  localStorage.setItem('ServiceType', '7HSocial');
  location.href = "/ReviewOrder";
}

//MORE HOURS OF ROYAL SOCIAL
function reviewOrderMoreHoursSocial() {
  //$('#datetimepicker').data("DateTimePicker").FUNCTION()
  aux1 = $('#datetimepicker12').data("DateTimePicker").viewDate();
  localStorage.setItem('DateAndTime', aux1._d);
  localStorage.setItem('ServiceType', 'MoreHSocial');
  location.href = "/ReviewOrder";
}

/********************* ROYAL BUSINESS OPTIONS **********************************/

//1 HOUR OF ROYAL BUSINESS
function reviewOrder1HourBusiness() {
  //$('#datetimepicker').data("DateTimePicker").FUNCTION()
  aux1 = $('#datetimepicker12').data("DateTimePicker").viewDate();
  localStorage.setItem('DateAndTime', aux1._d);
  localStorage.setItem('ServiceType', '1HBusiness');
  location.href = "/ReviewOrder";
}

//2 HOUR OF ROYAL BUSINESS
function reviewOrder2HourBusiness() {
  //$('#datetimepicker').data("DateTimePicker").FUNCTION()
  aux1 = $('#datetimepicker12').data("DateTimePicker").viewDate();
  localStorage.setItem('DateAndTime', aux1._d);
  localStorage.setItem('ServiceType', '2HBusiness');
  location.href = "/ReviewOrder";
}

//3 HOUR OF ROYAL BUSINESS
function reviewOrder3HourBusiness() {
  //$('#datetimepicker').data("DateTimePicker").FUNCTION()
  aux1 = $('#datetimepicker12').data("DateTimePicker").viewDate();
  localStorage.setItem('DateAndTime', aux1._d);
  localStorage.setItem('ServiceType', '3HBusiness');
  location.href = "/ReviewOrder";
}

//4 HOUR OF ROYAL BUSINESS
function reviewOrder4HourBusiness() {
  //$('#datetimepicker').data("DateTimePicker").FUNCTION()
  aux1 = $('#datetimepicker12').data("DateTimePicker").viewDate();
  localStorage.setItem('DateAndTime', aux1._d);
  localStorage.setItem('ServiceType', '4HBusiness');
  location.href = "/ReviewOrder";
}

//5 HOUR OF ROYAL BUSINESS
function reviewOrder5HourBusiness() {
  //$('#datetimepicker').data("DateTimePicker").FUNCTION()
  aux1 = $('#datetimepicker12').data("DateTimePicker").viewDate();
  localStorage.setItem('DateAndTime', aux1._d);
  localStorage.setItem('ServiceType', '5HBusiness');
  location.href = "/ReviewOrder";
}

//6 HOUR OF ROYAL BUSINESS
function reviewOrder6HourBusiness() {
  //$('#datetimepicker').data("DateTimePicker").FUNCTION()
  aux1 = $('#datetimepicker12').data("DateTimePicker").viewDate();
  localStorage.setItem('DateAndTime', aux1._d);
  localStorage.setItem('ServiceType', '6HBusiness');
  location.href = "/ReviewOrder";
}

//7 HOUR OF ROYAL BUSINESS
function reviewOrder7HourBusiness() {
  //$('#datetimepicker').data("DateTimePicker").FUNCTION()
  aux1 = $('#datetimepicker12').data("DateTimePicker").viewDate();
  localStorage.setItem('DateAndTime', aux1._d);
  localStorage.setItem('ServiceType', '7HBusiness');
  location.href = "/ReviewOrder";
}

//MORE HOURS OF ROYAL BUSINESS
function reviewOrderMoreHoursBusiness() {
  //$('#datetimepicker').data("DateTimePicker").FUNCTION()
  aux1 = $('#datetimepicker12').data("DateTimePicker").viewDate();
  localStorage.setItem('DateAndTime', aux1._d);
  localStorage.setItem('ServiceType', 'MoreHBusiness');
  location.href = "/ReviewOrder";
}

//);


//********** GET DATE AND TIME **********/









