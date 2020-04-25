$(function () {

	// Custom JS

	// форма поиска
	$(function () {
		let kod = false;

		$('.js-input_search').keyup(function () {

			$(this).attr('value', $(this).val());

			if ($(this).val().length >= 1 && kod == false) {
				$('.close-input').addClass('active');
				kod = true;
			} else if (($(this).val().length == 0 && kod == true)) {
				$('.close-input').removeClass('active');
				kod == false;
			}
		});

		$('.close-input').click(function () {
			$('.js-input_search').val('');
			$('.js-input_search').attr('value', '');
			$(this).removeClass('active');
			kod = false;
		});
	});

	// главное меню
	$(function () {

		$('.menu_button').click(function () {
			$(this).toggleClass('active');

			$('.main-menu').toggle(200);

			$('.opas-mnu').toggleClass('active');

			$('.header').toggleClass('active');

		});

		function none() {
			$('.main-menu').hide(200);
			$('.menu_button').removeClass('active');
			$('.opas-mnu').removeClass('active');
			$('.header').removeClass('active');
		}

		$('.opas-mnu').click(function () {
			none();
		});

		$('.left-category__li').each(function (i, elem) {
			$(elem).attr('data-cat', i);
		});

		$('.subcategory__items').each(function (i, elem) {
			$(elem).attr('data-cat', i);
		});

		$('.left-category__li').mouseover(function () {

			let thiss = $(this);

			$('.left-category__li').removeClass('active');
			$('.left-category__li').removeClass('mobactive');
			$('.main-menu__left-category').addClass('mobactive_menu');
			
			$('.btn-mob-menu-return').addClass('active');

			$(this).addClass('active');

			$('.subcategory__items').removeClass('active');
			$('.subcategory__items').removeClass('mobactive');

			$('.subcategory__items').each(function (i, elem) {
				if (thiss.attr('data-cat') == $(elem).attr('data-cat')) {
					$(elem).addClass('active');
					$(elem).addClass('mobactive');
				}
			});
		});


		$('.btn-mob-menu-return').click(function() {
			$('.main-menu__left-category').removeClass('mobactive_menu');
			$('.subcategory__items').removeClass('mobactive');
			$(this).removeClass('active');
		});

	});

	// слайдер
	$(function () {

		$('.js-img').each(function (i, elem) {
			$(elem).closest('.main-slider__items').css('background-image', 'url(' + $(elem).attr("src") + ')');
		});

		$('.js-amin-slider').slick({
			cssEase: 'linear',
			dots: true,
			infinite: true,
			speed: 1000,
			slidesToShow: 1,
			adaptiveHeight: true
		});

	});

	// слайдер категорий
	$('.js-section-slider').slick({
		dots: false,
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 630,
				settings: {
					variableWidth: true,
					slidesToShow: 1, 
					slidesToScroll: 1
				}
			}
		]
	});

	// прокрутка верх
	$(function () {
		let tag = $('.scroll-top');

		$(window).on('resize scroll', function () {
			$(this).scrollTop() > 200 ? tag.addClass('active') : tag.removeClass('active');
			let out = +($(window).scrollTop() / ($(document).height() - $(window).height()) * 100);
			$('.active-scroll').text(out.toFixed(0) + '%');
		});

		tag.click(function () {
			$('html, body').animate({ scrollTop: 0 }, 500);
			return false;
		});

		

	})

	// Переключение категорий 
	$(function () {

		$('.section-autor-btn').click(function () {
			$('.section-autor-btn').removeClass('active');
			$('.blcok-cat').removeClass('active');
			let jsThis = $(this);
			jsThis.addClass('active');

			$('.blcok-cat').each(function (i, elem) {
				if (jsThis.attr('data-pos') == $(elem).attr('data-pos')) {
					$(elem).addClass('active');
				}
			});

		});

	});


	$('.popup-discuss').click(function () {
		$(this).find('.popup-discuss__menu').toggleClass('active');
	})

	// фиксация header
	$(function () {

		function startFun(This) {
			if (This.scrollTop() > 0) {
				$('body').addClass('active');
			} else {
				$('body').removeClass('active');
			}
		}

		$(window).on('resize scroll', function () {
			startFun($(this));
		});

	});

	// оценка публикации
	let pos = false;
	function authorBox(thiss) {
		let spnaNumber = +thiss.find('span').text();
		let docHref = document.location.href;

		function storageIn() {
			let objbtn = {
				href: docHref,
				value: true,
			};

			let serObk = JSON.stringify(objbtn);
			localStorage.setItem('key', serObk);
		}

		let retObj = JSON.parse(localStorage.getItem('key'))

		if (retObj == null) {
			if (pos == false) {
				thiss.find('span').text(spnaNumber += 1);
				pos = true;
				storageIn();
			} else {
				alert('Вы уже голосовали!');
			}
		} else {
			if (retObj.href == docHref && retObj.value == true) {
				alert('Вы уже голосовали!');
			}
		}
	}

	$('.author-box__btn').click(function () {
		authorBox($(this));
	});

	// плавная прокрутка по якорю
	$('a[href^="#"]').click(function (even) {
		even.preventDefault();
		let el = $(this).attr('href');
		$('html').animate({ scrollTop: $(el).offset().top }, 1000);
	});

	// оценить публикацию 

	let mas = [];

	$(function () {
		$('.art-img').each(function (i, elem) {
			mas[i] = $(elem).attr('src');
		});
	});

	$('.art-img').mouseover(function () {

		let thisImg = $(this);

		$('.art-img').each(function (i, elem) {
			if ($(elem).attr('data-img') <= thisImg.attr('data-img')) {
				$(elem).attr('src', 'img_icons/icons/rating_on.gif');
			}
		});

	});

	$('.art-img').mouseout(function () {
		$('.art-img').each(function (i, elem) {
			$(elem).attr('src', mas[i]);
		});
	});


	// голосоваине 
	let rat = false;

	$('.rating_block__btn').click(function () {
		if (rat == false) {
			$(this).text('Показать голосование');
			rat = true;
		} else {
			$(this).text('Показать голосование');
			rat = false;
		}

		$('.rating_block__pull').toggleClass('active');
		$('.rating_block__hidest').toggleClass('active');
		$('.repost').toggleClass('active');
	});

	$(function () {

		let obgrRting = {
			href: document.location.href,
		};

		// проверка локалсторадже
		function outObj() {

			let parseObjRead = JSON.parse(localStorage.getItem(`ratingObj+${document.location.href}`));

			if (parseObjRead != null) {
				if (parseObjRead.href == document.location.href) {

					$('.hidest-item').each(function (i, elem) {
						if (+$(elem).attr('data-tovar') == parseObjRead.tovar) {
							$(elem).addClass('active');
						}
					});

				}
			}

		}

		// заполнение атирибутов
		function rating() {

			$('.pull__items').each(function (i, elem) {
				$(elem).attr('data-tovar', i);
			});

			$('.hidest-item').each(function (i, elem) {
				$(elem).attr('data-tovar', i);
			});

			outObj();

		}

		// запись  локалсторадже
		function inObgTow(elemTow) {

			let parseObjRead = JSON.parse(localStorage.getItem(`ratingObj+${document.location.href}`));

			if (parseObjRead == null) {
				obgrRting.tovar = elemTow.attr('data-tovar');

				$('.hidest-item').each(function (i, elem) {
					if (+obgrRting.tovar == $(elem).attr('data-tovar')) {
						$(elem).addClass('active');
					}
				});

				let SerialobgrRting = JSON.stringify(obgrRting);

				localStorage.setItem(`ratingObj+${document.location.href}`, SerialobgrRting);
			} else {
				alert('Вы уже голосовали!');
			}

			$('.rating_block__pull').toggleClass('active');
			$('.rating_block__hidest').toggleClass('active');

		}

		// вызов запись  локалсторадже
		$('.pull__items').click(function () {
			inObgTow($(this));
		});

		if ($('.rating_block__pull').attr('date-id') == $('.rating_block__hidest').attr('date-id')) {
			rating();
		}
	});

	$('.mob-searh').click(function () {
		$(this).toggleClass('active');
		$('.header__search').toggleClass('active');
	});

});
