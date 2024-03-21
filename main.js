// Checklist

class Tarea {
    constructor(id, descripcion, completada) {
        this.id = id;
        this.descripcion = descripcion;
        this.completada = completada;
        
    }
}

let listaTareas = [];
let historialTareasCompletadas = [];

function agregarTarea() {
    let descripcion = prompt("Ingrese la nueva tarea:");
    if (descripcion !== null && descripcion.trim() !== "") {
        let nuevaTarea = new Tarea(listaTareas.length + 1, descripcion, false);
        listaTareas.push(nuevaTarea);
        alert("Tarea agregada: " + descripcion);
    } else {
        alert("La descripción de la tarea no puede estar vacía.");
    }
}

function verTareas() {
    if (listaTareas.length === 0) {
        alert("No hay tareas en la lista.");
    } else {
        let mensaje = "Lista de tareas disponibles:\n\n";
        listaTareas.forEach(function(tarea) {
            let estado = tarea.completada ? "completada" : "pendiente";
            mensaje += tarea.id + ". " + tarea.descripcion + " - Estado: " + estado + "\n";
        });
        alert(mensaje);
    }
}

function completarTarea() {
    let tareasDisponibles = listaTareas.filter(tarea => !tarea.completada); 
    if (tareasDisponibles.length === 0) {
        alert("No hay tareas disponibles para marcar como completadas.");
    } else {
        let mensaje = "Seleccione la tarea que desea marcar como completada:\n\n";
        tareasDisponibles.forEach(function(tarea, index) {
            mensaje += (index + 1) + ". " + tarea.descripcion + "\n";
        });
        let indice = prompt(mensaje);
        indice = parseInt(indice);
        if (isNaN(indice) || indice < 1 || indice > tareasDisponibles.length) {
            alert("Índice inválido.");
        } else {
            let tareaCompletada = listaTareas.find(tarea => tarea.id === tareasDisponibles[indice - 1].id);
            tareaCompletada.completada = true;
            tareaCompletada.fechaCompletada = new Date();
            historialTareasCompletadas.push(tareaCompletada);
            alert("Tarea marcada como completada.");
        }
    }
}

function borrarTarea() {
    if (listaTareas.length === 0) {
        alert("No hay tareas para borrar.");
    } else {
        let mensaje = "Seleccione la tarea que desea borrar:\n\n";
        listaTareas.forEach(function(tarea, index) {
            let estado = tarea.completada ? "completada" : "pendiente";
            mensaje += (index + 1) + ". " + tarea.descripcion + " - Estado: " + estado + "\n";
        });
        let indice = prompt(mensaje);
        indice = parseInt(indice);
        if (isNaN(indice) || indice < 1 || indice > listaTareas.length) {
            alert("Índice inválido.");
        } else {
            let tareaBorrada = listaTareas.find(tarea => tarea.id === indice);
            listaTareas = listaTareas.filter(tarea => tarea.id !== tareaBorrada.id);
            alert("Tarea borrada.");

            listaTareas.forEach(function(tarea, index) {
                tarea.id = index + 1;
            });
        }
    }
}

function mostrarTareasCompletadas() {
    if (historialTareasCompletadas.length === 0) {
        alert("No hay tareas completadas en el historial.");
    } else {
        let mensaje = "Historial de tareas completadas:\n\n";
        historialTareasCompletadas.forEach(function(tarea, index) {
            mensaje += (index + 1) + ". " + tarea.descripcion + "\n";
        });
        alert(mensaje);
    }
}

function gestionarTareas() {
    let opcion;
    do {
        opcion = prompt("Selecciona una opción:\n1. Agregar tarea\n2. Ver tareas\n3. Marcar tarea como completada\n4. Borrar tarea\n5. Mostrar tareas completadas\n6. Salir");
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
                mostrarTareasCompletadas();
                break;
            case "6":
                alert("Saliendo...");
                break;
            default:
                alert("Opción inválida.");
        }
    } while (opcion !== "6");
}

gestionarTareas();