function validarCamposObligatorios() {
    var bandera = false;
    var banVal = false;
    var banCed = false;
    var banCor = false;
    var banFec = false;
    for (var i = 0; i < document.forms[0].elements.length - 2; i++) {
        var elemento = document.forms[0].elements[i]
        if (elemento.value == '' && (elemento.type == 'text' || elemento.type == 'password')) {

            if (elemento.id == 'cedula') {
                document.getElementById('mensajeCedula').innerHTML = '<br> La cedula esta vacia'
            }

            if (elemento.id == 'nombres') {
                document.getElementById('mensajeNombres').innerHTML = '<br> El nombre esta vacio'
            }

            if (elemento.id == 'apellidos') {
                document.getElementById('mensajeApellidos').innerHTML = '<br> El apellido esta vacio'
            }

            if (elemento.id == 'direccion') {
                document.getElementById('mensajeDireccion').innerHTML = '<br> La Direccion esta vacia'
            }

            if (elemento.id == 'telefono') {
                document.getElementById('mensajeTelefono').innerHTML = '<br> El telefono esta vacio'
            }

            if (elemento.id == 'fechaNacimiento') {
                document.getElementById('mensajeFechaNacimiento').innerHTML = '<br> La fecha de Nacmiento esta vacia'
            }

            if (elemento.id == 'correo') {
                document.getElementById('mensajeCorreo').innerHTML = '<br> El correo esta vacio'
            }

            if (elemento.id == 'contrasena') {
                document.getElementById('mensajeContrasena').innerHTML = '<br> La contrasena esta vacia'
            }

            elemento.style.border = '1px red solid'
            banVal = true;
        }
        if (elemento.id == 'cedula') {
            if (validarCedula(elemento) == true) {
                banCed = true;
            } else {
                elemento.style.border = '1px red solid';
            }
        }
        if (elemento.id == 'correo') {
            if (validarCorreo(elemento) == true) {
                banCor == true;
            } else {
                elemento.style.border = '1px red solid';
            }
        }
        if (elemento.id == 'fechaNacimiento') {
            if (validarFecha(elemento) == true) {
                banFec == true;
            } else {
                elemento.style.border = '1px red solid';
            }
        }
        if (banVal == false && banCed == true && banCor == true && banFec == true) {
            bandera = true
        }
    }
    return bandera
}

function validarCedula() {
    var cedula = document.getElementById('cedula').value.trim();
    var tamano = cedula.length
    var bandera = true;
    if (tamano < 10 || tamano > 10) {
        for (var i = 0; i < document.forms[0].elements.length; i++) {
            var elemento = document.forms[0].elements[i]
            if (elemento.id == 'cedula') {
                bandera = false;
                document.getElementById('mensajeCedula').innerHTML = "Complete la cedula con 10 digitos";
                elemento.style.border = '1px red solid'
            }
        }
    } else {
        var total = 0;
        var longcheck = tamano - 1;

        if (cedula !== '' && tamano === 10) {
            for (i = 0; i < longcheck; i++) {
                if (i % 2 === 0) {
                    var aux = cedula.charAt(i) * 2;
                    if (aux > 9) aux -= 9;
                    total += aux;
                } else {
                    total += parseInt(cedula.charAt(i));
                }
            }

            total = total % 10 ? 10 - total % 10 : 0;

            if (cedula.charAt(tamano - 1) == total) {
                
                document.getElementById('mensajeCedula').innerHTML = ("Cedula Válida");
            } else {
                for (var i = 0; i < document.forms[0].elements.length; i++) {
                    var elemento = document.forms[0].elements[i]
                    if (elemento.id == 'cedula') {
                        bandera = false;
                        document.getElementById('mensajeCedula').innerHTML = ("Cedula Inválida");
                        elemento.style.border = '1px red solid'
                    }
                }
            }
        }
    }
    return bandera;
}

function validarLetras(datos) {
    var na = document.getElementById(datos.id).value
    if (datos.id == 'nombres') {
        var n = na.substr(na.length - 1).charCodeAt(0)
        if ((n >= 65 && n <= 90) || (n >= 97 && n <= 122) || n == 32 || n == 225 || n == 233 || n == 237 || n == 243 || n == 250 || n == 193 || n == 201 || n == 205 || n == 211 || n == 218) {
            nom = na.split(" ").length
            if (nom > 2) {
                datos.style.border = "1px red solid"
                document.getElementById('mensajeNombres').innerHTML = '<br>Solo se permiten dos nombres'
            }
        } else {
            document.getElementById('nombres').value = na.substr(0, na.length - 1)
        }
    } else if (datos.id == 'apellidos') {
        var n = na.substr(na.length - 1).charCodeAt(0)
        if ((n >= 65 && n <= 90) || (n >= 97 && n <= 122) || n == 32 || n == 225 || n == 233 || n == 237 || n == 243 || n == 250 || n == 193 || n == 201 || n == 205 || n == 211 || n == 218) {
            ape = na.split(" ").length
            if (ape > 2) {
                datos.style.border = "1px red solid"
                document.getElementById('mensajeApellidos').innerHTML = '<br>Solo se permiten dos apellidos'
            }
        } else {
            document.getElementById('apellidos').value = na.substr(0, na.length - 1)
        }
    }
}

