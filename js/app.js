 let boton_modo = document.querySelector('.tema')
 let body = document.body 
 let modo_usuario  = localStorage.getItem('modo')
 body.className = modo_usuario

 boton_modo.addEventListener('click',()=>{
    if (body.className == 'light-mode'){
      body.className = 'dark-mode'
   } else {
      body.className = 'light-mode'
   }
   localStorage.setItem('modo', body.className)
})

const img1 = document.getElementById("img1");


 const series = [
    { id:1, name: "NARUTO Vol. 4", price: 150, img: "./assets/img/NARUTO Vol.4.jpeg" },
    { id:2, name: "DRAGON BALL vol. 8", price: 170, img: "./assets/img/DRAGON BALL Vol. 8.jpg" },
    { id:3, name: "ATTACK ON TITAN vol. 1", price: 200, img: "./assets/img/ATTACK ON TITAN vol. 1.jpg"},
    { id:4, name: "CHAINSAW MAN vol. 1",  price: 80, img: "./assets/img/CHAINSAW MAN vol. 1.webp"},
    { id:5, name: "BORUTO vol. 1", price: 140, img: "./assets/img/BORUTO vol. 1.webp"},
   ]
 const series2 = [   
    { id:6, name: "BAKI vol. 1", price: 100, img: "./assets/img/BAKI vol. 1.jpg"},
    { id:7, name: "ONE PUNCH MAN vol. 1", price: 110, img: "./assets/img/ONE PUNCH MAN vol. 1.webp"},
    { id:8, name: "HUNTER X HUNTER vol. 13", price: 130, img: "./assets/img/HUNTER X HUNTER vol. 13.webp"},
    { id:9, name: "ONE PIECE vol. 1", price: 300, img: "./assets/img/ONE PIECE vol. 1.jpg"},
    { id:10, name: "BLACK CLOVER vol. 1", price: 170, img: "./assets/img/BLACK CLOVER vol. 1.jpg"},]
 const series3 = [   
    { id:11, name: "JUJUTSU KAISEN vol. 1", price: 190, img: "./assets/img/JUJUTSU KAISEN vol. 1.webp"},
    { id:12, name: "TOKYO REVENGERS vol. 1", price: 200, img: "./assets/img/TOKYO REVENGERS vol. 1.webp"},
    { id:13, name: "SOLO LEVELING vol. 1", price: 140, img: "./assets/img/SOLO LEVELING vol. 1.jpg"},
    { id:14, name: "DEMON SLAYER vol. 1", price: 250, img: "./assets/img/DEMON SLAYER vol. 1.jpg"},
    { id:15, name: "MOB PSYCHO 100 vol. 1", price: 150, img: "./assets/img/MOB PSYCHO 100 vol. 1.jpg"}, 
 ]

 let series_JSON = JSON.stringify(series)

 localStorage.setItem('series', series_JSON)
 
 const seriesCatalogoHTML = (serie) => {
   return `
   <div class="item">
      <img src="${serie.img}">
      <h3>${serie.name}</h3>
      <p class="price">${serie.price}</p>
      <button id= "btn-add-cart-${serie.id}" class="btn-add-cart">Añadir al carrito</button>
   </div>
   `
 }
 
 const mostrarCatalogo1 = () => {
   const catalogoNodo = document.getElementById("catalogo1");
   let catalogoHTML = "";
   
   for(const serie of series){
      catalogoHTML += seriesCatalogoHTML(serie);
   }

   catalogoNodo.innerHTML = catalogoHTML;
 };

 const mostrarCatalogo2 = () => {
   const catalogoNodo = document.getElementById("catalogo2");
   let catalogoHTML = "";
   
   for(const serie of series2){
      catalogoHTML += seriesCatalogoHTML(serie);
   }

   catalogoNodo.innerHTML = catalogoHTML;
 };
 const mostrarCatalogo3 = () => {
   const catalogoNodo = document.getElementById("catalogo3");
   let catalogoHTML = "";
   
   for(const serie of series3){
      catalogoHTML += seriesCatalogoHTML(serie);
   }

   catalogoNodo.innerHTML = catalogoHTML;
 };


 mostrarCatalogo1();
 mostrarCatalogo2();
 mostrarCatalogo3();


 console.log(seriesCatalogoHTML(series[0]));






 const btnCart = document.querySelector('.container-cart-icon');
 const containerCartProducts = document.querySelector('.container-cart-products');
 btnCart.addEventListener('click', () => {
    containerCartProducts.classList.toggle('hidden-cart');
 });

 const cartInfo = document.querySelector('.cart-product');
 const rowProduct = document.querySelector('.row-product');
 
 const productsList = document.querySelector('.container-items');
 
 let allProducts = [];
 
 const valorTotal = document.querySelector('.total-pagar');
 const pay = document.querySelector('.pagar')
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
    Swal.fire({
      title: "Enhorabuena!",
      text: "El producto se agrego a tu carrito",
      icon: "success"
    });
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
       pay.classList.add('hidden');
    } else {
       cartEmpty.classList.add('hidden');
       rowProduct.classList.remove('hidden');
       cartTotal.classList.remove('hidden');
       pay.classList.remove('hidden');
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
 
    sincronizarStorage();
    
   };

   function sincronizarStorage(){
      localStorage.setItem('carrito', JSON.stringify(allProducts));
   }

 fetch('data.json')
   .then(response => response.json())
   .then(data => console.log(data))
   .catch(error => console.log(error))
