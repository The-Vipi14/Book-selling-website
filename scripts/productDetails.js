// import Books from "./Books.js";

// const urlParams = new URLSearchParams(window.location.search);
// const Product_id = Number(urlParams.get("id"));


// const product = Books.find(book => book.id === Product_id);

// console.log(product);

// if (product) {
//     document.querySelector(".book-card").innerHTML = `
//              <img src="${product.image}" alt="">
//             `
//     document.querySelector("#product-ext-info").innerHTML = `
//                <p><strong>Category:</strong><span id="category-display">${product.category}</span></p>
//                 <p><strong>Language:</strong>${product.language}</p>
//                 <p><strong>Format:</strong>${product.format}</p>
//                 <p><strong>Pages:</strong> <span id="pages-display">${product.pages}</span></p>
//                 <p><strong>Publisher:</strong>${product.publisher}</p>
//                 <p><strong>ISBN:</strong>${product.isbn}</p>
//             ` 
// }
// else {
//     console.log("product not found")
// }




import Books from './Books.js'; // Adjust path if needed

// Get book ID from URL: productDetails.html?id=5
const urlParams = new URLSearchParams(window.location.search);
const bookId = Number(urlParams.get('id'));

// Find the book
const book = Books.find(b => b.id === bookId);

const mainContainer = document.getElementById('main-container');

if (!book) {
    mainContainer.innerHTML = `
        <div style="text-align:center; padding:100px; font-size:1.5rem; color:#666;">
            <h2>Book Not Found</h2>
            <p>Sorry, we couldn't find the book you're looking for.</p>
            <a href="../index.html" style="color:#FF7A5A; text-decoration:underline;">← Back to Home</a>
        </div>
    `;
} else {
    // Fully dynamic rendering
    mainContainer.innerHTML = `
        
        <div class="book-card">
            <img id="product-image" src="${book.image}" alt="${book.name}" onerror="this.src='https://via.placeholder.com/500x700.png?text=Book+Cover'">
        </div>

        
        <div class="details-section">
            <h1 id="product-title">${book.name}</h1>
            <p class="author">by <span id="product-author">${book.author}</span></p>

            <p class="price">₹ <span id="product-price">${book.price.toLocaleString('en-IN')}</span></p>

            <div class="rating">
                <span>★★★★☆</span> 4.6 (1,284 reviews)
            </div>

            <p class="desc" id="product-desc">
                ${book.description}
            </p>

            <div class="action-box">
                <div class="qty-selector">
                    <label for="qty">Quantity:</label>
                    <input type="number" id="qty" value="1" min="1">
                </div>
                <button id="addToCart">Add to Cart</button>
                <button id="buyNow">Buy Now</button>
            </div>

            <div class="extra-info" id="product-ext-info">
                <p><strong>Category:</strong> <span id="category-display">${book.category.charAt(0).toUpperCase() + book.category.slice(1)}</span></p>
                <p><strong>Language:</strong> ${book.language || 'English'}</p>
                <p><strong>Format:</strong> ${book.format || 'Paperback'}</p>
                <p><strong>Pages:</strong> <span id="pages-display">${book.pages || 'N/A'}</span></p>
                <p><strong>Publisher:</strong> ${book.publisher || 'Various'}</p>
                <p><strong>Published:</strong> ${book.publishedYear || 'N/A'}</p>
                <p><strong>ISBN:</strong> ${book.isbn || 'N/A'}</p>
            </div>
        </div>
    `;

    // Add to Cart Functionality
    document.getElementById('addToCart').addEventListener('click', () => {
        const qty = parseInt(document.getElementById('qty').value) || 1;

        let cart = JSON.parse(localStorage.getItem('bookCart') || '[]');

        const existing = cart.find(item => item.id === book.id);
        if (existing) {
            existing.quantity += qty;
        } else {
            cart.push({
                id: book.id,
                name: book.name,
                author: book.author,
                price: book.price,
                image: book.image,
                quantity: qty
            });
        } 

        localStorage.setItem('bookCart', JSON.stringify(cart));

        const btn = document.getElementById('addToCart');
        btn.textContent = 'Added!';
        btn.style.backgroundColor = '#4CAF50';
        setTimeout(() => {
            btn.textContent = 'Add to Cart';
            btn.style.backgroundColor = '#FF7A5A';
        }, 1500);
    });

    // Buy Now (Redirect to cart or checkout later)
    document.getElementById('buyNow').addEventListener('click', () => {
        // For now, just add to cart and alert
        document.getElementById('addToCart').click();
        alert('Redirecting to checkout...');
        // Later: window.location.href = 'checkout.html';
    });
}