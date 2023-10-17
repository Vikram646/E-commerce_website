document.addEventListener('DOMContentLoaded', function() {
    let products = document.querySelector('.products');
    async function fetchProducts(url) {
        try {
            let data = await fetch(url);
            let response = await data.json();
            for (let i = 0; i < response.length; i++) {
                let description = response[i].description;
                let title = response[i].title;
                products.innerHTML += `
            <div class="product">
        <a href="navbar.html" data-productId="${response[i].id}"><img src="${response[i].image}" alt="image not found" class="product-img"></a>
           <div class="product-content">
           <h2 class="product-title">${title}</h2>
           <h4 class="product-category">${response[i].category}</h4>
           <p class="product-description">${description.length > 80 ? description.substring(0, 80).concat(' ...more'): description}</p>
           <div class="product-price-container">
               <h3 class="product-price">$${response[i].price}</h3>
               <a href="product.html?value=${response[i].id}" class="add-to-cart">view more</a>
               <a href="#!" data-productId="${response[i].id}" class="add-to-cart"><ion-icon name="cart-outline"></ion-icon></a>
           </div>
           </div>
            </div>
       `;
       
            }
        } catch (err) {
            console.log(err);
        }
    }
    fetchProducts('https://fakestoreapi.com/products');
});