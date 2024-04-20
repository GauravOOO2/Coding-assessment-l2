console.log('====================================');
console.log("Connected");
console.log('====================================');
var ClothingData = [];

async function fetchFunction() {
    try {
        const response = await fetch('https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json'); // Replace 'url_of_your_function' with the URL where your function is hosted
        if (!response.ok) {
            throw new Error('Failed to fetch function');
        }
        const json = await response.json();
        ClothingData = json; // This will execute the fetched function
        
    } catch (error) {
        console.error('Error fetching function:', error);
    }
}

// Call the function to fetch and execute the fetched function
fetchFunction();
console.log(ClothingData)
async function menData () {
    console.log("men");
}

function womenData(){
    console.log("women");
}

function kidsData(){
    console.log("women");
}