function validarNumeros(datos) {
    var nums = document.getElementById(datos.id).value
    if (datos.id == 'telefono') {
        if (nums.length > 10) {
            document.getElementById('mensajeTelefono').innerHTML = '<br>Número de teléfono incorrecto'
            elemento.style.border = '1px red solid'
        } else if (nums.length < 10) {
            document.getElementById('mensajeTelefono').innerHTML = ''
            var n = nums.substr(nums.length - 1).charCodeAt(0)
            if (n >= 48 && n <= 57) {
            } else {
                document.getElementById('telefono').value = nums.substr(0, nums.length - 1)
            }
        }
    }
}

function validarFecha(datos) {
    var fecha = document.getElementById(datos.id).value
    if (fecha.length == 10 && fecha !== '') {
        var dia = fecha.substr(0, 2)
        var mes = fecha.substr(3, 2)
        var año = fecha.substr(6, 4)
        var s1 = fecha.substr(2, 1)
        var s2 = fecha.substr(5, 1)
        var val1 = false
        var val2 = false
        var val3 = false
        var val4 = false
        var vals = false
        var band = true;
        añov = parseInt(año)
        diav = parseInt(dia)

        if (mes == '01' || mes == '03' || mes == '05' || mes == '07' || mes == '08' || mes == '10' || mes == '12') {
            diav = parseInt(dia)
            if (diav >= 1 && diav <= 31) {
                val1 = true;
            }
        } else if (mes == '02') {
            if (añov % 4 == 0) {
                if (diav >= 1 && diav <= 29) {
                    val2 = true;
                }
            } else {
                if (diav >= 1 && diav <= 28) {
                    val3 = true;
                }
            }
        } else if (mes == '04' || mes == '06' || mes == '09' || mes == '11') {
            if (diav >= 1 && diav <= 30) {
                val4 = true;
            }
        }
        var fechaActual = new Date();
        var diaActual = fechaActual.getDate()
        var mesActual = fechaActual.getMonth() + 1
        var añoActual = fechaActual.getFullYear()
        if (s1 == '/' && s2 == '/') {
            vals = true
        } else {
            band = false;
            document.getElementById('mensajeFechaNacimiento').innerHTML = '<br> El formato de fecha es incorrecto'
            elemento.style.border = '1px red solid'
        }
        if (parseInt(año) < añoActual) {
            if ((val1 == true || val2 == true || val3 == true || val4 == true) && vals == true) {
                document.getElementById('mensajeFechaNacimiento').innerHTML = ''
            }
        } else if (parseInt(año) == añoActual) {
            if ((val1 == true || val2 == true || val3 == true || val4 == true) && vals == true && parseInt(mes) <= mesActual && parseInt(dia) <= diaActual) {
                document.getElementById('mensajeFechaNacimiento').innerHTML = ''
            } else {
                if (vals == false) {
                    band = false;
                    document.getElementById('mensajeFechaNacimiento').innerHTML = '<br>El formato de fecha es incorrecto'
                    elemento.style.border = '1px red solid'
                } else {
                    band = false;
                    document.getElementById('mensajeFechaNacimiento').innerHTML = '<br>La fecha es incorrecta'
                    elemento.style.border = '1px red solid'
                }
            }
        }
        if (val1 == false && val2 == false && val3 == false && val4 == false) {
            band = false;
            document.getElementById('mensajeFechaNacimiento').innerHTML = '<br>La fecha es incorrecta'
            elemento.style.border = '1px red solid'
        }
    } else {
        band = false;
        document.getElementById('mensajeFechaNacimiento').innerHTML = '<br>La fecha es incorrecta o está vacía'
        elemento.style.border = '1px red solid'
    }
    return band;
}

function validarCorreo() {
    var bandera = true;
    var correo = document.getElementById("correo").value;
    var long = correo.length
    var val = correo.substring(correo.length - 15)
    var val2 = correo.substring(correo.length - 11)
    if (val != "@est.ups.edu.ec" && val2 != "@est.ups.ec") {
        for (var i = 0; i < document.forms[0].elements.length; i++) {
            var elemento = document.forms[0].elements[i]
            if (elemento.id == 'correo') {
                bandera = false;
                document.getElementById('mensajeCorreo').innerHTML = ("Correo Incorrecto");
                elemento.style.border = '1px red solid'
            }
        }
    } else if (long > 70) {
        for (var i = 0; i < document.forms[0].elements.length; i++) {
            var elemento = document.forms[0].elements[i]
            if (elemento.id == 'correo') {
                bandera = false;
                document.getElementById('mensajeCorreo').innerHTML = ("No puede tener mas de 70 caracteres");
                elemento.style.border = '1px red solid'
            }
        }
    }
    return bandera;
}