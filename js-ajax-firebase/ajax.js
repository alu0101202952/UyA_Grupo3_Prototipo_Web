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

/** EJEMPLO DE FORMULARIO
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


// Initialize the button with the icon option specified:
$( ".selector" ).button({
  icon: "ui-icon-gear"
});