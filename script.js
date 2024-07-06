// Select necessary elements from the DOM
let addBookButton = document.querySelector('#addBook button');
const form = document.querySelector('#form');
const closeButton = document.querySelector('#closeButton');
const bookNameInput = document.getElementById('bookName');
const authorInput = document.getElementById('author');
const pagesInput = document.getElementById('pages');
const container = document.getElementById('container');
let currentBox = document.querySelector('#innerBox'); // The current container for books

let books = [];
const storageKey = "BOOKS";

// Function to add a new book
const addNewBook = () => {
    const bookName = bookNameInput.value;
    const authorName = authorInput.value;
    const noOfPages = pagesInput.value;

    books.push([bookName, authorName, noOfPages]);
    renderItems();
    // Save the book to localStorage
    saveData(bookName, authorName, noOfPages);

    // Reset the form fields and close the form
    form.classList.remove('active');
    bookNameInput.value = '';
    authorInput.value = '';
    pagesInput.value = '';
};

// Show the form when "Add Book" button is clicked
addBookButton.addEventListener('click', () => {
    form.classList.add('active');
});

// Hide the form when the close button is clicked
closeButton.addEventListener('click', () => {
    form.classList.remove('active');
});

// Handle form submission
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the default form submission
    addNewBook();
});

// Function to save data to localStorage
function saveData(bookName, authorName, noOfPages) {
    books.push([bookName, authorName, noOfPages]);
    localStorage.setItem(storageKey, JSON.stringify(books));
}

// Function to load items from localStorage
function loadItems() {
    const storedBooks = localStorage.getItem(storageKey);
    if (storedBooks) {
        books = JSON.parse(storedBooks);
        renderItems();
    }
}

// Function to render items from books array
function renderItems() {
    currentBox.innerHTML = ''; // Clear current content before rendering
    books.forEach(([bookName, authorName, noOfPages]) => {
        const newBook = document.createElement('div');
        newBook.classList.add('book');
        newBook.innerHTML = `
            <div class="name">${bookName}</div>
            <div class="author">${authorName}</div>
            <div class="pages">${noOfPages} Pages</div>
        `;
        currentBox.appendChild(newBook);
    });

    // Create the "Add Book" button outside the loop
    const addBookBtn = document.createElement('button');
    const addBookdiv = document.createElement('div');
    addBookdiv.classList.add('book');
    addBookBtn.innerHTML = 'Add Book';
    addBookdiv.id = 'addBook';
    addBookBtn.textContent = 'Add Book';
    addBookBtn.addEventListener('click', () => {
        form.classList.add('active');
    });
    addBookdiv.appendChild(addBookBtn);
    currentBox.appendChild(addBookdiv);
}

// Load items from localStorage when the DOM content is loaded
document.addEventListener('DOMContentLoaded', loadItems);
