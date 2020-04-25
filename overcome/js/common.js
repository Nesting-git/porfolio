$(function () {

	// Custom JS

	/*slider*/

	$('.js-main-slick').slick({
		dots: true,
		appendDots: $('.main-slider__dots'),
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 4000,
		fade: true,
		speed: 800,
		cssEase: 'linear'
	});

	$('.js-slider-doc').slick({
		dots: true,
		appendDots: $('.slider__dots'),
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
	});

	$('.js-accessories-slick').slick({
		dots: true,
		appendDots: $('.accessories__dots'),
		slidesToShow: 3,
		slidesToScroll: 1,
		appendArrows: $('.accessories__dots'),
		centerMode: true,
		autoplay: true,
		autoplaySpeed: 2000,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 700,
				settings: {
					slidesToShow: 1,
				}
			},

		]
	});


	$('.burger-mob-menu').click(function () {
		$('body').toggleClass('active');
	});

	$('.opac').click(function () {
		$('body').toggleClass('active');
	});

	$('.cloce-menu').click(function () {
		$('body').toggleClass('active');
	});

	$('.main-menu__li a').click(function () {
		$('body').toggleClass('active');
	});

	/*end slider*/

	/*плавная прокрутка*/

	$('a[href^="#').click(function () {
		var el = $(this).attr('href');
		$('body, html').animate({ scrollTop: $(el).offset().top }, 1000);
		return false;
	});

	/*end плавная прокрутка*/

	$('.popup__adress-cloce').click(function () {
		$(this).closest('.popup__adress').addClass('none');
	})

	$('.popup_addres-slity__close').click(function () {
		closes();
	})

	$('.contacts__sity').click(function () {
		$('.popup_addres-slity').toggleClass('none')
		$('.opac1').toggleClass('active');
		$(this).toggleClass('active');
		$('.contacts__right__maps').toggleClass('top');
	});

	$('.opac1').click(function () {
		closes();
	})

	function closes() {
		$('.opac1').toggleClass('active');
		$('.popup_addres-slity').addClass('none')
		$('.contacts__sity').toggleClass('active');
		$('.contacts__right__maps').removeClass('top');
	}

	function active_menu() {
		var scroll_top = $(window).scrollTop() + 5;

		var main_slider = $('.main-slider').offset().top;
		var main_slider_he = main_slider + $('.main-slider').height();

		var content_information = $('.content-information').offset().top
		var content_information_he = content_information + $('.content-information').height();

		var slider_doc = $('.slider-doc').offset().top
		var slider_doc_he = slider_doc + $('.slider-doc').height();

		var colection = $('.colection').offset().top
		var colection_he = colection + $('.colection').height();

		var accessories = $('.accessories').offset().top
		var accessories_he = accessories + $('.accessories').height();

		var contacts = $('.contacts').offset().top - 100;
		var contacts_he = contacts + $('.contacts').height();

		function reset() {
			$('.main-menu__li a').removeClass('active');
		}

		if (scroll_top >= main_slider && scroll_top <= main_slider_he) {
			reset();
			$('.main-menu__li:nth-child(1) a').addClass('active');
		} else if (scroll_top >= content_information && scroll_top <= content_information_he) {
			reset();
			$('.main-menu__li:nth-child(2) a').addClass('active');
		} else if (scroll_top >= slider_doc && scroll_top <= slider_doc_he) {
			reset();
			$('.main-menu__li:nth-child(3) a').addClass('active');
		} else if (scroll_top >= colection && scroll_top <= colection_he) {
			reset();
			$('.main-menu__li:nth-child(4) a').addClass('active');
		} else if (scroll_top >= accessories && scroll_top <= accessories_he) {
			reset();
			$('.main-menu__li:nth-child(5) a').addClass('active');
		} else if (scroll_top >= contacts && scroll_top <= contacts_he) {
			reset();
			$('.main-menu__li:nth-child(6) a').addClass('active');
		}

	}

	function fytop() {
		if ($(window).scrollTop() > 100) {
			$('.header').addClass('active');
		} else {
			$('.header').removeClass('active');
		}
	}

	active_menu();

	$(document).on('resize scroll', function () {
		active_menu();
		fytop();
	});

	fytop();

	$('.btn__adress').click(function() {
		$(this).addClass('active');
		$('.btn-maps').removeClass('active');
		$('.contacts__left__top').addClass('active');
		$('.contacts__right__maps').removeClass('active');
	});

	$('.btn-maps').click(function() {
		$(this).addClass('active');
		$('.btn__adress').removeClass('active');
		$('.contacts__left__top').removeClass('active');
		$('.contacts__right__maps').addClass('active');
	});

});
