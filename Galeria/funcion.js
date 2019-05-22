var fotoCompleta = ['imagenes/foto1', 'imagenes/foto2', 'imagenes/foto3', 'imagenes/foto4', 'imagenes/foto5', 'imagenes/foto6', 'imagenes/foto7', 'imagenes/foto8', 'imagenes/foto9', 'imagenes/foto10']
var unicos = new Array(5);
var final = new Array(5);
var cont = 0;

function Iniciar() {
    cont = 0;
    for (var i = 0; i < 5; i++) {
        unicos[i] = Math.round(Math.random() * (10 - 1) + 1);
        for (var j = 0; j < i; j++) {
            if (unicos[i] == unicos[j]) {
                i--;
            }
        }
        var fot = unicos[i];
        final[j] = fotoCompleta[fot - 1] + ".png";
    }

    var imagen = final[0];
    document.getElementById('imagen').src = imagen;
}

function Siguiente() {
    cont++;
    if (cont < 5) {
        var imagen2 = final[cont];
        document.getElementById('imagen').src = imagen2;
    } else {
        document.getElementById('siguiente').disable = true;
        cont--;
    }
}

function Anterior() {
    cont--;
    if (cont > -1) {
        var imagen2 = final[cont];
        document.getElementById('imagen').src = imagen2;
    } else {
        document.getElementById('anterior').disable = true;
        cont++;
    }
}
