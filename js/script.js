    //Métodos de acceso directo a los nodos del DOM

    //Accedemos al nodo con el método getElementById. Utilizamos el id para acceder a h1

    var titu = document.getElementById("titulo"); 
    
    console.log(titu.innerHTML); //Muestra en la consola lo que contiene la variable titu, para esto usamos la propiedad innerHTML
 

    //Al acceder a un elemento del DOM también posible modificar las características de sus estilos (CSS)

    titu.style.color = "red";
    titu.style.background = "blue";

    //También es posible agregar o modificar texto que contiene en su interior un nodo con la propiedad innerHTML

    var subtitu = document.getElementById("subtitulo");
    
    console.log(subtitu.innerHTML);

    subtitu.innerHTML = " Este es un nuevo texto";

    //Accedemos al párrafo mediante el id para modificar su estilo

    var parrafo = document.getElementById("parrafo");

    console.log(parrafo.innerHTML); //Lanza a consola lo que contienen la valiable parrafo

    parrafo.style.color = "blue"; 

    //Accedemos al botón para reconocer el evento click y cambiar el estilo del párrafo

    var boton = document.getElementById("boton");

    //Una opción, utilizando una función anónima
    /*
    boton.onclick = function (){
        parrafo.style.color = "green"; //Cambia el color del párrafo cuando presiono el boton
    }
    */
   
    //Otra opción, definiendo una función

    function cambiarcolor(){
        parrafo3.style.color = "green"; //Cambia el color del párrafo cuando presiono el boton
    }

    boton.onclick = cambiarcolor; //Llamamos a la función cabiarcolor cuando hacemos click


    //También podemos acceder al nodo con el método getElementsByClassName. Utilizamos class para acceder a p

    var parrafo = document.getElementsByClassName("lectura");

    console.log(parrafo[2]); //Como son dos párrafos con la misma class, genera un array y selecciono el último[2]

    //Accedemos al nodo con el método querySelector

    //var parrafo = document.querySelector('p'); //Selecciona un párrafo

    var parrafo = document.querySelectorAll('p'); //Con querySelectorAll selecciona todos los párrafos y genera un array

    console.log(parrafo);

    //addEventListener está atento a cualquier acción que ocurra en el boton. Eventos click, mouseover, mouseout, etc...

    var newboton = document.getElementById("boton2");
    //boton.addEventListener('click', function(){
    newboton.addEventListener('mouseover', function(){
     
        console.log('He detectado en mouse');
    })

        newboton.addEventListener('mouseout', function(){
    
        console.log('Se alejó el mouse');
    })