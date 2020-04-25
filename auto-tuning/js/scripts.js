'use strict'

$(function () {

    // main slider
    $('.js-main-slider').slick({
        dots: true,
        slidesToShow: 1,
        appendDots: $('.main-slider-dots'),
        appendArrows: $('.main-slider__arrow'),
        autoplay: true,
        autoplaySpeed: 4000,
    });

    // slider category
    $('.js-news-slider').slick({
        lidesToScroll: 1,
        slidesToShow: 4,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    // slider brains
    $('.js-brands-slider').slick({
        lidesToScroll: 1,
        slidesToShow: 6,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                }
            },
        ]
    });

    function fuResCheat() {
        if ($(window).width() < 768) {
            let aa = $('.header-search').html();
            $('.header__bottom').append(aa);

            $('.submenu-mobile').append('<a href="#request-popup__mobile" class="mobile-link mobactive popup-content">Заказать звонок</a>');

            $('.header__bottom--row').prepend('<h2 class="titleCatalog-top-mob">Каталог</h2>');

            $('.margin-fot-list').click(function () {
                $(this).toggleClass('active');
            });

        }
    }

    fuResCheat();

    // собитие прокрутка
    $(document).on('resize scroll', function () {
        menuSticking();
        sticking();
        // fuResCheat();
    });

    // фиксация блока оптаты
    function sticking() {

        if ($('body').find('.decor-product').length > 0) {
            if ($('.decor-row').offset().top <= $(window).scrollTop() && $('.btn-to-fixed').hasClass('active') == true) {
                $('.decor-product').addClass('sticky');
            } else {
                $('.decor-product').removeClass('sticky');
            }
        }

    }

    let strings = {
        defFixed: 'Зафиксировать при скролле',
        nexFixed: 'Cнять фиксацию',
    };

    sticking();

    $('.btn-to-fixed').click(function () {
        $(this).toggleClass('active');
        $(this).hasClass('active') ? $(this).text(strings.nexFixed) : $(this).text(strings.defFixed)
        sticking();
    });

    // прилипание меню
    function menuSticking() {
        if (1 < $(window).scrollTop()) {
            $('.header').addClass('fixed');
            $('.header__top').hide(500);
            $('.header__bottom').hide(500);
        } else {
            $('.header').removeClass('fixed');
            $('.header__top').show(500);
            $('.header__bottom').show(500);
        }

        $('.burger-cat-scroll').removeClass('active');
        $('body').removeClass('active');

    }

    $('.burger-cat-scroll').click(function () {
        $(this).toggleClass('active');
        $('.header__bottom').toggle(200);
        $('body').toggleClass('active');
    });

    menuSticking();

    // попап
    $('.popup-content').magnificPopup({
        type: 'inline'
    });

    $(function () {
        if (document.location.href.indexOf('#request-popup__thanks') > 0) {
            $.magnificPopup.open({
                items: { src: '#request-popup__thanks' },
                type: 'inline'
            });
        }
    });

    $('.js-close-popup').click(function (e) {
        e.preventDefault();
        $.magnificPopup.close();
    });

    // роскритие сео текста
    let startText = $('.btn-seo-text').text();
    $('.btn-seo-text').click(function () {
        $('.page-text__row').toggleClass('open');
        $(this).toggleClass('active');

        if ($(this).hasClass('active')) {
            $(this).text('Скрыть');
        } else {
            $(this).text(startText);
        }

    });

    // ползунок
    $(function () {

        let min = 2000;
        let max = 8000;

        let MaxNumbemr = 50000; // максимаьная цена
        let MinNumber = 1; // минимальная цена

        $('.form-filter').validate({
            rules: {
                input_number: {
                    number: true,
                    min: MinNumber,
                    max: MaxNumbemr,
                }
            }
        });


        $(".slider-range").slider({
            range: true,
            min: MinNumber,
            max: MaxNumbemr,
            values: [min, max],
            slide: function (event, ui) {
                $('.js-filter-min').val(ui.values[0]);
                $('.js-filter-max').val(ui.values[1]);
            }
        });

        $('.js-filter-min').val($(".slider-range").slider("values", 0));
        $('.js-filter-max').val($(".slider-range").slider("values", 1));

        $('.submit-filter-price').click(function (e) {
            e.preventDefault();

            let minNum = +$('.js-filter-min').val();
            let maxNum = +$('.js-filter-max').val();

            if (minNum > maxNum) {
                minNum = maxNum;
                $('.js-filter-min').val(minNum);
            }

            if (maxNum > MaxNumbemr) {
                maxNum = MaxNumbemr;
                $('.js-filter-max').val(maxNum);
            }

            if (minNum > maxNum) {
                maxNum = minNum;
                $('.js-filter-mmax').val(maxNum);
            }

            $(".slider-range").slider('values', 0, minNum);
            $(".slider-range").slider('values', 1, maxNum);

        });

    });

    // открыть доп коментарий
    $('.checkout-coments-top').click(function () {
        $(this).hide(50);
        $('.checkout-coments-textarea').show(300);
    });

    // попап картинки
    $('.image-popup-zoom').magnificPopup({
        type: 'image',
        zoom: {
            enabled: true,
            duration: 300
        }
    });


    //card slider
    $('.js-card_slic-top').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.js-card-img-slick',
    });

    $('.js-card-img-slick').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.js-card_slic-top',
        dots: false,

        focusOnSelect: true
    });

    // переключение категорий в товаре
    function funCategorus(elem) {
        $('.information-items').removeClass('active');
        $('.information-items').each(function (i, elems) {
            if (elem.attr('data-items') == $(elems).attr('data-items')) {
                $(elems).addClass('active');
            }
        });

    }

    $('.js-categories__bnt').click(function (e) {
        e.preventDefault();
        $('.js-categories__bnt').removeClass('active');
        $(this).addClass('active');

        funCategorus($(this));
    });


    $('.deliver-card__top').click(function () {

        if ($(this).hasClass('active') == false) {
            $('.deliver-card__top').removeClass('active');
            $(this).addClass('active');
            $('.wrapper-row_information--right .deliver-card-wrapper').hide(300);
        } 
    
        if ($(this).hasClass('active') == true) {
            $(this).closest('.deliver-card').find('.deliver-card-wrapper').show(300);
        }

    });

    // валидация формы заказать звонок
    $(function () {

        $('.form-request').validate({
            rules: {
                requestaName: {
                    required: true,
                },
                requestaMob: {
                    required: true,
                },
            },
            messages: {
                requestaName: "Введите имя",
            }
        });

        $('.input-request[name="requestaMob"]').mask("+380  999999999");

    });

    // валидация формы оформление заказа
    $(function () {

        $('.checkout-form').validate({
            rules: {
                heckoutForm_name: "required",
                heckoutForm_mob: "required",
                heckoutForm_city: "required",
                heckoutForm_adres: "required",
                heckoutForm_email: {
                    email: true,
                },
            },
            messages: {
                heckoutForm_name: "Введите имя",
                heckoutForm_city: "Введите город",
                heckoutForm_adres: "Ведите адрес доставки",
            }
        });

        $('.checkout-form__input[name="heckoutForm_mob"]').mask("+380  999999999");

    });

    // валиlация формы поиска
    $('.form-search').validate({
        rules: {
            inputSearch: "required"
        },
        messages: {
            inputSearch: "Введите то, что, вы хотите найти",
        }
    });

    // валидация формы добавить отзыв
    $(function () {

        $('.reviews-form').validate({
            rules: {
                requestaName: "required",
                requestaEmail: {
                    required: true,
                    email: true,
                },
                textareaComents: "required",
            },
            messages: {
                requestaName: "Введите имя",
                equestaEmail: "Введите почту",
                textareaComents: "Напишите отзыв",
            }
        });

        function random(min, max) {
            return Math.round(Math.random() * (max - min) + min);
        }

        let numRandom = random(100, 999);

        $('.js-num-random').text(numRandom);

    });

    // 
    $(function () {

        $('.poput_basket-form').validate({
            rules: {
                requestaName: {
                    required: true,
                },
                requestaMob: {
                    required: true,
                },
            },
            messages: {
                requestaName: "Введите имя",
            }
        });

        $('.input-request[name="requestaMob"]').mask("+380  999999999");

    });

    // прокрутка по якорю
    $('a[href^="#"]').click(function (e) {
        let el = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(el).offset().top
        }, 1000);
        e.preventDefault();
    });

    $('.btn-mob-filter').click(function (e) {
        e.preventDefault();
        $('.page-catalog__sidebar').toggleClass('active');
        $('.fon-opac').addClass('active');
        $('.fon-opac').addClass('btn-close-fil');
        $('body').toggleClass('active');
    });

    $('.fon-opac').click(function () {
        $('.fon-opac').removeClass('active');
        $('.page-catalog__sidebar').removeClass('active');
        $('body').toggleClass('active');
    });

    $('.page-catalog__sidebar ').append('<i class="filter-close filter-close-filter"></i>');


    $('.filter-close-filter').click(function () {
        $('.fon-opac').removeClass('active');
        $('.page-catalog__sidebar').removeClass('active');
        $('body').toggleClass('active');
    });

    $(window).resize(function () {
        menuStart();
    });

    menuStart();

    $(function () {
        if (+$(window).width() <= 768) {

            let menuTop = $('.header__top').html();
            $('.header__bottom').append(`<div class="dop-menu-mob"> ${menuTop} </div>`);

            $('.main-submenu-li').each(function (i, elem) {
                if ($(elem).find('.submenu-sub').length == 0) {
                    $(elem).find('.icon-menu-arow').addClass('none');
                }
            });

        }
    })

    $('.header__bottom').append('<i class="filter-close filter-close-menu"></i>');

    function menuStart() {

        if (+$(window).width() <= 768) {

            $('.mein-menu__li .icon-menu-arow').click(function () {
                $('.mein-menu__li').removeClass('active');
                $('.main-submenu-li').removeClass('active');
                $(this).closest('.mein-menu__li').addClass('active');
            });

            $('.main-submenu-li .icon-menu-arow').click(function () {
                $('.main-submenu-li').removeClass('active');
                $(this).closest('.main-submenu-li').addClass('active');
            });
        }

    }

    $('.burger-cat-scroll').click(function () {
        $('.header__bottom').addClass('active');
        $('.menu-opac').addClass('active');
        $('body').toggleClass('active');
    });

    $('.filter-close-menu').click(function () {
        $('.menu-opac').removeClass('active');
        $('.header__bottom').removeClass('active');
        $('.burger-cat-scroll').removeClass('active');
        $('body').toggleClass('active');
    });

    $('.menu-opac').click(function () {
        $('.menu-opac').removeClass('active');
        $('.header__bottom').removeClass('active');
        $('.burger-cat-scroll').removeClass('active');
        $('body').toggleClass('active');
    });

    $('.mobile-search').click(function (e) {
        e.preventDefault();
        $('.search-block').toggleClass('active');
    });

});