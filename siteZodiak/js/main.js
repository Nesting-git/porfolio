
'use strict'
$(document).ready(function () {

    /*попап*/
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

    /*добавление стрелочек к меню*/

    let domString = '<i class="arrow-menu"></i>';

    $('.js-menu-list-item').each(function () {
        if ($(this).children('.header-menu__sub-list').length > 0) {
            $(this).children('.header-menu__list--link').append(domString);
        }
    });

    $('.js-sub-list-item').each(function () {
        if ($(this).children('.header-menu__subsidiary').length > 0) {
            $(this).children('.header-menu__sub-list--link').append(domString);
        }
    });

    $('.js-sub-list-item').hover(
        function () {
            $(this).children('.header-menu__subsidiary').fadeIn(10);
        },
        function () {
            $(this).children('.header-menu__subsidiary').fadeOut(10);
        },
    );

    $('.js-menu-list-item').hover(
        function () {
            $(this).children('.header-menu__sub-list').fadeIn(200);
        },
        function () {
            $(this).children('.header-menu__sub-list').fadeOut(200);
        },
    );

    /*Цены на услуги*/

    $('.js-main-prices').click(function () {
        if (!$(this).closest('.js-wr-prices').hasClass('active')) {
            $(this).closest('.js-wr-prices').addClass('active');
            $(this).closest('.js-wr-prices').find('.js-wr-prices').slideDown(400);
        } else {
            $(this).closest('.js-wr-prices').removeClass('active');
            $(this).closest('.js-wr-prices').find('.js-wr-prices').slideUp(400);
        }
    });

    /* мобильное меню*/

    const activeBurger = "burger_active";
    const activeMobMenu = "mobile-menu_active";
    const $menuMobile = $(".js-mobile-menu");
    const $body = $('body');


    $('.js-burger-menu').click(function () {
        if (!$(this).hasClass(activeBurger)) {
            $(this).addClass(activeBurger);
            $menuMobile.addClass(activeMobMenu);
            $body.addClass('active_body');
        } else {
            $(this).removeClass(activeBurger);
            $menuMobile.removeClass(activeMobMenu);
            $body.removeClass('active_body');
        }
    });

    function closesMenu() {
        $menuMobile.removeClass(activeMobMenu);
        $('.js-burger-menu').removeClass(activeBurger);
        $body.removeClass('active_body');
    }

    $('.js-menu-close').click(function () {
        closesMenu();
    });

    $('.js-btn-sub').click(function () {
        if (!$(this).closest('li').hasClass('active')) {
            $(this).closest('li').addClass('active');
            $(this).closest('li').children('.mobile-menu__sub-list').slideDown(300);
        } else {
            $(this).closest('li').removeClass('active');
            $(this).closest('li').children('.mobile-menu__sub-list').slideUp(300);
        }
    });

    let $window = $(window);

    function closeMenu() {
        const $mobMenuCon = $('.mobile-menu__content');

        $(document).mouseup(function (e) {
            if (!$mobMenuCon.is(e.target) && $mobMenuCon.has(e.target).length === 0) {
                closesMenu();
            }
        });
    }

    $window.on('load resize', function () {
        if ($window.width() <= 768) {
            closeMenu();
        }
    });

    /*количество часов*/

    {
        let colHouse = 1;
        const $numberHouse = $('.js-number-col');
        const $stringHouse = $('.js-hous');

        function hours(col) {
            $numberHouse.text(col);

            if (col == 1) {
                $stringHouse.text('час');
            } else if (col == 2) {
                $stringHouse.text('часа');
            } else if (col >= 5) {
                $stringHouse.text('часов');
            }
        }

        $('.js-hours-min').click(function () {
            if (colHouse >= 2) {
                hours(--colHouse);
            }
        });

        $('.js-hours-plus').click(function () {
            hours(++colHouse);
        });
    }

    /*показать больше пунктов списка*/

    {
        let stringMas = ['Свернуть часть противопоказаний'];
        $('.js-dop-list').click(function (e) {
            e.preventDefault();

            if (!$(this).hasClass('activeString')) {
                stringMas.push($(this).text());
                $(this).addClass('activeString');
            }

            if (!$(this).hasClass('active')) {
                $(this).text(stringMas[0]);
                $(this).addClass('active');
                $(this).closest('.js-item-content').find('.js-list-item').slideDown(300);
            } else {
                $(this).closest('.js-item-content').find('.js-list-item').slideUp(300);
                $(this).removeClass('active');
                $(this).text(stringMas[1]);
            }

        });
    }

    /*созданый select*/

    {
        const $selectNew = $('.js-new-select');

        $selectNew.each(function (e, elem) {
            if ($(elem).find('.js-select-none').find('option').length > 0) {
                $(elem).find('.js-select-none').find('option').each(function (j, options) {
                    let optionString = $(options).text();
                    let optionHtml = '<div class="new-select__item js-select-item">' + optionString + '</div>'
                    $(elem).find('.js-content-select').append(optionHtml);
                });
            }
        });

        function closeSelect() {
            $('.js-new-select').find('.js-select-items').slideUp(300);
            setTimeout(function () {
                $('.js-new-select').removeClass('select-active');
            }, 1000);
        }

        $('.js-new-select-main').click(function () {
            if (!$(this).closest('.js-new-select').hasClass('select-active')) {
                closeSelect();
                $(this).closest('.js-new-select').addClass('select-active');
                $(this).closest('.js-new-select').find('.js-select-items').slideDown(300);
            } else {
                $(this).closest('.js-new-select').find('.js-select-items').slideUp(300);
                setTimeout(function () {
                    $(this).closest('.js-new-select').removeClass('select-active');
                }, 1000);
            }
        });

        $(document).mouseup(function (e) {
            if (!$selectNew.is(e.target) && $selectNew.has(e.target).length == 0) {
                closeSelect();
            }
        });

        $('.js-select-item').click(function () {
            $(this).closest('.js-new-select').find('.js-new-select-main span').text($(this).text());
            closeSelect();
        });
    }

    /*форма Онлайн-заказ*/

    {
        const $btnPrev = $('.js-calendar-prev');
        const $btnNext = $('.js-calendar-next');

        function removeData($this) {
            $this.closest('.form_row').find('.js-btn-data').removeClass('active-number');
            $this.closest('.form_row').find('.js-btn-time').removeClass('active-number');
        }

        function removePointer($this) {
            $this.closest('.form_row').find('.js-cal-time').removeClass('calendar-numbers_active');
            $this.closest('.form_row').find('.js-pointer').addClass('no-pointer');
            $this.closest('.form_row').find('.js-calendar-start').removeClass('none');
            $this.closest('.form_row').find('.js-calendar-start').addClass('calendar-numbers_active');
        }

        function mouth(e, $this, id, step = 1) {
            e.preventDefault();

            const activeClass = 'calendar-numbers_active';
            let closestThis = $this.closest('.js-calendar');
            let idMonth = +$this.closest('.js-calendar').find('.calendar-numbers_active').attr('data-id-month');
            idMonth += step;

            function removeActive() {
                closestThis.find($('.js-calendar-numbers')).removeClass(activeClass);
            }

            closestThis.find($('.js-calendar-numbers')).each(function (j, elems) {
                let $elems = $(elems);
                let dataIdMonth = $elems.attr('data-id-month');

                if (dataIdMonth == idMonth) {
                    let dataMonth = $elems.attr('data-month');

                    removeActive();
                    $elems.addClass(activeClass);
                    closestThis.find('.js-calendar-text').text(dataMonth);

                    return false;
                } else if (idMonth > closestThis.find('.js-calendar-numbers').last().attr('data-id-month')) {
                    let $firsMonth = closestThis.find('.js-calendar-numbers').first();

                    removeActive();
                    $firsMonth.addClass(activeClass);
                    closestThis.find('.js-calendar-text').text(closestThis.find('.js-calendar-numbers').first().attr('data-month'));

                    return false;
                } else if (idMonth < closestThis.find('.js-calendar-numbers').first().attr('data-id-month')) {
                    let $lastMonth = closestThis.find('.js-calendar-numbers').last();

                    removeActive();
                    $lastMonth.addClass(activeClass);
                    closestThis.find('.js-calendar-text').text(closestThis.find('.js-calendar-numbers').last().attr('data-month'));

                    return false;
                }
            });

            removeData($this);

            if (id) {
                let indexDataTime = $this.closest('.js-calendar').find('.js-cal-time.calendar-numbers_active').attr('data-id-data');

                $this.closest('.form_row').find('.js-btn-data').each(function (e, elem) {
                    if ($(elem).attr('data-recording') == indexDataTime) {
                        $(elem).addClass('active-number');
                    }
                });
            } else {
                removePointer($this);
            }
        }

        function idBtnTime($id) {
            return $id.hasClass('data-index-time');
        }

        $btnNext.click(function (e) {
            mouth(e, $(this), idBtnTime($(this)));
        });

        $btnPrev.click(function (e) {
            mouth(e, $(this), idBtnTime($(this)), -1);
        });

        $('.js-btn-data').click(function () {
            let $this = $(this);

            if (!$this.hasClass('active-number')) {
                $this.closest('.js-calendar').find('.js-btn-data').removeClass('active-number')
                $this.addClass('active-number');
                $this.closest('.form_row').find('.js-pointer').removeClass('no-pointer')

                $this.closest('.form_row').find('.js-calendar-start').addClass('none');
                $this.closest('.form_row').find('.js-calendar-start').removeClass('calendar-numbers_active');
                $this.closest('.form_row').find('.js-cal-time').removeClass('calendar-numbers_active');

                $this.closest('.form_row').find('.js-cal-time').each(function (q, times) {
                    if ($(times).attr('data-id-data') == $this.attr('data-recording')) {
                        $(times).addClass('calendar-numbers_active');
                        let stringData = $(times).attr('data-month');
                        $(times).closest('.js-calendar').find('.js-calendar-text').text(stringData);
                    }
                });
            } else {
                $this.removeClass('active-number');
                removePointer($this);
            }
        });

        $('.js-btn-time').click(function () {
            let $this = $(this);

            if (!$this.hasClass('active-number')) {
                $this.addClass('active-number');
            } else {
                $this.removeClass('active-number');
            }
        });
    }
});
/*кнопка прокрутки вверх*/

const offset = 100;
const scrollUp = document.querySelector('.js-scroll-up');
const scrollDop = document.querySelector('.scrollDop');
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

function tops() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
}

// click
scrollUp.addEventListener('click', () => {
    tops();
});

if ($('a').is('.scrollDop')) {
    scrollDop.addEventListener('click', (e) => {
        e.preventDefault();
        tops();
    });
}

/*скрол по якорю*/