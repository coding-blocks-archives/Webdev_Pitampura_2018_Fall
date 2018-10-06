$(() => {
  function refreshList(todos) {
    let list = $('#tasklist')
    list.empty()
    for (let todo of todos) {
      list.append($(`<li>${todo.name}</li>`))
    }
  }

  $('#newtaskform').submit((e) => {
    e.preventDefault()
    $.post('/',
      // POST body
      {
        name: $('#taskname').val(),
        done: false,
        asJson: true
      },
      // callback function
      (todos) => {
        refreshList(todos)
      })
  })
})