$(".nav__list li:nth-child(2)").click(function() {
  $('html, body').animate({
    scrollTop: $(".apps").offset().top
  }, 1500);
});

$(".nav__list li:nth-child(3)").click(function() {
  $('html, body').animate({
    scrollTop: $(".team").offset().top
  }, 2000);
});

$(".nav__list li:nth-child(4)").click(function() {
  $('html, body').animate({
    scrollTop: $(".services").offset().top
  }, 1000);
});

$(".nav__list li:nth-child(5)").click(function() {
  $('html, body').animate({
    scrollTop: $(".contact").offset().top
  }, 2000);
});

$('.button-up').hide();

$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 2000) {
    $('.button-up').fadeIn();
  } else {
    $('.button-up').fadeOut();
  }
});

$(".button-up").click(function() {
  $('html, body').animate({
    scrollTop: $(".nav__list li:first-child").offset().top
  }, 2000);
});

$(".btn--arrow").click(function() {
  $('html, body').animate({
    scrollTop: $(".apps").offset().top
  }, 1500);
});




$('.left').click(function(){
  var firstThing = $('.apps__item:first-child').clone();

  $(firstThing).before($('apps__item:last-child'));
  $('.apps__examples').animate({'marginLeft': "-=650px"});
})
