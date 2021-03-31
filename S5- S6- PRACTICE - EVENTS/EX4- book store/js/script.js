// 
//  FUNCTIONS -------------------------------------------------------------
function deleteBook(event) {
	event.preventDefault();
  // 1- Check the event if raised on the button delete 
 //  2  if yes, get the parent and remove it from the  bookList
 if (event.target.className==='delete'){
  let li =event.target.parentElement;
  li.remove();
}
}

function addBook(event) {
  event.preventDefault();

  // 1- Get the book name from the input field
  const getBook=document.querySelector('#add-book-textfield');
   
  // 2- Create a new spam bookName for the book name, class name = name
  const new_Name=document.createElement('span');
  new_Name.className ='name';
  new_Name.textContent =getBook.value;

  // 3- Create a new spam deleteBtn for the button delete, class name = delete
  const new_Delete=document.createElement('span');
  new_Delete.className ='delete';
  new_Delete.textContent ='delete';

  // 4- Create a new li
  const new_Li=document.createElement('li');
  new_Li.appendChild(new_Name);
  new_Li.appendChild(new_Delete);

  // 5- Add bookName and deleteBtn to li and li to the  bookList UL
 const ul=document.querySelector('ul');
 ul.appendChild(new_Li);
 console.log(ul);
   
}

function searchBook() {
  // 1- Get the search text
  let text =searchBookInput.value.toLowerCase();
  let  listBook =document.querySelectorAll('li');
  // Loop 
    for (let li of listBook){
        let lisname =li.firstChild.textContent.toLowerCase();
        if (lisname.indexOf(text)===-1){
            li.style.display ='none';
        }else{
            li.style.display ='';
        }
    }
    // Update the style of the LI (visible or hidden)
    console.log(text);
  
  }




//  MAIN -------------------------------------------------------------
let bookList = document.querySelector("#book-list ul");
bookList.addEventListener("click", deleteBook);

let addForm = document.getElementById("add-book");
addForm.addEventListener("submit", addBook);

let searchBookInput = document
  .getElementById("search-books")
  .querySelector("input");
searchBookInput.addEventListener("keyup", searchBook);
