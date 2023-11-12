var index;
var ListaSemestres;

function obtenerParametrosDeURL() {
    // Obtiene la cadena de consulta (query string) de la URL actual
    var queryString = window.location.search;

    // Crea un objeto para almacenar los parámetros
    var parametros = {};

    // Divide la cadena de consulta en pares clave-valor
    var pares = queryString.substring(1).split('&');

    // Itera a través de los pares y los almacena en el objeto de parámetros
    for (var i = 0; i < pares.length; i++) {
        var par = pares[i].split('=');
        var clave = decodeURIComponent(par[0]);
        var valor = decodeURIComponent(par[1]);
        parametros[clave] = valor;
    }

    index = parametros.index;
    ListaSemestres = JSON.parse(localStorage.getItem('ListaSemestres'));
}

document.addEventListener('DOMContentLoaded', function() {
    var contenedorHTML = document.getElementById("encabezado");
    var div = document.createElement("div");
    div.innerHTML = `
        <div class="container vertical-center">
            <div class="text-center">
                <h1>${ListaSemestres[index].nombre}</h1>
                <button type="button" class="btn btn-primary my-3" data-bs-toggle="modal" data-bs-target="#exampleModal">Detalles del Semestre</button>
                <button type="button" class="btn btn-primary" onclick="modalAddCard()" data-bs-toggle="modal" data-bs-target="#AddUpdCard">Añadir Asignatura</button>
            </div>
        </div>
    `;
    contenedorHTML.appendChild(div);


    var descripcionLabel = document.getElementById("descripcionLabel");
    descripcionLabel.textContent = ListaSemestres[index].descripcion;
    var descripcionLabel = document.getElementById("anno");
    descripcionLabel.textContent = ListaSemestres[index].anno;
    var descripcionLabel = document.getElementById("inicio");
    descripcionLabel.textContent = ListaSemestres[index].inicio;
    var descripcionLabel = document.getElementById("final");
    descripcionLabel.textContent = ListaSemestres[index].final; 
    
    /*if(ListaSemestres[index].asignaturas.length != 0){
        ListaSemestres[index].asignaturas.forEach(function (asignatura, index) {
            inicializarCards(asignatura.nombre,asignatura.descripcion,asignatura.pannel);
        });
    }*/
});

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}