document.addEventListener('DOMContentLoaded', function() {
    let single_product = document.querySelector('.single_product');
    const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('value'); 
  var link = 'https://fakestoreapi.com/products/'+id;
  fetchProducts(link);
  async function fetchProducts(url) {
      try {
          let data = await fetch(url);
          let response = await data.json();
              let description = response.description;
              let title = response.title;
              single_product.innerHTML += ` 
              <div class="product">
           <center><img src="${response.image}" alt="${response.category}" height="200" width="200" class="product-img"></center>
           <div class="product-content">
           <p class="product-title">${title}</p>
           <h4 class="product-category">${response.category}</h4>
           <p class="product-description">${description}</p>
           <div class="product-description">
           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et nihil fuga quam modi voluptates id neque voluptatem ipsum ducimus eum inventore quis libero explicabo ea beatae voluptatibus, laborum vel omnis! Minus, repellat.
</div>
           <div class="product-price-container">
               <h3 class="product-price">Price: $${response.price}</h3>
           </div>
           </div>
          
       </div>
   
     `;
     
          
      } catch (err) {
          console.log(err);
      }
  }
});
