// <============================== Books data and books card creation =================> //

import Books from "./Books.js";

const popBooks = document.querySelector('.popular-books-container');

function createBookCards() {
    Books.forEach((book) => {
        const bookCard = document.createElement("div");
        bookCard.classList.add("book-card");
        bookCard.innerHTML = `
                    <div class="book-img-box">
                        <img src="${book.image}" alt="">
                    </div>
                    <h3>${book.name}</h3>
                    <h4>${book.author}</h4>
                    <p>
                        <span>$3.36</span>
                        <span>$3.36</span>
                    </p>
                    <button class="purchase-btn" data-id="${book.id}">
                             purchase
                    </button>`
        popBooks.appendChild(bookCard);
    });
    document.querySelectorAll('.purchase-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const button = e.target.closest('.purchase-btn');
            const bookID = button.getAttribute('data-id');
            window.location.href = `productDetails.html?id=${bookID}`;
        });
    });
};
createBookCards();


// <============================= Aouthors cards ==============================> //
import Authors from "./aouthors.js";

console.log(Authors)
const aouthorCard_Box = document.querySelector('.aouthor-cards-box');

Authors.forEach((aouthor) => {
    const aouthorCard = document.createElement('div');
    aouthorCard.classList.add('aouthor-card');
    aouthorCard.style.backgroundImage = `url(${aouthor.image})`
    aouthorCard.innerHTML = `
                    <h2>${aouthor.name}</h2>
                    <p>Published Books: ${aouthor.publishedBooks}</p>
                    `;

    aouthorCard_Box.appendChild(aouthorCard)
})
