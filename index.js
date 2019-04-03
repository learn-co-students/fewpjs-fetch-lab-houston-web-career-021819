//
function fetchBooks() {
  fetch('https://anapioficeandfire.com/api/books')
    .then(function(response){
      return response.json()
    })
    .then(function(books){
      renderBooks(books)
    })
}


function renderBooks(json) {
 const body = document.querySelector('body')
 json.forEach(book => {
   const h2 = document.createElement('h2')
   h2.innerHTML = `<h2>${book.name}</h2>`
   body.appendChild(h2)
 })
}

document.addEventListener('DOMContentLoaded', function() {
 fetchBooks()
})
