//Checklist







class Tarea {
    constructor(id, descripcion, completada) {
        this.id = id;
        this.descripcion = descripcion;
        this.completada = completada;
    }
}

const gestionTareas = {
    listaTareas: [],
    
    // Método para agregar una tarea a la lista
    agregarTarea: function() {
        let descripcion = prompt("Ingrese la nueva tarea:");
        let nuevaTarea = new Tarea(this.listaTareas.length + 1, descripcion, false);
        this.listaTareas.push(nuevaTarea);
        alert("Tarea agregada: " + descripcion);
    },

    // Método para ver la lista de tareas
    verTareas: function() {
        if (this.listaTareas.length === 0) {
            alert("No hay tareas en la lista.");
        } else {
            let mensaje = "Lista de tareas:\n\n";
            this.listaTareas.forEach(function(tarea) {
                let estado = tarea.completada ? "completada" : "pendiente";
                mensaje += tarea.id + ". " + tarea.descripcion + " - Estado: " + estado + "\n";
            });
            alert(mensaje);
        }
    },

    // Método para marcar una tarea como completada
    completarTarea: function() {
        if (this.listaTareas.length === 0) {
            alert("No hay tareas para marcar como completadas.");
        } else {
            let mensaje = "Seleccione la tarea que desea marcar como completada:\n\n";
            this.listaTareas.forEach(function(tarea) {
                mensaje += tarea.id + ". " + tarea.descripcion + "\n";
            });
            let indice = prompt(mensaje);
            indice = parseInt(indice);
            if (isNaN(indice) || indice < 1 || indice > this.listaTareas.length) {
                alert("Índice inválido.");
            } else {
                this.listaTareas[indice - 1].completada = true;
                alert("Tarea marcada como completada.");
            }
        }
    },

    // Método para borrar una tarea de la lista
    borrarTarea: function() {
        if (this.listaTareas.length === 0) {
            alert("No hay tareas para borrar.");
        } else {
            let mensaje = "Seleccione la tarea que desea borrar:\n\n";
            this.listaTareas.forEach(function(tarea) {
                let estado = tarea.completada ? "completada" : "pendiente";
                mensaje += tarea.id + ". " + tarea.descripcion + " - Estado: " + estado + "\n";
            });
            let indice = prompt(mensaje);
            indice = parseInt(indice);
            if (isNaN(indice) || indice < 1 || indice > this.listaTareas.length) {
                alert("Índice inválido.");
            } else {
                if (this.listaTareas[indice - 1].completada) {
                    this.listaTareas.splice(indice - 1, 1);
                    alert("Tarea borrada.");
                } else {
                    alert("No se puede borrar una tarea que no está completada.");
                }
            }
        }
    },

    // Método principal para el manejo de la lista de tareas
    iniciar: function() {
        let opcion;
        do {
            opcion = prompt("Selecciona una opción:\n1. Agregar tarea\n2. Ver tareas\n3. Marcar tarea como completada\n4. Borrar tarea\n5. Salir");
            switch (opcion) {
                case "1":
                    this.agregarTarea();
                    break;
                case "2":
                    this.verTareas();
                    break;
                case "3":
                    this.completarTarea();
                    break;
                case "4":
                    this.borrarTarea();
                    break;
                case "5":
                    alert("Saliendo...");
                    break;
                default:
                    alert("Opción inválida.");
            }
        } while (opcion !== "5");
    }
};

// Iniciamos la gestión de tareas
gestionTareas.iniciar();