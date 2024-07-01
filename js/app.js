 let cantidadAnimesVistos = parseInt(prompt('Ingresa la cantidad de animes que hayas visto ;)'));
 
 if(isNaN(cantidadAnimesVistos)) {
     alert('Ingresa un numero valido por favor.')
 } else {
     for (let i = 1; i <= cantidadAnimesVistos; i++){
         let anime = prompt('Ingresa el nombre del anime');
         console.log(`${i}: ${anime}`);
     }   
 }
