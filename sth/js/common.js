$(function () {


	function mobmenu() {
		$('.header__main-menu').toggleClass('active');
		$('body').toggleClass('mobmenu');
	}

	$('.menu-burger-mobile').click(function () {
		$(this).toggleClass('active');
		mobmenu();
	});

	$('.opasit-mob').click(function () {
		$('.menu-burger-mobile').toggleClass('active');
		mobmenu();
	});



	rez();

	function rez() {
		if ($(window).width() > 992) {
			$('.equipment_slick').slick({
				infinite: true,
				slidesToShow: 3,
				slidesToScroll: 1
			});
			$('.reviews_row-slick').slick({
				infinite: true,
				slidesToShow: 4,
				slidesToScroll: 1
			});
			$('.other-goods_slick').slick({
				infinite: true,
				slidesToShow: 3,
				slidesToScroll: 1
			});
		} else if ($(window).width() <= 992 && $(window).width() > 600) {
			$('.equipment_slick').slick({
				infinite: true,
				slidesToShow: 2,
				slidesToScroll: 1
			});
			$('.reviews_row-slick').slick({
				infinite: true,
				slidesToShow: 2,
				slidesToScroll: 1
			});
			$('.other-goods_slick').slick({
				infinite: true,
				slidesToShow: 2,
				slidesToScroll: 1
			});
		} else if ($(window).width() < 600) {
			$('.equipment_slick').slick({
				infinite: true,
				slidesToShow: 1,
				slidesToScroll: 1
			});
			$('.reviews_row-slick').slick({
				infinite: true,
				slidesToShow: 1,
				slidesToScroll: 1
			});
			$('.other-goods_slick').slick({
				infinite: true,
				slidesToShow: 1,
				slidesToScroll: 1
			});
		}
	}

	$('.portfolio__slick').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		fade: true,
		asNavFor: '.portfolio_submenu-div'
	});
	$('.portfolio_submenu-div').slick({
		asNavFor: '.portfolio__slick',
		centerMode: true,
		focusOnSelect: true,
		slidesToShow: 7
	});

	$('.tovare-img_slick').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		fade: true,
		arrows: false,
		asNavFor: '.tovare__slick'
	});
	$('.tovare__slick').slick({
		asNavFor: '.tovare-img_slick',
		centerMode: true,
		focusOnSelect: true,
		slidesToShow: 4
	});

	var a = 0;
	var b = 0;

	$(function () {
		$('.ready-col .ready_text').each(function (i, elem) {
			if ($(elem).outerHeight() > a) {
				a = $(elem).outerHeight();
			}
		});
		$('.ready-col .ready_text').css('height', a + 'px');
	});

	$(function () {
		$('.benefits_items .benefits_title').each(function (i, elem) {
			if ($(elem).outerHeight() > b) {
				b = $(elem).outerHeight();
			}
		});
		$('.benefits_items .benefits_title').css('height', b + 'px');
	});

	$(function () {


		$('.questions_items-top').click(function () {
			$('.questions_items').removeClass('active');
			$(this).closest('.questions_items').addClass('active');

		});

		$('.mob-menu-i').click(function () {
			$(this).toggleClass('active');
			$(this).closest('.nav__items').find('.submenu').toggleClass('active');
		});

	});


	$('.popup-content').magnificPopup({
		type: 'inline'
	});

	$('.js-hide').hide();
	$('.js-seo-text_next').click(function () {
		$(this).toggleClass('opened');
		$('.js-hide').slideToggle();
		if ($(this).hasClass('opened')) {
			$(this).html('Закрити текст');
		}
		else {
			$(this).html('Читати далі');
		}
	});

	$(window).scroll(function () {
		if ($('.header').height() <= $(window).scrollTop()) {
			$('.header').addClass('header-scroll');
		} else {
			$('.header').removeClass('header-scroll');
		}
	});



	$(window).on('scroll resize', function () {
		start();
	});

	function start() {
		var sclTop = $(window).scrollTop();
		var automations = $('.automation').offset().top;

		var ht = $('.automation').height();

		automations -= ht;

		if (automations <= sclTop && $('.automation').hasClass('active') == false) {
			$('.automation').addClass('active');
			setTimeout(explode, 1000);
		}
	}

	function explode() {
		$('.items_circle i').each(function (i, elem) {
			$('.items_circle').css('color', '#6cc54d');
			col($(elem));
		});
	}

	function col(tag) {
		var num_cirk = tag.text();

		setInterval(fset, 50);
		var numstart = 0;

		function fset() {
			if (num_cirk != numstart) {
				numstart += 1;
				tag.text(numstart);
			}

		};
	}

});
