

const productsContainer = document.querySelector('.products-container');
const tabButtons = document.querySelectorAll('.tab-button');


async function fetchData(url){
    const response = await fetch(url)
    const data = await response.json();
    return data;
}

tabButtons.forEach((button)=>{
    button.addEventListener('click',()=>{
        console.log(button.dataset.category);
        const category = button.dataset.category;
        fetchData("https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json")
        .then((data)=> displayProducts(data, category))

    })
})

function displayProducts(data, category){
    productsContainer.innerHTML = " ";
    const products = data.categories;
    const filteredProducts = products.filter((product)=> product.category_name.toLowerCase() === category.toLowerCase())
    console.log(filteredProducts);
    filteredProducts.forEach(product => {
        product.category_products.map((product)=>{
            if (product.title && product.vendor && product.price && product.compare_at_price && product.badge_text){
                const productElement = document.createElement('div');
                productElement.classList.add('product');
                productElement.innerHTML = `
                <div class="cardContainer">
                    <img class="cardImage" src="${product.image}" alt="${product.title}">
                    <div class="cardHeading">
                        <div class="ptitle">${product.title}</div>
                        <div class="cardSubHeading"><li>${product.vendor}</li></div>
                    </div>
                    <div class="priceContainer">
                        <p>Rs ${product.price}</p>
                        <p>${product.compare_at_price}</p>
                        <p>${((product.compare_at_price - product.price) / product.compare_at_price * 100).toFixed(2)} % off</p>
                    </div>
                    <div class="buttonContainer">
                        <p>Add to Cart</p>
                    </div>
                </div>
                `;
    
                productsContainer.appendChild(productElement);
            }
        })
    })

}