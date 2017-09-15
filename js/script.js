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

$(".button-up").click(function() {
  $('html, body').animate({
    scrollTop: $(".nav__list li:first-child").offset().top
  }, 2000);
  $(this).delay(500).fadeOut()
});
