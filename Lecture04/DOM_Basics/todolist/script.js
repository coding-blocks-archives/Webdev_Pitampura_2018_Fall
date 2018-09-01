let inpNewtask = document.getElementById('newtask')
let btnAddTask = document.getElementById('addtask')
let ulTodoList = document.getElementById('todolist')

btnAddTask.onclick = function () {
    ulTodoList.innerHTML += "<li>" + inpNewtask.value + "</li>"
}