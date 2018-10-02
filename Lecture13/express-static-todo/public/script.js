$(() => {
  let taskList = $('#tasklist')
  let newtask = $('#newtask')
  let addtask = $('#addtask')
  function getAllTodos(done) {
    $.get('/todos', done)
  }
  function addTodo (task, done) {
    $.post('/todos', {
      name: task,
      done: false
    }, done)
  }

  function refreshList() {
    taskList.empty()
    getAllTodos((todos) => {
      for (let todo of todos) {
        taskList.append($(`<li>${todo.name}</li>`))
      }
    })
  }
  refreshList()
  addtask.click(() => {
    addTodo(newtask.val(), (data) => {
      if (data.success) {
        refreshList()
      }
    })
  })


})