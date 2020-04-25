'use strict'

$(function () {
    $('.js-simple-solution__item').click(function () {
        let url_ipad = $(this).attr('data-ipad-img');
        let url_iphone = $(this).attr('data-iphone-img');

        $('.js-ipad_bg').css('backgroundImage', `url(${url_ipad})`);
        $('.js-iphone_bg').css('backgroundImage', `url(${url_iphone})`);
    });

    $('.js-tabs_item').click(function () {
        let id_tabs = $(this).attr('data-tags');

        $('.js-tabs_item').removeClass('active');
        $(this).addClass('active');

        $('.js-scheme__tab').each(function (e, elem) {
            id_tabs == $(elem).attr('data-tab') ? $(elem).removeClass('none') : $(elem).addClass('none');
        });

    });

    $('.js-link-menu').click(function (e) {
        e.preventDefault();
        let idSelect = $(this).attr('data-id-select');

        $('.js-select').each(function (e, elem) {
            if (idSelect == $(elem).attr('data-select-id')) {
                $('html, body').animate({
                    scrollTop: $(elem).offset().top,
                }, 800);
            }
        });

        if ($(window).width() <= 992) {
            closeMan ();
        }

    });

    $('.js-reloar').click(function (e) {
        e.preventDefault();
        location.reload();
    });

    $('.js-btn-popoup').click(function (e) {
        e.preventDefault();
        let id_popup = $(this).attr('data-btn-popup');

        $('.js-popup').each(function (e, elem) {
            $(elem).attr('data-id-popup') === id_popup ? $(elem).show(300) : $(elem).hide(300);
        });

    });

    function closePopup() {
        $('.js-popup').hide(300);

        $('.popup_video').each(function(e, elem) {
            let iframe_src = $(elem).find('iframe').attr("src");
            $(elem).find('iframe').attr('src', iframe_src);
        });

    }

    $('.js-popup-close').click(function () {
        closePopup();
    });

    $('.popup').mouseup(function (e) {
        let div = $('.popup__wrapp');
        if (!div.is(e.target) && div.has(e.target).length === 0) {
            closePopup();
        }
    });


    $('.input-popup[name="telephone"]').mask("+380 999999999");
    $('.input-site[name="warranty_input"]').mask("+380 999999999");


// установка курсора на нужную позицию
    $.fn.setCursorPosition = function(pos) {
        if ($(this).get(0).setSelectionRange) {
          $(this).get(0).setSelectionRange(pos, pos);
        } else if ($(this).get(0).createTextRange) {
          var range = $(this).get(0).createTextRange();
          range.collapse(true);
          range.moveEnd('character', pos);
          range.moveStart('character', pos);
          range.select();
        }
      };

    $('.js-validation').click(function () {
        $(this).setCursorPosition(5);
    });

    let bol = 0;
    $('.js-btn-form').click(function (e) {
        let input = $(this).closest('form').find('.js-validation').val();
        
        if (input.length != 14 && bol == 0) {
            e.preventDefault();
            $(this).closest('form').before('<p class="error_text">Заполните поле телефона</p>')
            bol = 1;
        } else if (input.length != 14) {
            e.preventDefault();
        }
    });

    if (location.href.includes('#assest')) {
        $('.js-popup_thanks').show(300);
    }


    $('.aunhor-link').click(function (e) {
        e.preventDefault();
        let id_aunkor = $(this).attr('data-id-item');

        $('нужній класс').each(function (e, elem) {
            if (id_aunkor == $(elem).attr('data-menu-li')) {
                $(elem).addClass('active');
            }
        });
    });

    let bolen = 0;

    function mobfun() {
       
        if ($(window).width() <= 992 && bolen == 0) {
            $('.wrap-menu').append('<span class="burger-menu-mob"><span></span></span>');
            $('.main-menu').append('<i class="close-menu"></i>')
            bolen=1;
            
            $('.header').addClass('fixed');
        }
    }

    $(document).on('click','.burger-menu-mob', function () {
        $('.main-menu').toggleClass('open');
        $('.opas-men').toggleClass('active');
    });

    mobfun();

    function closeMan () {
        $('.main-menu').removeClass('open')
        $('.opas-men').removeClass('active');
    }

    $('.opas-men').click(closeMan);


    $(document).on('click', '.close-menu', closeMan);

    $(window).on('resize', function () {
        mobfun();
    });

    if($(window).width() <=768) {
        $('.question__item').click(function () {
            $('.question__item').removeClass('active');

            $(this).addClass('active');
        });
    }


});






