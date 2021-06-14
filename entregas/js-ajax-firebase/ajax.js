function validaForm(){
    // Campos de texto
    if(isNaN($("#numero").val()) || $("#numero").val() == ''){  //Si es distinto a un numero entero o está vacío
        alert("El campo Numero debe ser un numero entero");
        $("#numero").trigger('focus'); // Esta función coloca el foco de escritura del usuario en el campo Numero directamente.
        return false;
    }
    if($("#nombre").val() == ""){
        alert("El campo Nombre no puede estar vacío.");
        $("#nombre").trigger('focus');       
        return false;
    }
    if($("#apellidos").val() == ""){
        alert("El campo Apellidos no puede estar vacío.");
        $("#apellidos").trigger('focus');
        return false;
    }
    if($("#direccion").val() == ""){
        alert("El campo Dirección no puede estar vacío.");
        $("#direccion").trigger('focus')
        return false;
    }

    return true; // Si todo está correcto
}

jQuery( () => {     // Esta parte del código se ejecutará automáticamente cuando la página esté lista.

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    const database = firebase.database()

    $("#botonenviar").on('click', (e) => {
        if( validaForm() ) {
            
            let form = $("#formdata");
            let url = `https://jsonplaceholder.typicode.com/comments?postId=${$('#numero').val()}`;

            $.ajax({
                type: "POST",
                url: url,
                data: form.serialize(),
                success: (data) => {
                    delete data.id
                    $("#respuesta").text(JSON.stringify(data))
                    // Guardamos en la base de datos de firebase
                    const referencia = database.ref(data.numero);
                    delete data.numero    // eliminamos los campos que no queremos guardar
                    referencia.set(data);
                }
            });
        }
    });
})

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCzwDAUSHYiwRsKbFQalOSW0n-TNG-El4I",
    authDomain: "ua-practica.firebaseapp.com",
    databaseURL: "https://ua-practica-default-rtdb.firebaseio.com",
    projectId: "ua-practica",
    storageBucket: "ua-practica.appspot.com",
    messagingSenderId: "165323602669",
    appId: "1:165323602669:web:f61b4ac44b0a37d0f96ae4"
};