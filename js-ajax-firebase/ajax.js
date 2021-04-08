$.ajax({
url: ‘ruta’,
type: ‘POST’,
async: true,
data: ‘parametro1=valor1&parametro2=valor2’.
success: procesaRespuesta,
error: muestraError})

$( "#myForm" ).serialize();

// Forma del formulario

[
    {
        name: "campo1",
        value: "valor1"
    },
    {
        name: "campo2",
        value: "valor2"
    }
]

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

/** EJEMPLO DE FORMULARIO 2
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


// Initialize the button with the icon option specified:
$( ".selector" ).button({
  icon: "ui-icon-gear"
});