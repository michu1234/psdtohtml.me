// TOP MENU //


$(".nav__list li:first-child").click(function() {
  $('html, body').animate({
    scrollTop: $("header").offset().top
  }, 1500);
});



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
    scrollTop: $(".btn--arrow").offset().top
  }, 1000);
});



$(".nav__list li:nth-child(5)").click(function() {
  $('html, body').animate({
    scrollTop: $(".contact").offset().top
  }, 2000);
});



// UP BUTTON //

$(".btn--arrow").click(function() {
  $('html, body').animate({
    scrollTop: $(".apps").offset().top
  }, 1500);
})

$(".button-up").click(function() {
  $('html, body').animate({
    scrollTop: $("header").offset().top
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





// STICKY BAR //

$(document).scroll(function() {

  if( $(this).scrollTop() <= 50 && $(this).scrollTop() >= 0){
    $('.nav__stickybar').fadeIn();
    $('.nav__stickybar').css({'background': 'transparent', 'opacity': 1});
  }

  if( $(this).scrollTop() > 50 &&  $(this).scrollTop() < 400 ){
    $('.nav__stickybar').fadeOut();
  }
  if( $(this).scrollTop() >= 400 ) {
    $('.nav__stickybar').show('slow');
    $('.nav__stickybar').css({'background': '#83bdbf', 'opacity': .6});
  }
  }
)

$('.nav__list').on('click', function(event){
  $('.nav__list li').removeClass('is-active');
  $(event.target).addClass('is-active');
})



// MOBILE MENU //

$('.icon-menu').on('click', function(){
$('.nav__list li').toggleClass('is-mobile');
})





// CAROUSEL //

$('.apps__control').on('click', 'div', function(event){
  $(event.target).addClass('is-active-dot').siblings().removeClass('is-active-dot');
})

$('.apps__control div').eq(1).click(function(){
  console.log('srodek');
  $('.apps__carousel .apps__examples').eq(1).addClass('is-active-apps').css('opacity', 0).siblings().removeClass('is-active-apps');
  $('.apps__carousel .apps__examples').eq(1).fadeTo('fast',1);
})

$('.apps__control div').eq(0).click(function(){
  console.log('srodek');
  $('.apps__carousel .apps__examples').eq(0).addClass('is-active-apps').css('opacity', 0).siblings().removeClass('is-active-apps');
  $('.apps__carousel .apps__examples').eq(0).fadeTo('fast',1);
})


$('.apps__control div').eq(2).click(function(){
  console.log('srodek');
  $('.apps__carousel .apps__examples').eq(2).addClass('is-active-apps').css('opacity', 0).siblings().removeClass('is-active-apps');
  $('.apps__carousel .apps__examples').eq(2).fadeTo('fast',1);
})




