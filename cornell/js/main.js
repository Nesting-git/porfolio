
'use strict'
$(document).ready(function() {

    // ibg
    function ibg() {
        $.each($('.ibg'), function(index, val) {
            if ($(this).find('img').length > 0) {
                let src_img = $(this).find('img').attr('src');
                $(this).css('backgroundImage', 'url("' + src_img + '")');
            }
        });
    }
    ibg();
    // end ibg

    // попап
    $('.js-btn-popup').click(function(e) {
        e.preventDefault();
        let index_btn_popup = $(this).attr('href');

        $.each($('.js-popup'), function(i, elem) {
            let index_popup = $(elem).attr('data-id-popup');
            index_btn_popup === index_popup ? $(elem).fadeIn(300) : $(elem).fadeOut(300);
        });
    });

    function close_popup() {
        $('.js-popup').fadeOut(300);
    }

    $('.js-popup__close').click(close_popup);

    $('.js-popup').click(function(e) {
        let popup = $('.js-popup__wrapp');
        if (!popup.is(e.target) && popup.has(e.target).length === 0)
            $('.js-popup').fadeOut(300);
    });

    const localHref = location.href;

    if (localHref.indexOf('#assest') != -1) {
        $('.js-popup-ok').fadeIn(300);
    }
    // end попап

    // плавная прокрутка по якорю
    $('a[href^="#"]').click(function() {
        var el = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(el).offset().top
        }, 1000);
        return false;
    });


    // паралакс

    if ($(window).width() > 1200) {
        let $bgScrennBox = document.querySelector('.main-wrapp__bg-img');
        let $planer = document.querySelector('.plane-img');
        window.addEventListener('mousemove', (e) => {
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;
            $bgScrennBox.style.transform = 'translate(-' + x * 30 + 'px, -' + y * 30 + 'px)';
            $planer.style.transform = 'translate(' + x * 20 + 'px,' + y * 20 + 'px)'
        });
    }


    $('.js-item-shadow').each(function(e, elem) {
        if ($(elem).attr('data-box-color').length > 3) {
            $(elem).append('<i style="box-shadow: 0px 0px 35px 20px ' + $(elem).attr('data-box-color') + ';"></i>')
        }
    });

    // mob menu

    $(document).mouseup(function(e) {
        if ($('.header-menu').hasClass('active')) {
            var div = $('.header-menu')
            if (!div.is(e.target) &&
                div.has(e.target).length === 0) {
                $('.header-menu').removeClass('active');
                $('.js-burger-menu-mob').removeClass('active')
            }
        }
    });

    $('.js-burger-menu-mob').click(function() {
        $(this).hasClass('active') ? $(this).removeClass('active') : $(this).addClass('active');
        $('.header-menu').hasClass('active') ? $('.header-menu').removeClass('active') : $('.header-menu').addClass('active')
    });

    $('.header__menu--close').click(function() {
        $('.header-menu').removeClass('active');
        $('.js-burger-menu-mob').removeClass('active')
    });

    if ($(window).width() <= 1200) {
        $('.header-menu__nav ul a').click(() => {
            $('.header-menu').removeClass('active');
            $('.js-burger-menu-mob').removeClass('active')
        });
    }


});
/*кнопка прокрутки вверх*/

const offset = 100;
const scrollUp = document.querySelector('.js-scroll-up');
const scrollUpSvgPath = document.querySelector('.js-scroll-up__path');
const pathLength = scrollUpSvgPath.getTotalLength();

scrollUpSvgPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
scrollUpSvgPath.style.transition = 'stroke-dashoffset 20ms';

// getTop
const getTop = () => window.pageYOffset || document.documentElement.scrollTop;

//updateDashoffset

const updateDashoffset = () => {
    const heigth = document.documentElement.scrollHeight - window.innerHeight;
    const dashoffset = pathLength - (getTop() * pathLength / heigth);

    scrollUpSvgPath.style.strokeDashoffset = dashoffset;
}

// onScroll
window.addEventListener('scroll', () => {
    updateDashoffset();

    getTop() > offset ? scrollUp.classList.add('scroll-up_active') : scrollUp.classList.remove('scroll-up_active');
});

// click
scrollUp.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
});

/*скрол по якорю*/