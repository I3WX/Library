// Select necessary elements from the DOM
let addBookButton = document.querySelector('#addBook button');
const form = document.querySelector('#form');
const closeButton = document.querySelector('#closeButton');
const bookNameInput = document.getElementById('bookName');
const authorInput = document.getElementById('author');
const pagesInput = document.getElementById('pages');
const container = document.getElementById('container');

let currentBox = document.querySelector('.innerBox'); // The current container for books

// Function to add a new book
const addNewBook = () => {
    const bookName = bookNameInput.value;
    const authorName = authorInput.value;
    const noOfPages = pagesInput.value;


        // Create a new book element with the provided details
        const newBook = document.createElement('div');
        newBook.classList.add('book');
        newBook.innerHTML = `
            <div class="name">${bookName}</div>
            <div class="author">${authorName}</div>
            <div class="pages">${noOfPages} Pages</div>
        `;

        // Check if the current box has less than 6 children
        if (currentBox.children.length < 6) {
            // Insert the new book before the "Add Book" button
            currentBox.insertBefore(newBook, addBookButton.closest('.book'));
        } else {
            // Replace the "Add Book" button with the new book in the current box
            addBookButton.closest('.book').replaceWith(newBook);

            // Create a new box (page) to hold additional books
            const newBox = document.createElement('div');
            newBox.classList.add('page', 'box');
            newBox.innerHTML = `
                <div class="innerBox">
                    <!-- Add Book button -->
                    <div id="addBook" class="book">
                        <button>Add Book</button>
                    </div>
                </div>
            `;

            // Append the new box to the container
            container.appendChild(newBox);
            currentBox = newBox.querySelector('.innerBox'); // Update current box to the new one

            // Update the "Add Book" button to the new page
            addBookButton = currentBox.querySelector('#addBook button');
            addBookButton.addEventListener('click', () => {
                form.classList.add('active'); // Show the form
            });
        }

        // Reset the form fields and close the form
        form.classList.remove('active');
        bookNameInput.value = '';
        authorInput.value = '';
        pagesInput.value = '';
    } ;

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
