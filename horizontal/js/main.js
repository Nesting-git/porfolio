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
        let index_btn_popup = $(this).attr('href');

        $.each($('.js-popup'), function (i, elem) {
            let index_popup = $(elem).attr('data-id-popup');
            if (index_btn_popup === index_popup) {
                $(elem).fadeIn(300)
                $('body').addClass('fixed');
            }
        });
    });

    function close_popup() {
        $('.js-popup').fadeOut(300);
        $('body').removeClass('fixed');
    }

    $('.js-popup__close').click(close_popup);

    $('.js-popup').click(function (e) {
        let popup = $('.js-popup__wrapp');
        if (!popup.is(e.target) && popup.has(e.target).length === 0)
            close_popup();
    });

    let locLink = location.href;

    $('.js-popup-ok').each(function (e, elem) {
        if (locLink.indexOf($(elem).attr('data-id-popup')) != -1) {
            $(elem).fadeIn(300);
        }
    });


    // end попап

    // slider action

    let actioSlider = new Swiper('.js-action-swiper', {
        spaceBetween: 30,
        pagination: {
            el: '.js-pagin-col',
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (index + 1) + '</span>';
            },
        },
    });

    actioSlider.on('slideChange', function () {
        stopVideo();
    });

    // start-video
    $('.js-conten-video').click(function () {
        let srcVideo = $(this).find('iframe').attr('src');
        $(this).find('iframe').attr('src', srcVideo + '&autoplay=1');
        $(this).find('.js-top-video').addClass('none');
    });



    $('.js-tabs-btn').click(function (e) {
        e.preventDefault();

        if (!$(this).is('.active')) {
            $('.js-tabs-btn').removeClass('active');
            $(this).addClass('active');

            let dataAt = $(this).attr('href');

            $('.js-slider-baner').removeClass('active');
            $('.js-slider-baner').fadeOut(10);

            $('.js-slider-baner').each(function (e, elem) {
                if (dataAt.includes($(elem).attr('data-baner'))) {
                    $(elem).fadeIn(10);
                }
            });
        }
    });

    $('.js-tabs-btn').click(function () {
        stopVideo();
    });

    function stopVideo() {
        let srcVid = '';
        $('iframe').each(function (e, elem) {
            srcVid = $(elem).attr('src');
            $(elem).attr('src', srcVid.replace('&autoplay=1', ''));
        });
    }


    let swiperReviews = null;
    $('.js-swiper-reviews').each(function () {
        swiperReviews = new Swiper(this, {
            direction: 'horizontal',
            observer: true,
            observeParents: true,
            pagination: {
                el: $(this).find('.js-pagin-nub'),
                type: 'fraction',
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                768: {
                    direction: 'vertical',
                },
            },
        });
    });

    if (swiperReviews != null) {
        swiperReviews.on('slideChange', function () {
            stopVideo();
        });
    }

    function slidesSt() {
        $('.js-btn-vid.swiper-slide-active').trigger('click');
    }

    let swiperRows = null;
    $('.js-reviews-items-slider').each(function () {
        swiperRows = new Swiper(this, {
            direction: 'vertical',
            observer: true,
            observeParents: true,
            slidesPerView: 1,
            slidesPerColumn: 1,
            pagination: {
                el: $(this).closest('.reviews-slider__content').find('.js-pagin-nubs'),
                type: 'fraction',
            },
            navigation: {
                nextEl: '.swiper-button-nexts',
                prevEl: '.swiper-button-prevs',
            },
            breakpoints: {
                320: {
                    direction: 'horizontal',
                },
                768: {
                    slidesPerView: 3,
                },
                992: {
                    slidesPerView: 4,
                },
            },

            on: {
                transitionEnd: slidesSt,
            }
        });
    });


    $('.js-btn-vid').click(function () {
        let atr = $(this).attr('data-vid');

        if (!$(this).hasClass('active')) {
            $('.js-btn-vid').removeClass('active');
            $('.js-conten-video').removeClass('active');
            $('.js-conten-video').each(function (e, elem) {
                if (atr == $(elem).attr('data-con-vid')) {
                    $(elem).addClass('active');
                }
            });
        }


    });


    // прокрутка по якорю (атрибуту)

    $('.js-btn-anchor').click(function (e) {
        e.preventDefault();
        let auchor = $(this).attr('data-btn-auchor');

        $('.js-mobile-menu').removeClass('active');
        $('body').removeClass('fixed');

        $('.js-pos-anchor').each(function (e, elem) {
            if (auchor.indexOf($(elem).attr('data-pos-auchor')) !== -1) {
                $('html, body').animate({
                    scrollTop: $(elem).offset().top
                }, 500);
            }
        });
    });

    // маска номера

    $('.js-phone').mask('+375 (99) 999-99-99');

    // scroll manu

    $(function () {
        let $heaer = $('.header');
        let header_h = ($heaer.height() - $('.header__bot_menu').height()) * -1;

        let conScrool = 0;

        function scrolMenu() {
            let scrolTop = $(window).scrollTop();

            if (scrolTop > 1) {
                $('.header.fixed').css('transform', 'translateY(' + header_h + 'px)');
                $('.wrapper__content').css('paddingTop', header_h * -1 + 'px');
            } else {
                $('.header.fixed').css('transform', 'translateY(' + 0 + 'px)');
                $('.wrapper__content').css('paddingTop', $heaer.height() + 'px');
            }

            if (conScrool < scrolTop) {
                $('.header.fixed').css('transform', 'translateY(' + header_h + 'px)');
            } else {
                $('.header.fixed').css('transform', 'translateY(' + 0 + 'px)');
            }

            conScrool = scrolTop;
        }

        scrolMenu();

        let con = false;

        setTimeout(function () {
            con = true;
        }, 2000);

        function fixMobMenu() {
            if ($(window).width() <= 768) {
                let scrool = $(window).scrollTop();

                if ($('.header-mobile').height() < scrool) {

                    $('.header-mobile__item_rigth').addClass('mob-active');
                } else {
                    $('.header-mobile__item_rigth').removeClass('mob-active');
                }
            }
        }


        $(window).on('scroll', function () {
            if (con) {
                scrolMenu();
            }

            fixMobMenu();

        });
    });

    // откритие под меню по нажатию 

    function closeMenu() {
        $('.js-shved-submenu').fadeOut(100);
        $('.js-btn-menu').removeClass('active');
        $('.js-shved-submenu').removeClass('active');
    }

    $('.close-sub-menu').click(function () {
        closeMenu();
    });

    $('.js-btn-menu').click(function (e) {
        e.preventDefault();

        let href = $(this).attr('href');


        if (!$(this).hasClass('active')) {
            $('.js-btn-menu').removeClass('active');
            $('.js-shved-submenu').fadeOut(100);
            $('.js-shved-submenu').removeClass('active');

            $('.js-shved-submenu').each(function (e, elem) {

                if (href == $(elem).attr('data-id-menu')) {
                    $(elem).fadeIn(300);
                    $(elem).addClass('active');
                }
            });
            $(this).addClass('active');
        } else {
            closeMenu();
        }
    });

    // ------

    $('.js-btn-sub').mouseenter(function () {
        if (!$(this).hasClass('active')) {
            $('.js-btn-sub').removeClass('active');
            $(this).addClass('active');

            let atr = $(this).attr('data-id-block');

            $('.js-it-block').removeClass('active');
            $('.js-sub-block').removeClass('active');

            let attSub = '';

            $('.js-it-block').each(function (e, elem) {
                if (atr == $(elem).attr('data-it-block')) {
                    $(elem).addClass('active');

                    $(elem).find('.js-btn-sub-item').each(function (i, elems) {

                        if ($(elems).hasClass('active')) {
                            attSub = $(elems).attr('data-id-block');
                        }

                    });
                }
            });

            $('.js-sub-block').each(function (e, elem) {
                if (attSub == $(elem).attr('data-it-block')) {
                    $(elem).addClass('active');
                }
            });
        }
    });

    $('.js-btn-sub-item').mouseenter(function () {
        if (!$(this).hasClass('active')) {

            $(this).closest('.js-it-block').find('.js-btn-sub-item').removeClass('active');
            $(this).addClass('active');


            let atr = $(this).attr('data-id-block');

            $('.js-sub-block').removeClass('active');

            $('.js-sub-block').each(function (e, elem) {
                if (atr == $(elem).attr('data-it-block')) {
                    $(elem).addClass('active');
                }
            });

        }
    });

    $(document).mouseup(function (e) {
        let $slosemenu = $('.header__opens-menu');

        if (!$slosemenu.is(e.target) && !$('.js-btn-menu').is(e.target) && $('.js-btn-menu').has(e.target).length == 0 && $slosemenu.has(e.target).length === 0) {
            $('.js-shved-submenu').each(function () {
                if ($(this).is('.active')) {
                    closeMenu();
                }
            });

        }

    });


    // animation

    new WOW().init();

    // ---
    $('.menu-dop-info_close').click(function () {
        $(this).closest('.menu-dop-info').addClass('none');
    });


    // мобильное меню 

    $('.js-btn-m-menu').click(function () {
        $('.js-mobile-menu').addClass('active');
        $('body').addClass('fixed');
    });

    $('.js-close-mob-menu').click(function () {
        $('.js-mobile-menu').removeClass('active');
        $('body').removeClass('fixed');
    });

    $('.js-mob-menu').click(function (e) {
        e.preventDefault();

        if (!$(this).closest('.menu-mobile__item').hasClass('active')) {
            $('.menu-mobile__sub-menu').fadeOut(100);
            $('.menu-mobile__item').removeClass('active');
            $(this).closest('.menu-mobile__item').addClass('active');

            $(this).closest('.menu-mobile__item').find('.menu-mobile__sub-menu').fadeIn(100);
        } else {
            $('.menu-mobile__item').removeClass('active');
            $('.menu-mobile__sub-menu').fadeOut(200);
        }
    })

    $('.js-bnt-accessories').click(function (e) {
        e.preventDefault();
        if (!$(this).closest('.js-sub-accessories').hasClass('active')) {

            $(this).closest('ul').children('.js-sub-accessories').removeClass('active');
            $(this).closest('ul').find('.sub-accessories_ul').fadeOut(1);

            if ($(this).closest('ul').hasClass('menu-mobile__submenu')) {
                $('.sub-accessories_ul').fadeOut(1);
                $('.js-sub-accessories').removeClass('active');
            }

            $(this).closest('.js-sub-accessories').addClass('active');
            $(this).closest('.js-sub-accessories').children('.sub-accessories_ul').fadeIn(1);

        } else {

            if ($(this).closest('ul').hasClass('menu-mobile__submenu')) {
                $('.sub-accessories_ul').fadeOut(1);
                $('.js-sub-accessories').removeClass('active');
            }

            $(this).closest('ul').children('.js-sub-accessories').removeClass('active');
            $(this).closest('ul').find('.sub-accessories_ul').fadeOut(1);
        }
    });


    $('.js-answers-btn').click(function () {

        if (!$(this).closest('.js-answers-item').hasClass('active')) {
            $(this).closest('.js-answers-item').addClass('active');
            $(this).closest('.js-answers-item').find('.js-answers-text').slideDown(200);
        } else {
            $(this).closest('.js-answers-item').removeClass('active');
            $(this).closest('.js-answers-item').find('.js-answers-text').slideUp(200);
        }

    });

    $('.aksessuary-menu__link').click(function (e) {
        e.preventDefault();

        if (!$(this).closest('.js-aksessuary-menu').hasClass('active')) {
            $('.aksessuary-menu__sub-menu').slideUp(200);
            $('.js-aksessuary-menu').removeClass('active');

            $(this).closest('.js-aksessuary-menu').addClass('active');
            $(this).closest('.js-aksessuary-menu').find('.aksessuary-menu__sub-menu').slideDown(200);
        } else {
            $('.js-aksessuary-menu').removeClass('active');
            $('.aksessuary-menu__sub-menu').slideUp(200);
        }

    });

    // продукт 

    let galleryThumbs = new Swiper('.gallery-thumbs', {
        spaceBetween: 10,
        slidesPerView: 'auto',
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
    });

    // if (galleryThumbs.length > 1) {
    //     console.log(galleryThumbs[0])
    // }

    // console.log(galleryThumbs.$el)

    $('.js-shved-swiper-product').each(function (e, elem) {
        let swiperProduct = new Swiper($(elem), {
            loop: true,
            observer: true,
            observeParents: true,
            navigation: {
                nextEl: $(elem).closest('.shved__product-img__images').find('.shved-swiper__arrow-next'),
                prevEl: $(elem).closest('.shved__product-img__images').find('.shved-swiper__arrow-prev'),
            },
            // thumbs: {
            //     swiper: galleryThumbs,
            // }
        });
    });




    $('[data-fancybox="gallery"]').fancybox({
        buttons: [
            'slideShow',
            'share',
            'zoom',
            'fullScreen',
            'download',
            'close'
        ],
        gutter: 10,
        idleTime: 3,
        animationEffect: "zoom-in-out",
        animationDuration: 600,
        transitionDuration: 400,
    });


    // Быстрый просмотр

    function closeQuick() {
        $('.js-btn-quick').removeClass('active');
        $('.js-shved-quick').fadeOut(10);
        $('.js-shved-quick').removeClass('active');
        $('body').removeClass('foxed');
    }

    $('.shved__quick_close').click(closeQuick);

    let ccc = true;

    $('.js-btn-quick').click(function () {

        if (!$(this).is('.active')) {

            closeQuick();

            let ths = $(this)

            let id_quick = $(this).attr('data-id-quick');

            $('.js-shved-quick').each(function (e, elem) {
                if (ccc == true) {
                    if (id_quick == $(elem).attr('data-quick')) {
                        $(elem).fadeIn(10);
                        $('.js-btn-quick').removeClass('active')
                        ths.addClass('active');
                        if ($(window).width() <= 992) {
                            $('body').addClass('fixed');
                        }
                        ccc = false;
                        return;
                    } else {
                        $('.js-btn-quick').removeClass('active');
                    }
                }
            });

            ccc = true;

        }
    });

    if ($(window).width() <= 992) {
        $('.js-shved-quick').removeClass('active');
        $('.js-btn-quick').removeClass('active');
    }

    /*Выберите себе любой подарок*/
    let aa = true,
        bbb = true;

    function sliderChan() {
        if ($(window).width() > 992 && aa == true) {
            let $el = $('.section-gift__swiper-slider.swiper-slide-active').find('.js-btn-quick');
            $('.js-shved-quick').each(function (e, elem) {

                if (bbb == true) {
                    if ($el.attr('data-id-quick') == $(elem).attr('data-quick')) {

                        $('.js-btn-quick').removeClass('active');
                        $('.js-shved-quick').removeClass('active');
                        $('.js-shved-quick').fadeOut(10);

                        $el.addClass('active');

                        $(elem).fadeIn(10);
                        bbb = false;
                        return;

                    } else {
                        $('.js-btn-quick').removeClass('active');
                        $('.js-shved-quick').fadeOut(10);
                    }
                }
            });
            bbb = true;
        }
    }

    let sliderGift = null;

    $('.js-section-gift-swiper').each(function () {
        sliderGift = new Swiper($(this), {
            spaceBetween: 15,
            slidesPerView: 1,
            slidesPerColumn: 1,
            observer: true,
            loop: true,
            observeParents: true,
            navigation: {
                nextEl: $(this).closest('.js-row-gift').find('.section-gift-btn-slide-next'),
                prevEl: $(this).closest('.js-row-gift').find('.section-gift-btn-slide-prev'),
            },

            breakpoints: {
                1024: {
                    slidesPerView: 4,
                },
                768: {
                    slidesPerView: 3,
                },
                500: {
                    slidesPerView: 2,
                },
            },

            on: {
                transitionEnd: sliderChan,
            }

        });
    });


    // меню сайдбар

    $('.js-mob-btn-sidebar').click(function (e) {
        e.preventDefault();
        $('.shved-aksessuary__alide').addClass('active')
        $('body').addClass('fixed');
    });

    $('.js-alide-close-mob').click(function () {
        $(this).closest('.shved-aksessuary__alide').removeClass('active');
        $('body').removeClass('fixed');
    });


    /*js-swiper-picking слайдер*/

    let swiperPicking = null;

    $('.js-swiper-picking').each(function () {
        swiperPicking = new Swiper($(this), {
            slidesPerView: 3,
            slidesPerColumn: 1,
            observer: true,
            loop: true,
            spaceBetween: 30,
            observeParents: true,
            navigation: {
                nextEl: $(this).closest('.js-picking-closes').find('.button-picking-next'),
                prevEl: $(this).closest('.js-picking-closes').find('.button-picking-prev'),
            },
        });
    });

    /*на карте*/

    $('.js-btn-ite-detal').click(function (e) {
        e.preventDefault();

        if (!$(this).closest('.item-detal-cit').hasClass('active')) {
            $(this).closest('.item-detal-cit').addClass('active').find('.js-item-detal-open').slideDown();
        } else {
            $(this).closest('.item-detal-cit').removeClass('active').find('.js-item-detal-open').slideUp();
        }

    });

    function fontMaps() {
        let $divMaps = $('.shved__delivery');

        if ($(window).scrollTop() >= $divMaps.offset().top && $(window).scrollTop() < $divMaps.offset().top + $divMaps.height()) {
            setTimeout(function () {
                $('.maps__item').not('.mao-ok-text').find('.maps__item_city').fadeOut(300);
            }, 3000);
        }
    }

    $('.delivery-methods').click(function () {

        if (!$(this).hasClass('active')) {
            $(this).addClass('active');
            $(this).closest('.map-del-city').find('.map-del-city__wrapp').fadeIn(300);
        } else {
            $(this).removeClass('active');
            $('.map-del-city__wrapp').fadeOut(300);
        }

    });

    $('.items__city-m').click(function (e) {
        let tr = $(this).attr('href');
        
        $('.table-days tr').removeClass('active');
        $('.paragraph__items').removeClass('active');

        $(tr).addClass('active');
    });

    $(window).on('scroll', function () {
        fontMaps();
    });
});