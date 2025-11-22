const Books = [
    {
        name: "friction",
        price: 304,
        image: "./assets/Books/book1.jpg"
    },
    {
        name: "friction",
        price: 304,
        image: "./assets/Books/book1.jpg"
    },
    {
        name: "friction",
        price: 304,
        image: "./assets/Books/book1.jpg"
    },
    {
        name: "friction",
        price: 304,
        image: "./assets/Books/book1.jpg"
    },
    {
        name: "friction",
        price: 304,
        image: "./assets/Books/book1.jpg"
    },
];

const popBooks = document.querySelector('.popular-books-container');
// const bookCard = document.querySelector('.book-card');

function createBookCards() {
    Books.forEach((book) => {
        const bookCard = document.createElement("div");
        bookCard.classList.add("book-card");
        bookCard.innerHTML = `<img src="${book.image}" alt="">
                    <h3>${book.name}</h3>
                    <h4>ISBN:129484673783</h4>
                    <p><span style="text-decoration: line-through; color: red;">$3.36</span><span style="color: green;">$3.36</span></p>
                    <button >purchase</button>`
        popBooks.appendChild(bookCard)
    });
    console.log("first")
}

createBookCards();



const loginPageCut_btn = document.getElementById('cut-btn');
const loginPageCut = () =>{
    document.getElementById('login-page').style.display = "none";
    document.querySelector('.body-proxy').classList.remove('blur-body');
    document.querySelector('body').classList.remove('no-scroll')
}
const showLoginPage = () =>{
    document.getElementById('login-page').style.display = "block";
    document.querySelector('.body-proxy').classList.add('blur-body');
        document.querySelector('body').classList.add('no-scroll')

}
