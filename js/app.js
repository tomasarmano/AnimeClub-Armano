 let boton_modo = document.querySelector('button')
 let body = document.body
  
 let modo_usuario  = localStorage.getItem('modo')
 body.className = modo_usuario

 boton_modo.addEventListener('click',()=> {
      
   if (body.className == 'light-mode'){
      body.className = 'dark-mode'
   } else {
      body.className = 'light-mode'
   }
   localStorage.setItem('modo', body.className)
   console.log(localStorage)
})

 const series = [
    { id: '3299219123', name: "Naruto", category: "estreno" , gender: "Accion, Artes marciales, Aventura, Comedia, Fantasia", price: 150 },
    { id: '1220419646', name: "Dragon Ball", category: "estreno" , gender: "Accion, Comedia, Aventura, Fantasia" , price: 170 },
    { id: '5299218674', name: "Attack On Titan", category: "estreno" , gender: "Accion, Fantasia oscura, Drama post-apocaliptico" , price: 200 },
    { id: '6299899123', name: "Chainsaw Man", category: "preventa" , gender: "Accion, Fantasia oscura, Comedia de terror" , price: 80 },
    { id: '9299777123', name: "Boruto", category: "preventa" , gender: "Accion, Artes marciales, Aventura, Comedia ,Fantasia" , price: 140 },
    { id: '8299885563', name: "Baki", category: "estreno" , gender: "Accion, Artes marciales, Aventura, Deportes" , price: 100 },
    { id: '3211219113', name: "One Punch Man", category: "preventa" , gender: "Accion, Comedia, Superheroes" , price: 110 },
    { id: '2299219999', name: "Hunter x Hunter", category: "preventa" , gender: "Accion, Aventura, Fantasia oscura, Comedia dramatica, Psicologico, Tragedia" , price: 130 },
    { id: '6299292913', name: "One Piece", category: "estreno" , gender: "Accion, Artes marciales, Aventura, Superpoder, Fantasia, Comedia" , price: 300 },
    { id: '7299244443', name: "Black Clover", category: "preventa" , gender: "Accion, Fantasia" , price: 170 },
    { id: '3299999123', name: "Jujutsu Kaisen", category: "estreno" , gender: "Accion, Fantasia oscura, Sobrenatural" , price: 190 },
    { id: '1299219999', name: "Tokyo Revengers", category: "preventa" , gender: "Accion, Sobrenatural, Drama, Romance" , price: 200 },
    { id: '3299214423', name: "Solo Leveling", category: "estreno" , gender: "Accion, Aventura, Fantasia" , price: 140 },
    { id: '3299777123', name: "Demon Slayer", category: "estreno" , gender: "Accion, Aventura, Comedia, Drama, Fantasia oscura, Sobrenatural" , price: 250 },
    { id: '3599255523', name: "Mob Psycho 100", category: "estreno" , gender: "Accion, Comedia, Sobrenatural, Superpoderes" , price: 150 }, 
 ]

  document.onload = showSeries(series)

 function showSeries(series){
    const list = document.getElementById("list");
    list.innerHTML = "";
    for(let serie of series){
        let nodo = document.createElement("li");
        nodo.innerHTML = `${serie.name}`;
        list.appendChild(nodo);
    }
 }

 function filterName(){
    let input = document.getElementById("name").value;
    let arrayFilter = series.filter(serie => serie.name.toLowerCase().includes(input));
    showSeries(arrayFilter);
 }



