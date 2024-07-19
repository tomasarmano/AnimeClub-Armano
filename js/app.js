//  let cantidadAnimesVistos = parseInt(prompt('Ingresa la cantidad de animes que hayas visto ;)'));
 
//  if(isNaN(cantidadAnimesVistos)) {
//      alert('Ingresa un numero valido por favor.')
//  } else {
//      for (let i = 1; i <= cantidadAnimesVistos; i++){
//          let anime = prompt('Ingresa el nombre del anime');
//          console.log(`${i}: ${anime}`);
//      }   
//  }

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
    { id: '1299219999', name: "Tokio Revengers", category: "preventa" , gender: "Accion, Sobrenatural, Drama, Romance" , price: 200 },
    { id: '3299214423', name: "Solo Leveling", category: "estreno" , gender: "Accion, Aventura, Fantasia" , price: 140 },
    { id: '3299777123', name: "Demon Slayer", category: "estreno" , gender: "Accion, Aventura, Comedia, Drama, Fantasia oscura, Sobrenatural" , price: 250 },
    { id: '3599255523', name: "Mob Psycho 100", category: "estreno" , gender: "Accion, Comedia, Sobrenatural, Superpoderes" , price: 150 }, 
 ]

 let naruto = document.querySelector('.naruto')
 naruto.addEventListener('click',()=> {
   console.log(series[0])
 })

 let dragonball = document.querySelector('.dragonball')
 dragonball.addEventListener('click',()=> {
   console.log(series[1])
 })

 let attackontitan = document.querySelector('.attackontitan')
 attackontitan.addEventListener('click',()=> {
   console.log(series[2])
 })

 let chainsawman = document.querySelector('.chainsawman')
 chainsawman.addEventListener('click',()=> {
   console.log(series[3])
 })

 let boruto = document.querySelector('.boruto')
 boruto.addEventListener('click',()=> {
   console.log(series[4])
 })

 let baki = document.querySelector('.baki')
 baki.addEventListener('click',()=> {
   console.log(series[5])
 })

 let onepunchman = document.querySelector('.onepunchman')
 onepunchman.addEventListener('click',()=> {
   console.log(series[6])
 })

 let hunterxhunter = document.querySelector('.hunterxhunter')
 hunterxhunter.addEventListener('click',()=> {
   console.log(series[7])
 })

 let onepiece = document.querySelector('.onepiece')
 onepiece.addEventListener('click',()=> {
   console.log(series[8])
 })

 let blackclover = document.querySelector('.blackclover')
 blackclover.addEventListener('click',()=> {
   console.log(series[9])
 })

 let jujutsukaisen = document.querySelector('.jujutsukaisen')
 jujutsukaisen.addEventListener('click',()=> {
   console.log(series[10])
 })

 let tokiorevengers = document.querySelector('.tokiorevengers')
 tokiorevengers.addEventListener('click',()=> {
   console.log(series[11])
 })

 let sololeveling = document.querySelector('.chainsawman')
 chainsawman.addEventListener('click',()=> {
   console.log(series[12])
 })

 let demonslayer = document.querySelector('.demonslayer')
 demonslayer.addEventListener('click',()=> {
   console.log(series[13])
 })

 let mobpsycho100 = document.querySelector('.mobpsycho100')
 mobpsycho100.addEventListener('click',()=> {
   console.log(series[14])
 })

 function mostrarSeries(serie)