$(function () {

	$('.header_slick').slick({
		dots: true,
		infinite: true,
		slidesToShow: 1,
		appendDots: $('.header_block-slick_dots'),
		autoplay: true,
		autoplaySpeed: 2000,
	});

	$('.reviews-sclick').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		autoplay: true,
		autoplaySpeed: 2000,
		appendDots: $('.reviews-dot')
	});

	$('.js-recommendations-slick').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		appendDots: $('.recommendations_block_dot'),
		autoplay: true,
		autoplaySpeed: 2000,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					infinite: true,
					slidesToShow: 2,
					slidesToScroll: 1,
					arrows: false,
					dots: true,
					autoplay: true,
					autoplaySpeed: 2000,
					appendDots: $('.recommendations_block_dot'),
				}
			},
			{
				breakpoint: 560,
				settings: {
					infinite: true,
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
					dots: true,
					autoplay: true,
					autoplaySpeed: 2000,
					appendDots: $('.recommendations_block_dot'),
				}
			}
		]
	});

	ress();

	$(window).resize(function () {
		ress();
	});

	function ress() {
		if ($(window).width() < 770) {
			$('.main-menu_li').each(function (i, elem) {
				if ($(elem).find('.submenu').length > 0) {
					$(elem).closest('.main-menu_li').append('<i></i>');
				}
			});

			$('.main-menu_li i').click(function () {
				$(this).closest('.main-menu_li').toggleClass('active-mob');
			});
		}
	}

	$(function () {
		if ($(window).width() > 992) {

			$('.js-trening-slick').slick({
				infinite: true,
				slidesToShow: 4,
				slidesToScroll: 1,
				arrows: false,
				dots: true,
				autoplay: true,
				autoplaySpeed: 2000,
				appendDots: $('.trening-dot-slick')
			});

			$('.js-thank-slide').slick({
				infinite: true,
				slidesToShow: 4,
				slidesToScroll: 1,
				arrows: false,
				dots: true,
				autoplay: true,
				autoplaySpeed: 2000,
				appendDots: $('.thank-rot')
			});

		} else if ($(window).width() <= 992 && $(window).width() > 768) {
			$('.js-trening-slick').slick({
				infinite: true,
				slidesToShow: 3,
				slidesToScroll: 1,
				arrows: false,
				dots: true,
				autoplay: true,
				autoplaySpeed: 2000,
				appendDots: $('.trening-dot-slick')
			});

			$('.js-thank-slide').slick({
				infinite: true,
				slidesToShow: 3,
				slidesToScroll: 1,
				arrows: false,
				dots: true,
				autoplay: true,
				autoplaySpeed: 2000,
				appendDots: $('.thank-rot')
			});
		} else if (($(window).width() <= 768 && $(window).width() > 480)) {
			$('.js-trening-slick').slick({
				infinite: true,
				slidesToShow: 2,
				slidesToScroll: 1,
				arrows: false,
				dots: true,
				autoplay: true,
				autoplaySpeed: 2000,
				appendDots: $('.trening-dot-slick')
			});

			$('.js-thank-slide').slick({
				infinite: true,
				slidesToShow: 2,
				slidesToScroll: 1,
				arrows: false,
				dots: true,
				autoplay: true,
				autoplaySpeed: 2000,
				appendDots: $('.thank-rot')
			});

		} else if (($(window).width() <= 480)) {
			$('.js-trening-slick').slick({
				infinite: true,
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
				dots: true,
				autoplay: true,
				autoplaySpeed: 2000,
				appendDots: $('.trening-dot-slick')
			});

			$('.js-thank-slide').slick({
				infinite: true,
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
				dots: true,
				autoplay: true,
				autoplaySpeed: 2000,
				appendDots: $('.thank-rot')
			});

		}
	});


	$('.image-popup-zoom').magnificPopup({
		type: 'image',
		zoom: {
			enabled: true,
			duration: 300 // продолжительность анимации. Не меняйте данный параметр также и в CSS
		}
	});

	$(function () {
		$('.section-about_items').click(function () {
			$('.section-about_items').removeClass('active');
			$(this).addClass('active');
			var em = $(this).attr('data-col');

			$('.js-row').removeClass('active');
			$('.js-row').addClass('none');

			$('.js-row').each(function (i, elem) {
				if (em == $(elem).attr('data-colsec')) {
					$(elem).addClass('active')
				}
			});
		});
	});

	$('a[href^="#"]').click(function () {
		$("html, body").animate({
			scrollTop: $($(this).attr("href")).offset().top + "px"
		}, {
			duration: 500,
			easing: "swing"
		});
		return false;
	});

	$(function () {

		$('.categor-btn_btn_one').click(function () {
			$('.categor-btn_btn').removeClass('active');
			$(this).addClass('active');
			$('.section-categores_items').addClass('active');
		});

		$('.js-btn-cat').click(function () {
			$('.categor-btn_btn').removeClass('active');
			$(this).addClass('active');

			var am = $(this).attr('data-btn');

			$('.section-categores_items').removeClass('active');

			$('.section-categores_items').each(function (i, elem) {
				if (am == $(elem).attr('date-doc')) {
					$(elem).addClass('active')
				}
			});
		});
	});


	$('.burger-menu-mob').click(function () {
		$(this).toggleClass('active');
		$('body').toggleClass('mob-active');
		$('.main-menu').toggleClass('active');
	});

	$('.opac-top-mob').click(function () {
		$('.burger-menu-mob').toggleClass('active');
		$('body').toggleClass('mob-active');
		$('.main-menu').removeClass('active');
	});

	$(window).scroll(function () {

		if (($(this).scrollTop()) >= ($('.header').offset().top) + $('.header').height()) {
			$('.block-btn-yakor').addClass('position')
		} else {
			$('.block-btn-yakor').removeClass('position')
		}
	});

	$('.popap__form__close').click(function() {
		$('.popap__form').removeClass('active');
		$('.pop-top').removeClass('active')
	});

	$('.pop-top').click(function() {
		$(this).removeClass('active');
		$('.popap__form').removeClass('active');
	});


	if (window.location.href.indexOf('#sucess') !== -1 ) {
		$('.popap__form').addClass('active');
		$('.pop-top').addClass('active')
	}


});
