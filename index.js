 const addButton = document.querySelectorAll('#btn');
 const ulclas = document.querySelector('.ulclass');
 const inputel = document.querySelector('#myInput');
 const add = document.querySelector('#push');


 const addForm = document.forms['todoform'];
 addForm.addEventListener('submit', function(e){
  e.preventDefault()
  const value = addForm.querySelector('input[type="text"]').value;
 })
 function addEvent(){

add.addEventListener('click' , function(){

  const li = document.createElement('li');
  const bookName = document.createElement('p');
  const deleteBtn = document.createElement('butt');
  bookName.innerHTML = inputel.value
  deleteBtn.innerHTML = 'X'
  deleteBtn.classList.add('dbtn')

  li.appendChild(bookName);
  li.appendChild(deleteBtn);
  ulclas.appendChild(li)
  deletefunc();
 })
 

}
addEvent();deletefunc();

// delete function
 function deletefunc(){

  
  let btn1 = document.querySelectorAll('butt');
   btn1.forEach(function(btn){
    btn.addEventListener('click',function(e){
    const li = e.target.parentElement;
    li.parentNode.removeChild(li)
    });
   });
  }

 