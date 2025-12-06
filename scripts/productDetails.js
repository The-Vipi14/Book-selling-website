import Books from "./Books.js";

const urlParams = new URLSearchParams(window.location.search);
const Product_id = Number(urlParams.get("id"));


const product = Books.find(book => book.id === Product_id);

console.log(product);

if (product) {
    document.querySelector(".book-card").innerHTML = `
             <img src="${product.image}" alt="">
            `
} 
else {
    console.log("product not found")
}