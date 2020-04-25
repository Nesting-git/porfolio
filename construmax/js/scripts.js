'use strict'

$(function () {

    $('.js-main-slider').slick({
        appendArrows: $('.btn-main-slide'),
        appendDots: $('.dots-main-slider'),
        dots: true,
        fade: true,
        infinite: true,
    });

    $('.ju-spas-bet').each(function (j, elems) {
        $(elems).find('button').each(function (i, elem) {
            $(elem).text('0' + (+i + 1))
        });
    });

    $('.popup-content').magnificPopup({
        type: 'inline',
    });

    $('.js-section-product__slider').slick({
        appendArrows: $('.btn-product-slide'),
        appendDots: $('.dots-product-slider'),
        dots: true,
        fade: true,
        infinite: true,
    });

    $('.js-section-product__slider-2').slick({
        appendArrows: $('.btn-product-slide-2'),
        appendDots: $('.dots-product-slider-2'),
        dots: true,
        fade: true,
        infinite: true,
    });

    $('.js-section-product__slider-3').slick({
        appendArrows: $('.btn-product-slide-3'),
        appendDots: $('.dots-product-slider-3'),
        dots: true,
        fade: true,
        infinite: true,
    });

    $('.js-section-product__slider-4').slick({
        appendArrows: $('.btn-product-slide-4'),
        appendDots: $('.dots-product-slider-4'),
        dots: true,
        fade: true,
        infinite: true,
    });

    $('.js-section-product__slider-5').slick({
        appendArrows: $('.btn-product-slide-5'),
        appendDots: $('.dots-product-slider-5'),
        dots: true,
        fade: true,
        infinite: true,
    });

    $('.js-section-product__slider-6').slick({
        appendArrows: $('.btn-product-slide-6'),
        appendDots: $('.dots-product-slider-6'),
        dots: true,
        fade: true,
        infinite: true,
    });

    $('.js-section-product__slider-7').slick({
        appendArrows: $('.btn-product-slide-7'),
        appendDots: $('.dots-product-slider-7'),
        dots: true,
        fade: true,
        infinite: true,
    });

    let objMas = {};

    $('.js-section-product__item--left').each(function (i, elems) {
        $(elems).find('.section-product__img').each(function (j, elem) {
            objMas[j] = $(elem).attr('data-masa');
        });

        $(elems).find('.slick-dots button').each(function (q, elemensMass) {
            $(elemensMass).text(objMas[q] + 'кг');
        });
    });

    $('.js-btn-categoru-item').click(function (e) {
        e.preventDefault();

        if ($(window).width() > 992) {
            $('.js-btn-categoru-item').removeClass('active');
            $(this).addClass('active');

            let el = $(this);

            $(this).closest('.section-product__item--right').find('.wrapper-block').removeClass('active');

            $(this).closest('.section-product__item--right').find('.wrapper-block').each(function (i, elem) {
                if (el.attr('data-nom') == $(elem).attr('data-nom')) {
                    $(elem).addClass('active');
                }
            });
        } else {
            $('.wrapper-block').hide(400);

            if ($(this).hasClass('active') == false) {
                $('.js-btn-categoru-item').removeClass('active');
                $(this).addClass('active');
            } else {
                $(this).removeClass('active');
            }


            if ($(this).hasClass('active')) {
                $(this).find('.wrapper-block').show(400);
            }
        }

    });

    $('a[href^="#"]').click(function (e) {
        e.preventDefault();
        let ele = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(ele).offset().top
        }, 1000);
    });

    $('.label-checkbox').click(function (e) {
        popupForm();
    });

    popupForm();

    function popupForm() {
        if ($('.popup_checkbox').prop('checked')) {
            $('.popup-form-btn').removeClass('inactive');
            $('.popup-form-btn').prop('disabled', false);
            $('.form-popup__label span').addClass('active');
        } else {
            $('.popup-form-btn').addClass('inactive');
            $('.popup-form-btn').prop('disabled', true);
            $('.form-popup__label span').removeClass('active');
        }
    }

    $('.form-popup__input').each(function (i, elem) {
        $(elem).val().length > 0 ? $(this).addClass('active') : $(this).removeClass('active');
    });

    $('.form-popup__input').change(function () {
        $(this).val().length > 0 ? $(this).addClass('active') : $(this).removeClass('active');
    });

    $('.form-popup').validate({
        rules: {
            popupName: 'required',
            popupMob: 'required',
        },
        messages: {
            popupName: 'Введите ваше имя',
            popupMob: 'Введите номер телефона',
        }
    });

    function fuScroll() {
        if ($(window).scrollTop() > 1) {
            $('.header__top').addClass('active');
        } else {
            $('.header__top').removeClass('active');
        }
    }



    function funScrolTop() {
        let top = $(window).scrollTop();

        $('.main-menu-li').removeClass('active');

        if (top >= $('#section-product__row-1').offset().top - $('#section-product__row-1').height() / 2 && top <= $('#section-product__row-2').offset().top - $('#section-product__row-2').height() / 2) {
            $('.col-bef-purple').addClass('active');
        } else if (top >= $('#section-product__row-2').offset().top - $('#section-product__row-2').height() / 2 && top <= $('#section-product__row-3').offset().top - $('#section-product__row-3').height() / 2) {
            $('.col-bef-blue').addClass('active');
        } else if (top >= $('#section-product__row-3').offset().top - $('#section-product__row-3').height() / 2 && top <= $('#section-product__row-4').offset().top - $('#section-product__row-4').height() / 2) {
            $('.col-bef-green').addClass('active');
        } else if (top >= $('#section-product__row-4').offset().top - $('#section-product__row-4').height() / 2 && top <= $('#section-product__row-5').offset().top - $('#section-product__row-5').height() / 2) {
            $('.col-bef-orange').addClass('active');
        } else if (top >= $('#section-product__row-5').offset().top - $('#section-product__row-5').height() / 2 && top <= $('#section-product__row-6').offset().top - $('#section-product__row-6').height() / 2) {
            $('.col-bef-yellow').addClass('active');
        } else if (top >= $('#section-product__row-6').offset().top - $('#section-product__row-6').height() / 2 && top <= $('#section-product__row-7').offset().top - $('#section-product__row-7').height() / 2) {
            $('.col-bef-red').addClass('active');
        } else if (top >= $('#section-product__row-7').offset().top - $('#section-product__row-7').height() / 2 && top <= $('.maps').offset().top - $('.maps').height() / 2) {
            $('.col-bef-lilac').addClass('active');
        } else {
            $('.main-menu-li').removeClass('active');
        }

    }

    funScrolTop();



    function fuDowload() {
        if ($(window).width() <= 1600) {

            $('.section-product__item--right').each(function (i, elem) {
                let a = $(elem).find('.don-mob-none').html();
                $(elem).find('.block-mob-donload').html(a);
            });

        }
    }

    fuDowload();

    function categorMob() {
        if ($(window).width() <= 992) {

            $('.btn-categoru-item').removeClass('active');

            $('.section-product__row').each(function (i, elem) {

                $(elem).find('.btn-categoru-item').each(function (j, btn) {

                    $(elem).find('.wrapper-block').each(function (q, block) {
                        if ($(btn).attr('data-nom') == $(block).attr('data-nom')) {
                            $(block).appendTo($(btn));
                        }
                    });

                });

            });
        }
    }

    categorMob();

    $(window).on('scroll resize', function () {
        fuScroll();
        funScrolTop();
        fuMobCloce();
    });

    fuMobCloce();

    function fuMobCloce() {
        if ($(window).width() < 1200) {
            $('.main-menu-li a').click(function () {
                $('.header__bottom').removeClass('active');
                $('.opac').removeClass('active');
            });

            $('.bnt-site').click(function () {
                $('.header__bottom').removeClass('active');
                $('.opac').removeClass('active');
            });
        }
    }

    $('.mob-logo-menu').click(function () {
        $('.header__bottom').toggleClass('active');
        $('.opac').toggleClass('active');
    });

    $('.close-menu').click(function () {
        $('.header__bottom').toggleClass('active');
        $('.opac').toggleClass('active');
    });

    $('.opac').click(function () {
        $('.header__bottom').toggleClass('active');
        $('.opac').toggleClass('active');
    });

    $('.section-product__top').click(function () {
        $(this).toggleClass('active');
        $('.wrapper-btn-categoru').removeClass('active');
        $(this).closest('.section-product__item--right').toggleClass('active');

        if ($(this).hasClass('active') == true) {
            // $(this).closest('.section-product__item--right').find('.wrapper-block').addClass('active');
            $(this).closest('.section-product__item--right').find('.wrapper-btn-categoru').addClass('active');
        } else {
            $(this).closest('.section-product__item--right').find('.wrapper-btn-categoru').removeClass('active');
        }
    });

    $('.maps-btn-adress').click(function () {
        $(this).toggleClass('active');
        $('.maps-btn-maps').removeClass('active');
        $('.map-adress').toggleClass('active');
        $('.icons-maps').removeClass('active');
    });

    $('.maps-btn-maps').click(function () {
        $(this).toggleClass('active');
        $('.maps-btn-adress').removeClass('active');
        $('.map-adress').removeClass('active');
        $('.icons-maps').addClass('active');
    });

    let text = {
        roz: 'Развернуть текст',
        zor: 'Свернуть',
    };

    $('.expand-text').click(function () {
        $('.tow--text').toggleClass('active');
        $(this).toggleClass('active');

        if ($('.expand-text').hasClass('active') == true) {
            $('.expand-text').text(text.zor)
            $('.about-tow .block-donload-sertifcate').addClass('active');
        } else {
            $('.expand-text').text(text.roz)
            $('.about-tow .block-donload-sertifcate').removeClass('active');
        }

    });

    $('.header__bottom--icon').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1000);
    });

});