(function(){
	// Variables
	var lista = document.getElementById("lista"),
		tareaInput = document.getElementById("tareaInput"),
		btnNuevaTarea = document.getElementById("btn-agregar");

	// Funciones
	var agregarTarea = function(){
		var tarea = tareaInput.value,
			nuevaTarea = document.createElement("li"),
			enlace = document.createElement("a"),
			contenido = document.createTextNode(tarea);

		if (tarea === "") {
			tareaInput.setAttribute("alert", "Agrega un nombre valido");
			tareaInput.className = "error";
			swal( "¡ Invalido ! " , "¡ introduce un nombre! " , "error" )   ;
			return false;
		}

		// Agregamos el contenido al enlace
		enlace.appendChild(contenido);
		// Le establecemos un atributo href
		enlace.setAttribute("href", "#");
		// Agrergamos el enlace (a) a la nueva tarea (li)
		nuevaTarea.appendChild(enlace);
		// Agregamos la nueva materia a la lista
		lista.appendChild(nuevaTarea);

		tareaInput.value = "";
		swal("Exito!", "nombre agregado!", "success");
		for (var i = 0; i <= lista.children.length -1; i++) {
			lista.children[i].addEventListener("click", function(){
				this.parentNode.removeChild(this);
			});
		}

	};
	var comprobarInput = function(){
		tareaInput.className = "";
		teareaInput.setAttribute("placeholder", "Agrega tu nombre");
	};

	var eleminarTarea = function(){
		this.parentNode.removeChild(this);
		swal( "¡ Eliminacion ! " , "¡ se elimino el nombre! " , "error" )   ;
		
	};

	// Eventos

	// Agregar materia
	btnNuevaTarea.addEventListener("click", agregarTarea);

	// Comprobar Input
	tareaInput.addEventListener("click", comprobarInput);

	// Borrando Elementos de la lista
	for (var i = 0; i <= lista.children.length -1; i++) {
		
		lista.children[i].addEventListener("click", eleminarTarea);
		
		
	}
}());