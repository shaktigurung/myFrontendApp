
function clearInput(selector){
    document.querySelector(selector) = '';
}

function getTodoText() {
    return document.querySelector('.textfield').value;
}

function updateRemaining() {
    const remaining = document.querySelector('.remaining');
    const todos = document.querySelectorAll('.todo');
    remaining.innerText = todos;
}
function addTodo(){
   const todo = document.querySelector('.todo');
   const newTodo = todo.cloneNode(true);
   newTodo.querySelector('.title').innerText = getTodoText();
   todo.parentElement.insertBefore(newTodo, todo);
   clearInput('.textfield');
   updateRemaining();
}

function clearCompleted() {
    const todos = document.querySelectorAll('.todo');
    for(let todo of todos){
        if (todo.querySelector('input').checked ==true){
            todo.remove();
        }
    }
    updateRemaining();
}
function filter(filterName, button) {
    document.querySelector('.selected').classList.remove('selected');
    button.classList.add('selected');
    for (let todo of document.querySelectorAll('.todo')) {
        const checked = todo.querySelector('input').checked == true;
        if (filterName == 'all') {
          todo.hidden = false;
        } else if (filterName == 'active') {
          todo.hidden = checked;
        } else if (filterName == 'completed') {
          todo.hidden = !checked;
        }
    }
}