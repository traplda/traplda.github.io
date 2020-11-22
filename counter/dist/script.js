// note that jQuery is loaded in the settings

let counter = 0;

$('#increase').click(() => {
  counter = counter + 1;
  $('h2').text(counter);
});

$('#decrease').click(() => {
  counter--;
  $('h2').text(counter);
});