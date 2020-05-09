'use strict'

$(document).ready(function () {

    // ibg
    function ibg() {
        $.each($('.ibg'), function (index, val) {
            if ($(this).find('img').length > 0) {
                let src_img = $(this).find('img').attr('src');
                $(this).css('backgroundImage', 'url("' + src_img + '")');
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
        let index_btn_popup = $(this).attr('href');

        $.each($('.js-popup'), function (i, elem) {
            let index_popup = $(elem).attr('data-id-popup');
            index_btn_popup === index_popup ? $(elem).fadeIn(300) : $(elem).fadeOut(300);
        });
    });

    function close_popup() {
        $('.js-popup').fadeOut(300);
    }

    $('.js-popup__close').click(close_popup);

    $('.js-popup').click(function (e) {
        let popup = $('.js-popup__wrapp');
        if (!popup.is(e.target) && popup.has(e.target).length === 0)
            $('.js-popup').fadeOut(300);
    });
    // end попап

    $('.search-btn').click(function (e) {
        e.preventDefault();
        if ($(window).width() > 640) {
            $('.search-box').toggleClass('active');
        } else {
            $('.js-menu-search').toggle(200);
            $('body').toggleClass('fixed');
            $('.js-search-input').focus();
        }
    });

    $(document).click(function (e) {
        let div = $('.search-box');
        if (!div.is(e.target) && div.has(e.target).length === 0) {
            $('.search-box').removeClass('active');
        }
    });

    $('.js-closes-search').click(function () {
        $('.js-menu-search').toggle(300);
        $('body').removeClass('fixed');
    });

    // слайдер

    let mainSviper = new Swiper('.js-main-swiper', {

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        loop: true,
    });

    $('.js-search-input').on('input', function () {
        if ($(this).val().length > 0) {
            $('.rapper-search__clear').addClass('active');
        } else {
            $('.rapper-search__clear').addClass('active');
        }
    });

    $('.rapper-search__clear').click(function () {
        $('.js-search-input').val('');
        $(this).removeClass('active');
    });

    let cons = true;

    function start_slide() {
        if ($(window).width() <= 640 && cons == true) {
            $('.header__bottom ul').slick({
                arrows: false,
                dots: false,
                variableWidth: true,
                infinite: false,
                swipeToSlide: true,
            });

            $('.js-mob-slider').slick({
                arrows: true,
                dots: false,
                variableWidth: true,
                infinite: true,
                prevArrow: $('.product-arrow-prev'),
                nextArrow: $('.product-arrow-next'),
                swipeToSlide: true,
            });

            let href = location.href;

            $('.js-posit-slider').find('a').removeClass('active');

            $('.js-posit-slider').each(function (e, elem) {
                if (href.includes($(elem).attr('data-posit'))) {
                    $('.header__bottom ul').slick('slickGoTo', e, true);
                    $(elem).find('a').addClass('active');
                }
            });

            cons = false;
        }
    }

    start_slide();

    function iframe() {
        let iframe = $('.section-contact__left iframe');
        iframe.css('height', iframe.width() + 'px')
    }

    iframe();

    $(window).on('resize', function () {
        start_slide();
        iframe();
    });

    $('.js-burger-menu').click(function () {
        $(this).toggleClass('active');
        $('body').toggleClass('fixed');
        $('.js-mobile-menu').toggle(300);
    });

    let scroll = 0, dop_top = 0, consa = true, consb = true;

    function getInternetExplorerVersion() {
        var rv = -1;
        if (navigator.appName == 'Microsoft Internet Explorer') {
            var ua = navigator.userAgent;
            var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
            if (re.exec(ua) != null)
                rv = parseFloat(RegExp.$1);
        }
        else if (navigator.appName == 'Netscape') {
            var ua = navigator.userAgent;
            var re = new RegExp("Trident/.*rv:([0-9]{1,}[\.0-9]{0,})");
            if (re.exec(ua) != null)
                rv = parseFloat(RegExp.$1);
        }
        return rv;
    }


    function scrols() {
        let div = $('.js-product-stisks');
        let activScrol = $(window).scrollTop();
        let d_h = 0, explow = false;;
        let h_w = $(window).height();
        let b_h = $('.js-product-stisks').height();


        if (h_w > b_h) {
            d_h = $('.js-product-stisks-1').height();
            explow = true;
        } else {
            d_h = $('.js-product-stisks').height();
            explow = false;
        }

        d_h -= 15;


        if (getInternetExplorerVersion() !== -1) {

            if (explow == true) {
                div.css('position', 'fixed').removeClass('product-stisks').addClass('product-stisks-ex');
            }

            if (activScrol < 184) {
                let vv = (184 - activScrol);
                div.css('top', vv + 'px');
                console.log(vv)
            } else {
                div.css('top', 0 + 'px');
            }

        } else {
            if (activScrol >= scroll) {

                if (consb == true) {
                    dop_top = activScrol;
                    consb = false;
                }

                let ras_top = dop_top + d_h;

                if (ras_top <= activScrol) {
                    $('.js-product-stisks').css('top', '-' + d_h + 'px');
                } else {
                    let bb = (activScrol + d_h) - ras_top;
                    $('.js-product-stisks').css('top', '-' + bb + 'px');
                }

                if (activScrol <= 187) {
                    $('.js-product-stisks').css('top', '-' + d_h + 'px');
                }

                consa = true;
            } else {

                if (consa == true) {
                    dop_top = activScrol;
                    consa = false;
                }

                let ras = dop_top - d_h;

                if (ras >= activScrol) {
                    $('.js-product-stisks').css('top', 20 + 'px');
                } else {
                    let aaa = ras - activScrol;
                    $('.js-product-stisks').css('top', aaa + 'px');
                }

                if (activScrol <= d_h) {
                    $('.js-product-stisks').css('top', 0 + 'px');
                }

                consb = true;

            }
        }



        scroll = activScrol;
    }

    scrols();


    $(window).on('scroll', function () {
        scrols();
    });

});





