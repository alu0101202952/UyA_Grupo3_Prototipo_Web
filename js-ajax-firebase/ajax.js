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