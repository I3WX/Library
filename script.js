const addBookButton = document.querySelector('#addBook button');
const form = document.querySelector('#form');
const closeButton = document.querySelector('#closeButton');
const bookNameInput = document.getElementById('bookName');
const authorInput = document.getElementById('author');
const pagesInput = document.getElementById('pages');
const saveButton = document.getElementById('saveButton');
const innerBox = document.getElementById('innerBox');

addBookButton.addEventListener('click', () => {
    form.classList.add('active');
});

closeButton.addEventListener('click', () => {
    form.classList.remove('active');
});

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const bookName = bookNameInput.value;
    const authorName = authorInput.value;
    const noOfPages = pagesInput.value;

    if (bookName && authorName && noOfPages) {
        // Create a new book element
        const newBook = document.createElement('div');
        newBook.classList.add('book');
        newBook.innerHTML = `
            <div class="name">${bookName}</div>
            <div class="author">${authorName}</div>
            <div class="pages">${noOfPages} Pages</div>
        `;
    
        // Append the new book to innerBox
        innerBox.insertBefore(newBook, innerBox.firstChild);
    
        // Reset form and close it
        form.classList.remove('active');
        bookNameInput.value = '';
        authorInput.value = '';
        pagesInput.value = '';
    } else {
        alert('Please fill out all fields.');
    }
});
