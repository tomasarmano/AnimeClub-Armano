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

 let series_JSON = JSON.stringify(series)

 localStorage.setItem('series', series_JSON)

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
 
 const btnCart = document.querySelector('.container-cart-icon');
 const containerCartProducts = document.querySelector(
    '.container-cart-products'
 );
 
 btnCart.addEventListener('click', () => {
    containerCartProducts.classList.toggle('hidden-cart');
 });
 
 const cartInfo = document.querySelector('.cart-product');
 const rowProduct = document.querySelector('.row-product');
 
 const productsList = document.querySelector('.container-items');
 
 let allProducts = [];
 
 const valorTotal = document.querySelector('.total-pagar');
 
 const countProducts = document.querySelector('#contador-productos');
 
 const cartEmpty = document.querySelector('.cart-empty');
 const cartTotal = document.querySelector('.cart-total');
 
 productsList.addEventListener('click', e => {
    if (e.target.classList.contains('btn-add-cart')) {
       const product = e.target.parentElement;
 
       const infoProduct = {
          quantity: 1,
          title: product.querySelector('h3').textContent,
          price: product.querySelector('p').textContent,
       };
 
       const exits = allProducts.some(
          product => product.title === infoProduct.title
       );
 
       if (exits) {
          const products = allProducts.map(product => {
             if (product.title === infoProduct.title) {
                product.quantity++;
                return product;
             } else {
                return product;
             }
          });
          allProducts = [...products];
       } else {
          allProducts = [...allProducts, infoProduct];
       }
 
       showHTML();
    }
 });
 
 rowProduct.addEventListener('click', e => {
    if (e.target.classList.contains('icon-close')) {
       const product = e.target.parentElement;
       const title = product.querySelector('p').textContent;
 
       allProducts = allProducts.filter(
          product => product.title !== title
       );
 
       console.log(allProducts);
 
       showHTML();
    }
 });
 
 const showHTML = () => {
    if (!allProducts.length) {
       cartEmpty.classList.remove('hidden');
       rowProduct.classList.add('hidden');
       cartTotal.classList.add('hidden');
    } else {
       cartEmpty.classList.add('hidden');
       rowProduct.classList.remove('hidden');
       cartTotal.classList.remove('hidden');
    }
 
    rowProduct.innerHTML = '';
 
    let total = 0;
    let totalOfProducts = 0;
 
    allProducts.forEach(product => {
       const containerProduct = document.createElement('div');
       containerProduct.classList.add('cart-product');
 
       containerProduct.innerHTML = `
             <div class="info-cart-product">
                 <span class="cantidad-producto-carrito">${product.quantity}</span>
                 <p class="titulo-producto-carrito">${product.title}</p>
                 <span class="precio-producto-carrito">${product.price}</span>
             </div>
             <svg
                 xmlns="http://www.w3.org/2000/svg"
                 fill="none"
                 viewBox="0 0 24 24"
                 stroke-width="1.5"
                 stroke="currentColor"
                 class="icon-close"
             >
                 <path
                     stroke-linecap="round"
                     stroke-linejoin="round"
                     d="M6 18L18 6M6 6l12 12"
                 />
             </svg>
         `;
 
       rowProduct.append(containerProduct);
 
       total =
          total + parseInt(product.quantity * product.price.slice(1));
       totalOfProducts = totalOfProducts + product.quantity;
    });
 
    valorTotal.innerText = `$${total}`;
    countProducts.innerText = totalOfProducts;
 };