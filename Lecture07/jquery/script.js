/*
$(function() {//do somethinghere})
==
window.onload = function () {//do somethinghere}
*/
$(function () {
  
  $('#addtask').click(function () {
    let task = $('#newtask').val()
    let item = $('<li>')
    item.text(task)
    $('#tasklist').append(item)
  })
})

// window.onload = function () {
//   document.getElementById('addtask').onclick = function () {
//     let task = document.getElementById('newtask').value
//     let item = document.createElement('li')
//     item.innerText = task
//     document.getElementById('tasklist').appendChild(item)
//   }
// }