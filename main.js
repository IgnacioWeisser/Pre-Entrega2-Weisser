// Checklist

class Tarea {
    constructor(id, descripcion, completada) {
        this.id = id;
        this.descripcion = descripcion;
        this.completada = completada;
    }
}


let listaTareas = [];


function agregarTarea() {
    let descripcion = prompt("Ingrese la nueva tarea:");
    let nuevaTarea = new Tarea(listaTareas.length + 1, descripcion, false);
    listaTareas.push(nuevaTarea);
    alert("Tarea agregada: " + descripcion);
}


function verTareas() {
    if (listaTareas.length === 0) {
        alert("No hay tareas en la lista.");
    } else {
        let mensaje = "Lista de tareas:\n\n";
        listaTareas.forEach(function(tarea) {
            let estado = tarea.completada ? "completada" : "pendiente";
            mensaje += tarea.id + ". " + tarea.descripcion + " - Estado: " + estado + "\n";
        });
        alert(mensaje);
    }
}


function completarTarea() {
    if (listaTareas.length === 0) {
        alert("No hay tareas para marcar como completadas.");
    } else {
        let mensaje = "Seleccione la tarea que desea marcar como completada:\n\n";
        listaTareas.forEach(function(tarea) {
            mensaje += tarea.id + ". " + tarea.descripcion + "\n";
        });
        let indice = prompt(mensaje);
        indice = parseInt(indice);
        if (isNaN(indice) || indice < 1 || indice > listaTareas.length) {
            alert("Índice inválido.");
        } else {
            listaTareas[indice - 1].completada = true;
            alert("Tarea marcada como completada.");
        }
    }
}


function borrarTarea() {
    if (listaTareas.length === 0) {
        alert("No hay tareas para borrar.");
    } else {
        let mensaje = "Seleccione la tarea que desea borrar:\n\n";
        listaTareas.forEach(function(tarea) {
            let estado = tarea.completada ? "completada" : "pendiente";
            mensaje += tarea.id + ". " + tarea.descripcion + " - Estado: " + estado + "\n";
        });
        let indice = prompt(mensaje);
        indice = parseInt(indice);
        if (isNaN(indice) || indice < 1 || indice > listaTareas.length) {
            alert("Índice inválido.");
        } else {
            if (listaTareas[indice - 1].completada) {
                listaTareas.splice(indice - 1, 1);
                alert("Tarea borrada.");

                
                listaTareas.forEach(function(tarea, index) {
                    tarea.id = index + 1;
                });
            } else {
                alert("No se puede borrar una tarea que no está completada.");
            }
        }
    }
}


function gestionarTareas() {
    let opcion;
    do {
        opcion = prompt("Selecciona una opción:\n1. Agregar tarea\n2. Ver tareas\n3. Marcar tarea como completada\n4. Borrar tarea\n5. Salir");
        switch (opcion) {
            case "1":
                agregarTarea();
                break;
            case "2":
                verTareas();
                break;
            case "3":
                completarTarea();
                break;
            case "4":
                borrarTarea();
                break;
            case "5":
                alert("Saliendo...");
                break;
            default:
                alert("Opción inválida.");
        }
    } while (opcion !== "5");
}


gestionarTareas();


