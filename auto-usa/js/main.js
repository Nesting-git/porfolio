'use strict'

$(document).ready(function () {

    // ibg
    function ibg() {
        $.each($('.ibg'), function (index, val) {
            if ($(this).find('img').length > 0) {
                let src_img = $(this).find('img').attr('src');
                $(this).css('backgroundImage', 'url("' + src_img + '"');
            }
        });
    }
    ibg();
    // end ibg

    // Прокрутка вверх
    $(window).scroll(function () {
        let scr_top = $(window).scrollTop();
        scr_top > 100 ? $('.js-up').fadeIn(300) : $('.js-up').fadeOut(300);
    });
    $('.js-up').click(function () {
        $('html, boud').animate({ scrollTop: 0 }, 300);
    });
    // end Прокрутка вверх

    // попап
    $('.js-btn-popup').click(function (e) {
        e.preventDefault();
        $('body').addClass('fixeds')
        let index_btn_popup = $(this).attr('href');

        $.each($('.js-popup'), function (i, elem) {
            let index_popup = $(elem).attr('data-id-popup');
            index_btn_popup === index_popup ? $(elem).fadeIn(300) : $(elem).fadeOut(300);
        });
    });

    function close_popup() {
        $('.js-popup').fadeOut(300);
        $('body').removeClass('fixeds')
        let src = '';

        if ($('.js-popup-video').find('iframe')) {

            $('.js-popup-video').find('iframe').each(function (e, elem) {
                src = $(elem).attr('src');
                $(elem).attr('src', src);
            });
        }

    }

    $('.js-popup__close').click(close_popup);

    $('.js-popup').click(function (e) {
        let popup = $('.js-popup__wrapp');
        if (!popup.is(e.target) && popup.has(e.target).length === 0)
            close_popup();
    });

    let hestag = location.href;

    if (hestag.indexOf('#assest') != -1) {
        $('.js-popup-ok').fadeIn(300);
    }

    // end попап

    // select form

    function heightSelect() {
        let colSelect = 5; //Сколько показывать пунктов
        let h = 0;

        $('.js-form-selection').each(function (i, elems) {
            $(elems).find($('.js-list-option')).each(function (e, elem) {
                if (e <= colSelect) {
                    h += $(elem).innerHeight();
                }
            });

            $(elems).find($('.js-list_scroll')).css('height', h + 'px');

            h = 0;
        });


        $('.form-selection__list').addClass('loadSelect');

    }

    heightSelect();

    $('.js-form-selection-name').click(function () {

        if (!$(this).closest($('.js-form-selection')).hasClass('active')) {
            $(this).closest($('.js-form-selection')).addClass('active');
            $(this).closest($('.js-form-selection')).find('.js-selection-list').slideDown('100');
        } else {
            $(this).closest($('.js-form-selection')).removeClass('active');
            $(this).closest($('.js-form-selection')).find('.js-selection-list').slideUp('100');
        }

    });

    $('.js-list-option').click(function () {
        $(this).closest('.js-form-selection').find($('.js-form-selection-text')).text($(this).text()).attr('data-value', $(this).text());
        $(this).closest('.js-form-selection').removeClass('active');
        $(this).closest('.js-form-selection').find('.js-selection-list').slideUp('100');
    });

    $(document).click(function (e) {
        let $select = $('.js-form-selection');
        if (!$select.is(e.target) && $select.has(e.target).length === 0) {
            $('.js-form-selection').find('.js-selection-list').slideUp('100');
            $('.js-form-selection').removeClass('active');
        }
    });

    // slider

    function sliderwitching(id) {

        $('.js-auction-slider').each(function (e, elem) {
            if (id.attr('href') === $(elem).attr('data-id-slider')) {
                $('.js-auction-slider').removeClass('active');
                $(elem).addClass('active');
            }
        });
    }

    $('.js-tabs-item').click(function (e) {
        e.preventDefault();
        if (!$(this).hasClass('active')) {
            $('.js-tabs-item').removeClass('active');
            $(this).addClass('active');
            sliderwitching($(this));
        }
    });

    $('.js-question').click(function () {
        if (!$(this).hasClass('active')) {
            $('.js-question').removeClass('active');
            $(this).addClass('active');
        } else {
            $('.js-question').removeClass('active');
        }
    });

    let consts = false;

    function funnStart() {
        if (consts == false && $(window).width() <= 1200) {
            $('.section-select__row').append($('.section-select__info-text'));

            $('.section-question').addClass('bg-mob');

            if ($(window).width() <= 992) {
                $('.section-auction').addClass('bg-mob-auction');

            }

            consts = true;
        }

    }

    funnStart();

    $(window).on('resize', function () {
        funnStart();
    });

    $('input[name="form_select_phone"]').mask('+38(099)999-99-99');

    $('.js-close-top-baner').click(function (e) {
        $(this).closest('.baner-top-site').slideUp(300);
    });

    // боковое увидомление

    $(function () {
        setTimeout(function () {
            $('.js-notification').addClass('active');
        }, 20000);
    });

    $('.js-not-close').click(function() {
        $(this).closest('.js-notification').removeClass('active');
    });

});