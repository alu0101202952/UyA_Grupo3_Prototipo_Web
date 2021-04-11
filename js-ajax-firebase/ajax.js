function validaForm(){
    // Campos de texto
    if($("#numero").val() != int){  //Si es distinto a un numero entero
        alert("El campo Numero debe ser un numero entero");
        $("#numero").focus(); // Esta función coloca el foco de escritura del usuario en el campo Numero directamente.
        return false;
    }
    if($("#nombre").val() == ""){
        alert("El campo Nombre no puede estar vacío.");
        $("#nombre").focus();       
        return false;
    }
    if($("#apellidos").val() == ""){
        alert("El campo Apellidos no puede estar vacío.");
        $("#apellidos").focus();
        return false;
    }
    if($("#direccion").val() == ""){
        alert("El campo Dirección no puede estar vacío.");
        $("#direccion").focus();
        return false;
    }

    return true; // Si todo está correcto
}


$(document).ready(function () {
  $("form").submit(function (event) {
    var formData = {
      name: $("#name").val(),
      email: $("#email").val(),
      superheroAlias: $("#superheroAlias").val(),
    };
    $.ajax({
      type: "POST",
      url: "process.php",
      data: formData,
      dataType: "json",
      encode: true,
    }).done(function (data) {
      console.log(data);
    });
    event.preventDefault();
  });
});

/** EJEMPLO DE FORMULARIO 1
 * // this is the id of the form
$("#idForm").submit(function(e) {

    e.preventDefault(); // avoid to execute the actual submit of the form.

    var form = $(this);
    var url = form.attr('action');
    
    $.ajax({
           type: "POST",
           url: url,
           data: form.serialize(), // serializes the form's elements.
           success: function(data)
           {
               alert(data); // show response from the php script.
           }
         });

    
});
 */

/** EJEMPLO DE FORMULARIO 2:
 * https://www.digitalocean.com/community/tutorials/submitting-ajax-forms-with-jquery
 * 
 * $(document).ready(function () {
  $("form").submit(function (event) {
    var formData = {
      name: $("#name").val(),
      email: $("#email").val(),
      superheroAlias: $("#superheroAlias").val(),
    };

    $.ajax({
      type: "POST",
      url: "process.php",
      data: formData,
      dataType: "json",
      encode: true,
    }).done(function (data) {
      console.log(data);
    });

    event.preventDefault();
  });
});
 */

/**
 * 
 */


// Initialize the button with the icon option specified:
$( ".selector" ).button({
  icon: "ui-icon-gear"
});
