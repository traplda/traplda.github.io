/* $('button').click(() => {
  $('ul').append(`<li>${$('input').val()}</li>`);
  $('input').val('');
}); */

// Extra version with completing todos

$('button').click(() => {
  $('ul').append(`<dev class="new-item"></dev>`);
  $('.new-item:last-child').append(`<li>${$('input').val()}</li>`);
  $('.new-item:last-child').append(`<img id="remove" src="https://img.icons8.com/officel/30/000000/delete.png"/>`);
  $('.new-item:last-child').append(`<img id="done" src="https://img.icons8.com/dotty/80/000000/checkmark.png"/>`);
  $('#done').click((event) => {
    $(event.target).toggleClass('done-ckecked');
  });
  $("#remove").click(function(event) {
    event.preventDefault();
    $(this).parent().remove();
  });
  $('input').val('');
});