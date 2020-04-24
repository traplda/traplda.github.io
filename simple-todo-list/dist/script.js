/* $('button').click(() => {
  $('ul').append(`<li>${$('input').val()}</li>`);
  $('input').val('');
}); */

// Extra version with completing todos

$('button').click(() => {
  $('ul').append(`<dev class="new-item"></dev>`);
  $('.new-item:last-child').append(`<li>${$('input').val()}</li>`);
  $('.new-item:last-child').append(`<img src="https://img.icons8.com/officel/30/000000/delete.png"/>`);
  $('.new-item:last-child').append(`<img id="done" src="https://img.icons8.com/dotty/80/000000/checkmark.png"/>`);
  $('li:last-child').click((event) => {
    $(event.target).toggleClass('completed');
  });
  $('input').val('');
});