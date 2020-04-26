let i=0

let photos = ['img1.png','img2.png','img3.png']

$('.right').click(function() {
  if (i < 2) {
    i++
    $('.left').css('background-color','white')
    console.log(i)
    $('.photo-large').children().replaceWith('<img src="img/' + photos[i] +'" alt="photo">')
    if (i == 2) {
      $('.right').css('background-color','silver')
    }

  }  
})

$('.left').click(function() {
  if (i > 0) {
    i--
    $('.right').css('background-color','white')
    console.log(i)
    $('.photo-large').children().replaceWith('<img src="img/' + photos[i] +'" alt="photo">')
    if (i == 0) {
      $('.left').css('background-color','silver')
    }

  }  
})

if (i == 0) {
  $('.left').css('background-color','silver')
  $('.min1').css('border','solid black 1px')
}

$('.photo-large').append('<img src="img/' + photos[i] +'" alt="photo">')