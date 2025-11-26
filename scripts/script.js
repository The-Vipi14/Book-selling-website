
// <============================== Books data and books card creation =================> //

import Books from "./Books.js";

console.log(Books)

const popBooks = document.querySelector('.popular-books-container');

function createBookCards() {
    Books.forEach((book) => {
        const bookCard = document.createElement("div");
        bookCard.classList.add("book-card");
        bookCard.innerHTML = `<div class="book-img-box"><img src="${book.image}" alt=""></div>
                    <h3>${book.name}</h3>
                    <h4>${book.author}</h4>
                    <p><span style="text-decoration: line-through; color: red;">$3.36</span><span style="color: green;">$3.36</span></p>
                    <button >purchase</button>`
        popBooks.appendChild(bookCard)
    });
    console.log("first")
}

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
