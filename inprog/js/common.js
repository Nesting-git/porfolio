$(function () {

	// Custom JS

	$('.js-two').click(function () {
		$('.js-glav').attr('href', $(this).attr('href'));
		$('.js-glav').text($(this).text());
	});

	var max_height = 0

	$(function () {
		$('.popular-goods__product-subtitle').each(function (i, elem) {
			if ($(elem).height() > max_height) {
				max_height = $(elem).height();
			}
		});

		$('.popular-goods__product-subtitle').height(max_height);

	});

	$('.burger_menu-mob').click(function() {
		$(this).toggleClass('active');
		$('.header-top__right-left').toggleClass('active');
	});

	$('.js-slider').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		dots: true,
		autoplay: true,
		autoplaySpeed: 2000,
		appendDots: $('.popular-goods__dots-top'),
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					dots: true,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					dots: true,
				}
			},
			{
				breakpoint: 560,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: true,
				}
			}
		]
	});

	$('.js-slider-prod').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		dots: true,
		autoplay: true,
		autoplaySpeed: 2000,
		appendDots: $('.popular-goods__dots-bot'),
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					dots: true,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					dots: true,
				}
			},
			{
				breakpoint: 560,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: true,
				}
			}
		]
	});

	$('.js-clider-name').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		appendDots: $('.dots-name'),
		arrows: false,
		autoplay: true,
		autoplaySpeed: 2000,
	});

	$('.js-submenu-tovar-slick').slick({
		infinite: true,
		slidesToShow: 6,
		slidesToScroll: 1,
		dots: false,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 5,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 560,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				}
			}
		]
	});

	var price_ob = 0;

	$('.basket-calck-number').prop('disabled', true);

	calc('');


	function calc(predok, add) {

		var predok_find = $(predok).find('.basket-calck-number');
		var tovar = predok_find.val();

		if (add > 0) {

			if (tovar < 99) {
				tovar = +tovar;
				tovar += add;
				predok_find.val(tovar);
				predok_find.attr('value', tovar);
				$(predok).find('.basket-calck-minus').removeClass('debag');
			} else {
				$(predok).find('.basket-calck-add').addClass('debag');
			}

		} else {

			if (tovar > 1) {
				tovar = +tovar;
				tovar += add;
				predok_find.val(tovar);
				predok_find.attr('value', tovar);
			} else {
				$(predok).find('.basket-calck-minus').addClass('debag');
			}

		}

		var priceSrart = $(predok).find('.js-price-1').attr('date_value');

		priceSrart *= tovar;

		$(predok).find('.js-price-2').attr('date_value', priceSrart);
		$(predok).find('.js-price-2').html(priceSrart);

		$('.js-price-2').each(function (i, elem) {

			price_ob += +$(elem).attr('date_value');
			console.log(i);
		});

		$('.js-price-3').each(function (i, elem) {
			$(elem).attr('date_value', price_ob);
			$(elem).html(price_ob);
		});

	}

	$('.basket-calck-minus').click(function () {
		var predok = $(this).closest('.row-product');
		price_ob = 0;
		calc(predok, -1);
	});

	$('.basket-calck-add').click(function () {
		var predok = $(this).closest('.row-product');
		price_ob = 0;
		calc(predok, 1);
	});

	$('.close-tover').click(function () {
		$(this).closest('.row-product').detach();
		price_ob = 0;
		calc('');
	});

	if (window.location.href.indexOf('#sucess') !== -1 ) {
		$('body').addClass('active');
	}

	$('.podpis i').click(function() {
		$('body').removeClass('active');
	});

	$('.menu-tovare__items').hover(function() {
		$('.header-top__left').toggleClass('active');
	});

});
