//*******************************JAVASCRIPT PARA FORMULARIO***********************************************************
var GlobalKey;
$(document).ready(function(){
});

document.querySelector('#SendBtn').addEventListener('click', accion);

function accion() {

    var urlVideogamesPersist = "/send-mail";
    var newForm = fillForms();

    postearMail(urlVideogamesPersist,newForm);

    console.log(JSON.stringify(newForm));
    alert(newForm.FirsName+" ¡GRACIAS!");
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
function fillForms() {

        var FormInfo = {FirstName: $("#validationDefault01").val(),
            LastName: $("#validationDefault02").val(),
            Email: $("#validationDefaultUsername").val(),
            Link: $("#validationDefault03").val(),
            Equipment: $("#exampleFormControlTextarea1").val(),
            AgreeTerms: $("#invalidCheck2").val(),
        };

        return FormInfo;

}
