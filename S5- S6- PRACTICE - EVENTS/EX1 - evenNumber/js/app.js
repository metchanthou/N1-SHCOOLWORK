const NUMBER_BOX = 10;
let container = document.querySelector(".container");

for (i=1; i<NUMBER_BOX; i++){
  let create =document.createElement('div');
  let add_Span =document.createElement('span');
  let random =Math.floor(Math.random()*10);
  add_Span.textContent = random;
  create.style.color ='#0c8cf5';
  create.classList.add()
  create.setAttribute('id', 'box-'+i);
  create.classList.add('box');
  container.appendChild(create);
  create.appendChild(add_Span)
}                       


// This function is called when any box is clicke

let boxes =document.querySelectorAll('.box');
for (let box of boxes){
    box.addEventListener('click', function(){
    let number =parseInt(box.textContent);
    if (number%2 ==0){
      box.style.background ='green';
      box.textContent ='WON-'+ box.textContent;
      box.style.color ='white';
    }else{
      box.style.background ='red';
      box.textContent ='LOST-'+box.textContent;
      box.style.color ='white';
    }
  })
}
