'use strict' // строгий режим

$(function () {

  if ($(window).width() <= 768) {
    $('.insignits-slick').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1
    });

    $('.nav_menu__ul > li').click(function () {
      $(this).find('.main-menu-sub_menu').toggleClass('active');
    });

    var clicks = 0;
    var clicks1 = 0;
    $('.nav_menu__ul > li a').parent().click(function (e) {
      if (clicks == 0) {
        if ($(this).find('ul').length > 0) {
          e.preventDefault();
        }
      } else {
        if (clicks1 == 0) {
          if ($(this).find('ul').length > 0) {
            e.preventDefault();
          }
        } else {
          console.log(4);
        }
        ++clicks1
      }
      ++clicks;
    });

  } else {
    $('.insignits-slick').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1
    });
  }

  $(function () {
    $('.block-icon-menu-mobile').on('click', function () {

      if ($('.icon-menu-mobile').hasClass("active") == true) {
        $('.disp-start').removeClass('active');
        $('.opac-menu').removeClass('active');
        $('.icon-menu-mobile').removeClass('active');
      } else {
        $('.disp-start').addClass('active');
        $('.opac-menu').addClass('active');
        $('.icon-menu-mobile').addClass('active');
      }

    });

    $('.close__menu').on('click', function () {
      $('.disp-start').removeClass('active');
      $('.opac-menu').removeClass('active');
      $('.icon-menu-mobile').removeClass('active');
    });

    $('.opac-menu').on('click', function () {
      $('.disp-start').removeClass('active');
      $('.opac-menu').removeClass('active');
      $('.icon-menu-mobile').removeClass('active');
    });

  });

  $(function () {
    $('.popup-content').magnificPopup({
      type: 'inline'
    });
  });

  $(function () {
    $('.popup-content__project').magnificPopup({
      type: 'inline'
    });
  });

});