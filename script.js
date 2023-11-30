const buttonAdd = document.querySelector(".add-btn");
const inputNew = document.querySelector(".input-new");

let containerTask = document.querySelector(".container-tasks");

// const currentTask = null;

buttonAdd.addEventListener('click', () => {
  newTask = document.createElement('div');
  newTask.classList.add('tasks');

  newTask.innerHTML = `
    <div class='input-text'>
      ${inputNew.value}
    </div>

    <button class="btn-delete">X</button> 
  `
  containerTask.appendChild(newTask);

  inputNew.value = '';

  const btnDelete = document.querySelectorAll('.btn-delete');
  
  btnDelete.forEach(btn => {
    btn.addEventListener('click', e => {
      containerTask.removeChild(e.target.parentNode)
    })
  })
})
