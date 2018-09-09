/*
$(function() {//do somethinghere})
==
window.onload = function () {//do somethinghere}
*/
$(() =>
  $('#addtask').click(() =>
    $('#tasklist').append($('<li>').text($('#newtask').val()))
  )
)

// window.onload = function () {
//   document.getElementById('addtask').onclick = function () {
//     let task = document.getElementById('newtask').value
//     let item = document.createElement('li')
//     item.innerText = task
//     document.getElementById('tasklist').appendChild(item)
//   }
// // }
// function add(n1, n2) {
//   return n1 + n2
// }
// let add = (n1, n2) => n1 + n2