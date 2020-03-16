$(document).ready(function() {
  $('.mobile-menu').click(function () {
    $('.menu-btn').toggleClass('menu-active')
    $('.mobile-swipee').toggleClass('menu-active')
    $('.swipe-item').toggleClass('menu-active')

 });
  $('.mobile-swipee').click(function () {
     $('.menu-btn').removeClass('menu_active')
     $('.mobile-swipee').removeClass('menu_active')
     $('.swipe-item').removeClass('menu-active')
   });
})
