function fetchBooks() {
  fetch('https://anapioficeandfire.com/api/books')
  .then(res => res.json())
  .then(json => renderBooks(json))
}

function renderBooks(json) {

}

document.addEventListener('DOMContentLoaded', () => {
  fetchBooks()
})
