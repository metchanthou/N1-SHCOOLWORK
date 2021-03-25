// 1- Get the list of books ( tips : use the querySelectorAll )
// TODO
let name_list =document.querySelectorAll('.book-name');
let book_Number =name_list.length;


// 2- Display the number of books on paragrah "books-number"
// TODO
document.getElementById('books-number').innerHTML =book_Number;


// 3- Display the title of the books  on paragrah "books-titles"
// TODO
let book_Title ='';
for (let name of name_list){
    book_Title +=name.textContent+ ' ,';
}

document.getElementById('books-titles').innerHTML =book_Title;