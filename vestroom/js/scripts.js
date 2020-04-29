'use strict'
$(function () {


    // определение пути img для слайдера
    $('.js-img-slider').each(function (j, elem) {
        let imgSrc = $(elem).attr('src');
        $(elem).closest('.js-bg-slider').css('backgroundImage', `url(${imgSrc})`);
    });

    // слайдер на главной
    let mainSlider = new Swiper('.js-main-slider', {
        slidesPerView: 1,
        loopFillGroupWithBlank: true,
        loop: true,
        effect: 'fade',
        speed: 500,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            dynamicBullets: true,
        },
        autoplay: {
            delay: 5000,
        },
    });

    // слайдер  категорий
    let categorySlider = new Swiper('.js-category-slider', {
        slidesPerView: 1,
        spaceBetween: 15,
        loopFillGroupWithBlank: true,
        loop: true,
        // autoplay: {
        //     delay: 5000,
        // },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            420: {
                slidesPerView: 2,
            },
            640: {
                slidesPerView: 3,
            },
            1024: {
                slidesPerView: 4,
            },
            1300: {
                slidesPerView: 5,
            },
        }
    });

    // popup
    function popupAnimate(popupid) {
        $(popupid).css('display', 'flex');
        $(popupid).animate({
            opacity: 1,
        }, 200);
    }

    $('.js-btn-popup').click(function (e) {
        e.preventDefault();
        closePopup();

        let idBtnPopup = $(this).attr('data-btn-popup');

        $('.js-popup').each(function (e, elem) {
            let ipPopup = $(elem).attr('data-id-popup');
            if (idBtnPopup == ipPopup)
                popupAnimate($(elem));
        });
    });

    function closePopup() {
        $('.js-popup').css('display', 'none');
        $('.js-popup').animate({
            opacity: 0,
        }, 100);
    }

    $(document).mouseup(function (e) {
        let popupWrapp = $('.popup-wrapp');

        if (!popupWrapp.is(e.target) && popupWrapp.has(e.target).length === 0)
            closePopup();
    });

    $('.popup-close').click(closePopup);

    // событие изменение ширины и прокрутка
    $(window).on('resize, scroll', function () {
        starTop();
        pageHeight();
        fixedArticle();
        searchMob();
        mobMenu();
    });

    function starTop() {
        let top = $(window).scrollTop();
        scrTop(top);
    }

    // прокрутка верх
    function siteTop() {
        $('html, body').animate({
            scrollTop: 0,
        }, 500);
    }

    $('.js-scroll-top').click(siteTop);

    function scrTop(scroll_top) {
        let btnScroll = $('.js-scroll-top');

        if (scroll_top > 200)
            btnScroll.removeClass('none');
        else
            btnScroll.addClass('none');
    }

    // seo blcok
    let obj = {
        startBtn: 'Показать полностью...',
        dopBtn: 'Скрить',
    }

    $('.js-btn-seo').click(function () {
        $(this).toggleClass('active');

        if ($(this).hasClass('active')) {
            $(this).html(obj.dopBtn);
            $('.js-section-seo').removeClass('no-open');

        } else {
            $(this).html(obj.startBtn);
            $('.js-section-seo').addClass('no-open');
        }

    });

    // cookie

    $(function () {

        var block = getcookie("adb");
        if (block == "yes") {
            $('.js-cookie').addClass('none');
        }
        else {
            $('.js-cookie').removeClass('none');
        }

        function setcookie(a, b, c) {
            if (c) {
                var d = new Date();
                d.setDate(d.getDate() + c);
            }

            if (a && b) document.cookie = a + '=' + b + (c ? '; expires=' + d.toUTCString() : '');
            else
                return false;
        }

        function getcookie(a) {
            var b = new RegExp(a + '=([^;]){1,}');
            var c = b.exec(document.cookie);

            if (c) c = c[0].split('=');
            else
                return false;
            return c[1] ? c[1] : false;
        }

        setcookie("adb", "yes", 300) // Cтавим кук (300 - число действующих дней

    });

    $('.close-cookie').click(function () {
        $('.js-cookie').addClass('none');
    });

    // min-height

    function pageHeight() {
        let pageheight = $(window).height();
        let heightWrapper = $('.body__wrapper').height();
        let fotmarg = pageheight - heightWrapper;

        if (fotmarg > 0)
            $('.footer').css('marginTop', "" + fotmarg + "px");
    }

    pageHeight();

    // фиксация блока артикле
    function fixedArticle() {
        let max_wid = $(window).width();
        if ($('.js-fixed-article').length && max_wid > 1200) {
            let articleTop = $('.js-fixed-article').offset().top;
            if (articleTop >= articleTop) {
                $('.js-fixed-article').css({
                    'position': 'sticky',
                    'top': '75px',
                });

            }
        }
    }

    fixedArticle();

    function searchMob() {
        let maxWidth = $(window).width();

        if (maxWidth <= 1300) {
            $('.js-header-search').removeClass('active');
        }
    }

    // mobmenu
    function mobMenu() {
        let maxWidth = $(window).width();
        let menu = $('.header__wrapp-main-menu');

        if (maxWidth <= 1024) {

            if (!menu.hasClass('.menu-mobile')) {
                menu.append('<i class="close-menu"></i>')

                menu.find('.main-menu__item').each(function (e, elem) {
                    if ($(elem).find('.sub-menu-block').length) {
                        $(elem).append('<span class="btn-sub-menu"><i class="fas fa-chevron-right"></i></span>');
                    }
                });

            }
            menu.addClass('.menu-mobile');
        }
    }

    mobMenu();

    $('.burger-menu').click(function () {
        $('.header__wrapp-main-menu').toggleClass('open');
        $('body').toggleClass('fixed');
        $('.opas').removeClass('none');
    });

    function closeMenu() {
        $('.header__wrapp-main-menu').removeClass('open');
        $('.opas').addClass('none');
        $('body').toggleClass('fixed');
    }

    $('.close-menu').click(closeMenu);
    $('.opas').click(closeMenu);

    $('.btn-sub-menu').click(function () {
        // $('.main-menu__item').removeClass('open');

        if (!$(this).closest('.main-menu__item').hasClass('open')) {
            $('.main-menu__item').removeClass('open');
            $(this).closest('.main-menu__item').addClass('open');
        } else {
            $('.main-menu__item').removeClass('open');
        }

    });

    function startFotmenu() {
        let maxWidth = $(window).width();

        if (maxWidth <= 600) {
            $('.footer__items-same .h3-site').click(function (e) {
                e.preventDefault();

                if (!$(this).closest('.footer__items-same').hasClass('active')) {
                    $(this).closest('.footer__items-same').addClass('active');
                    $(this).next('.footer__menu').show(200);
                } else {
                    $(this).closest('.footer__items-same').removeClass('active');
                    $(this).next('.footer__menu').hide(200);
                }
            });
        }
    }

    startFotmenu();

    // avatat
    $('.js-avatar-file-img').on('change', function () {

        function encodeImage(element) {

            let file = element.files[0];
            let reader = new FileReader();

            reader.onloadend = function () {
                $('.avatar__img img').attr('src', reader.result);
            }

            reader.readAsDataURL(file);
        }

        encodeImage(document.querySelector('.js-avatar-file-img'));

    });

    // индикатор прокрутки
    $(window).on('scroll resize', function () {
        let winScroll = $(document).scrollTop();
        let progress = winScroll / (($(document).height() - $(window).height()) / 100);
        $('.progress__bar').css('width', '' + progress + '%');
    });

    // validation

    let valid = 0;

    function validateForm(forma) {

        valid = 0;

        if (forma.find('.error-text').length > 0) {
            forma.find('.error-text').remove(); // удаление полей ошибок
        }

        let name_input = forma.find('input[name="name"]');
        let regular_name = /^[A-Z]{1}[a-z]{1,15}$|(^[А-Я-ЁЇІЄҐ]{1}[а-я-яёїієґ]{1,15}$)/;

        if (name_input.length > 0) {
            if (regular_name.test(name_input.val())) {
                name_input.removeClass('error');
            } else {
                name_input.closest('div').before('<div class="error-text">Введите корректное Имя. Например, Александр</div>');
                name_input.addClass('error');
                valid++;
            }
        }

        let surname_input = forma.find('input[name="surname"]');
        let regular_surname = /^[A-Z]{1}[a-z]{1,25}$|(^[А-Я-ЁЇІЄҐ]{1}[а-я-яёїієґ]{1,25}$)/;

        if (surname_input.length > 0) {
            if (regular_surname.test(surname_input.val())) {
                surname_input.removeClass('error');
            } else {
                surname_input.closest('div').before('<div class="error-text">Введите корректную фамилию. Например, Слюсарчук</div>');
                surname_input.addClass('error');
                valid++;
            }
        }

        let email_import = forma.find('input[name="email"]');
        let regular_email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

        if (email_import.length > 0) {
            if (regular_email.test(email_import.val())) {
                email_import.removeClass('error');
            } else {
                email_import.closest('div').before('<div class="error-text">Введите корректную електроную почту</div>');
                email_import.addClass('error');
                valid++;
            }
        }

        let password_import = forma.find('input[name="password"]');
        let regular_password = 6;

        if (password_import.length > 0) {
            if (regular_password <= password_import.val().length) {
                password_import.removeClass('error');
            } else {
                password_import.closest('div').before('<div class="error-text">Пароль должен содердать не менее 6 символов</div>');
                password_import.addClass('error');
                valid++;
            }
        }

        if (valid > 0) {
            return true;
        } else {
            return false
        }
    }

    $('.js-validate-form').on('submit', function (e) {
        let forma = $(this).closest('.js-validate-form');
        if (validateForm(forma)) {
            e.preventDefault();
        }
    });

    // поиск по сайту
    $(function (e) {
        let header_search = $('.js-header-search');

        $('.js-search-btn').click(function (e) {
            if (!header_search.hasClass('active')) {
                e.preventDefault();
                header_search.addClass('active');
            } else {
                if (search_receive(e) == true) {
                    e.preventDefault();
                }
            }
        });

        function search_receive(e) {
            let input_search = $('.form_search__search').val();
            let string_search = '';

            if (input_search.length > 0) {
                string_search = input_search.trim();
            } else {
                return true;
            }

            // string_search получаем уже без пробелов
        }

        $(document).mouseup(function (e) {
            if (!header_search.is(e.target) && header_search.has(e.target).length === 0)
                header_search.removeClass('active');
        });

    });

});