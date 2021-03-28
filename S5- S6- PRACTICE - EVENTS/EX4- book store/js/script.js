// 
const bookDelete= document.querySelectorAll('li');
bookDelete.forEach( item =>{
  item.addEventListener('click',()=>{
    item.remove();
  })
});
//  FUNCTIONS -------------------------------------------------------------
function deleteBook(event) {
	
  // 1- Check the event if raised on the button delete 
  
 //  2  if yes, get the parent and remove it from the  bookList
}

function addBook(event) {
  event.preventDefault();

  // 1- Get the book name from the input field
  const get_bookNAME =document.getElementById('add-book-textfield');

  // 2- Create a new spam bookName for the book name, class name = name
  const bookName =document.createElement('span');
  bookName.classList.add('name');
  bookName.textContent =get_bookNAME;

  // 3- Create a new spam deleteBtn for the button delete, class name = delete
  const deleteBtn =document.createElement('span');
  deleteBtn.classList.add('delete');

  // 4- Create a new li
  const new_Li =document.createElement('li');
  const getUl =document.querySelector('#book-list ul');

  // 5- Add bookName and deleteBtn to li and li to the  bookList UL
  new_Li.appendChild(bookName);
  new_Li.appendChild(deleteBtn);
  getUl.appendChild(new_Li);
  document.addEventListener('keyup', event =>{
    if (event.key ==='+ Addr'){
      const name =document.querySelector('add-book-textfield');
      // console.log(name.textContent.value)
    }
  })

}

function searchBook(event) {
  // 1- Get the search text

  // 2- Loop on all LI
 
    // Update the style of the LI (visible or hidden)
   
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
