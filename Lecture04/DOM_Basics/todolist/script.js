let inpNewtask = document.getElementById('newtask')
let btnAddTask = document.getElementById('addtask')
let ulTodoList = document.getElementById('todolist')

btnAddTask.onclick = function () {
    let start  = new Date().getTime()
    ulTodoList.innerHTML += "<li>" + inpNewtask.value + "</li>"

    // for loop etc..

    console.log(new Date().getTime() - start)
}