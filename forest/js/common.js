$(function () {

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
			index_btn_popup === index_popup ? $(elem).fadeIn(300) : $(elem).fadeOut(300);
		});
	});

	function close_popup(elem_popup) {
		$('.js-popup').fadeOut(300);
		let src_video = $(elem_popup).find('iframe').attr('src');
		$(elem_popup).find('iframe').attr('src', src_video);

	}

	$('.js-popup__close').click(function () {
		close_popup(this.closest('.js-popup'));
	});

	$('.js-popup').click(function (e) {
		let popup = $('.js-popup__wrapp');
		if (!popup.is(e.target) && popup.has(e.target).length === 0)
			close_popup(this);
	});
	// end попап

	$('a[href^="#"]').click(function (e) {
		e.preventDefault();
		let heft = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(heft).offset().top
		}, 500);
	});


	if ($(window).width() <= 992) {
		$('.count-number').before($('.play-video-wrap')).append($('.control-wrap'));
		$('.sponsors .container').append($('.sponsors__top-item'));
	}

	function price_wood(col) {
		let price = +$('.js-col-wood').attr('date-price');
		let price_col = price * col;

		let price_string = (String(price_col).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));

		$('.js-col-wood').attr('data-value', price_col);
		$('.js-col-wood').text(price_string);

		$('.js-cols-wood').text(col);
		$('.js-price-wood').text(price_string);
	}

	$('.js-count-input').on('input', function () {
		this.value = Math.min(100, Math.max(1, this.value));
		col_wood();
	});

	function col_wood(typ) {
		let col = +$('.js-count-input').val();

		if (typ == 'add' && col < 100) {
			$('.js-count-input').val(col += 1);
			price_wood(col);
			return;
		}

		if (typ == 'less' && col > 1) {
			$('.js-count-input').val(col -= 1);
			price_wood(col);
		}

		price_wood(col);

	}

	$('.js-choose-btn').click(function () {
		if ($(this).hasClass('js-choose-btn_add')) {
			col_wood('add');
		} else {
			col_wood('less');
		}
	});

	function data_status(status) {

		$('.js-input-status').each(function (e, elem) {

			if (status == true) {
				let stat_name = $(elem).attr('data-name');
				$(elem).attr('name', stat_name);
				return;
			}

			$(elem).attr('name', '');
			$('.js-input-status').removeClass('error');
		});

	}

	$('.js-status').click(function () {

		if ($(this).attr('data-status') == 'false') {
			$('.js-input-status').attr('disabled', '');
			data_status(false);
			$('.anonim label.error').remove();
			$('.anonim input').removeClass('error');
		} else {
			$('.js-input-status').removeAttr('disabled');
			data_status(true);
		}
	});

	$('.js-main-form-validate').validate({
		rules: {
			name: 'required',
			surname: 'required',
			phone: 'required',
			surname: 'required',
			email: {
				required: true,
				email: true,
			}
		},
		messages: {
			name: {
				required: "Это поле обязательно для заполнения",
			},
			surname: {
				required: "Это поле обязательно для заполнения",
			},
			phone: {
				required: "Это поле обязательно для заполнения",
			},
			email: {
				required: "Это поле обязательно для заполнения",
			}
		},
	});

	$('.js-main-form-validate').on('submit', function (e) {
		$('.js-main-form-validate .label-text').removeClass('errors');

		if (!$('.js-main-form-validate input[name="status_radio"]').prop('checked')) {
			e.preventDefault();
			$('.js-main-form-validate .label-text').addClass('errors');
		}
	});

	$('.js-valid-phone').mask('+9(999) 999-99-99');
	$('.js-masc-phone').mask('+9(999) 999-99-99');

	$('.js-volunteers-form').validate({
		rules: {
			volunteers_name: 'required',
			volunteers_phone: 'required',
		},
		messages: {
			volunteers_name: {
				required: "Это поле обязательно для заполнения",
			},
			volunteers_phone: {
				required: "Это поле обязательно для заполнения",
			}
		},
	});

	$('.js-volunteers-form').on('submit', function (e) {
		$('.js-volunteers-form .label-text').removeClass('errors');

		if (!$('.js-volunteers-form input[name="volunteers_status"]').prop('checked')) {
			e.preventDefault();
			$('.js-volunteers-form .label-text').addClass('errors');
		}
	});

	/**
 * jQuery Spincrement plugin
 *
 * Plugin structure based on: http://blog.jeremymartin.name/2008/02/building-your-first-jquery-plugin-that.html
 * Leveraging of jQuery animate() based on: http://www.bennadel.com/blog/2007-Using-jQuery-s-animate-Method-To-Power-Easing-Based-Iteration.htm
 * Easing function from jQuery Easing plugin: http://gsgd.co.uk/sandbox/jquery/easing/
 * Thousands separator code: http://www.webmasterworld.com/forum91/8.htm
 *
 * @author John J. Camilleri
 * @version 1.2
 */

	/* global jQuery */

	(function ($) {
		// Custom easing function
		$.extend($.easing, {
			// This is ripped directly from the jQuery easing plugin (easeOutExpo), from: http://gsgd.co.uk/sandbox/jquery/easing/
			spincrementEasing: function (x, t, b, c, d) {
				return (t === d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b
			}
		})

		// Spincrement function
		$.fn.spincrement = function (opts) {
			// Default values
			var defaults = {
				from: 0,
				to: null,
				decimalPlaces: null,
				decimalPoint: '.',
				thousandSeparator: ',',
				duration: 1000, // ms; TOTAL length animation
				leeway: 50, // percent of duraion
				easing: 'spincrementEasing',
				fade: true,
				complete: null
			}
			var options = $.extend(defaults, opts)

			// Function for formatting number
			var re_thouSep = new RegExp(/^(-?[0-9]+)([0-9]{3})/)
			function format(num, dp) {
				num = num.toFixed(dp) // converts to string!

				// Non "." decimal point
				if ((dp > 0) && (options.decimalPoint !== '.')) {
					num = num.replace('.', options.decimalPoint)
				}

				// Thousands separator
				if (options.thousandSeparator) {
					while (re_thouSep.test(num)) {
						num = num.replace(re_thouSep, '$1' + options.thousandSeparator + '$2')
					}
				}
				return num
			}

			// Apply to each matching item
			return this.each(function () {
				// Get handle on current obj
				var obj = $(this)

				// Set params FOR THIS ELEM
				var from = options.from
				if (obj.attr('data-from')) {
					from = parseFloat(obj.attr('data-from'))
				}

				var to
				if (obj.attr('data-to')) {
					to = parseFloat(obj.attr('data-to'))
				} else if (options.to !== null) {
					to = options.to
				} else {
					var ts = $.inArray(options.thousandSeparator, ['\\', '^', '$', '*', '+', '?', '.']) > -1 ? '\\' + options.thousandSeparator : options.thousandSeparator
					var re = new RegExp(ts, 'g')
					to = parseFloat(obj.text().replace(re, ''))
				}

				var duration = options.duration
				if (options.leeway) {
					// If leeway is set, randomise duration a little
					duration += Math.round(options.duration * ((Math.random() * 2) - 1) * options.leeway / 100)
				}

				var dp
				if (obj.attr('data-dp')) {
					dp = parseInt(obj.attr('data-dp'), 10)
				} else if (options.decimalPlaces !== null) {
					dp = options.decimalPlaces
				} else {
					var ix = obj.text().indexOf(options.decimalPoint)
					dp = (ix > -1) ? obj.text().length - (ix + 1) : 0
				}

				// Start
				obj.css('counter', from)
				if (options.fade) {
					obj.css('opacity', 0)
				}

				obj.animate(
					{
						counter: to,
						opacity: 1,
					},
					{
						easing: options.easing,
						duration: duration,

						// Invoke the callback for each step.
						step: function (progress) {
							obj.html(format(progress * to, dp))
						},
						complete: function () {
							// Cleanup
							obj.css('counter', null)
							obj.html(format(to, dp))

							// user's callback
							if (options.complete) {
								options.complete(obj)
							}
						}
					}
				)
			})
		}
	})(jQuery)


	let show = true;
	let box = '.js-animate-col1';

	let w_anim = $('.js-line').attr('data-wid')

	function animateStart() {
		if (!show) return false;
		let w_top = $(window).scrollTop();
		let e_top = $(box).offset().top;
		let w_height = $(window).height();

		if (w_top + w_height - 100 >= e_top) {

			$('.js-line').animate({
				width: `${w_anim}%`,
			}, 500);

			$(box).closest('.animate-col').css('opacity', 1);
			$(box).spincrement({
				thousandSeparator: " ",
				duration: 2000
			});
			show = false;
		}
	}

	let show2 = true;
	let box2 = '.js-animate-col2';
	function animateStart2() {
		if (!show2) return false;
		let w_top = $(window).scrollTop();
		let e_top = $(box2).offset().top;
		let w_height = $(window).height();

		if (w_top + w_height - 100 >= e_top) {
			$(box2).closest('.animate-col').css('opacity', 1);
			$(box2).spincrement({
				thousandSeparator: " ",
				duration: 2000
			});
			show2 = false;
		}
	}

	let show3 = true;
	let box3 = '.js-animate-col3';
	function animateStart3() {
		if (!show3) return false;
		let w_top = $(window).scrollTop();
		let e_top = $(box3).offset().top;
		let w_height = $(window).height();

		if (w_top + w_height - 100 >= e_top) {
			$(box3).closest('.animate-col').css('opacity', 1);
			$(box3).spincrement({
				thousandSeparator: " ",
				duration: 2000
			});
			show3 = false;
		}
	}

	$(window).on('scroll load resize', function () {
		animateStart();
		animateStart2();
		animateStart3()
	});

	// animation text

	let ob_text = [
		'Давайте вместе <br> спасём наш лес (Ёлка)',
		'Давайте востановим<br> воздух в Тольятты!',
		'Давайте востановим<br> экологию в Тольятты!',
	];


	console.log(ob_text);

	let col_text = 0;

	setInterval(function () {
		if (col_text == 3) {
			col_text = 0;
		}

		$('.js-animate-title').html(ob_text[col_text]);

		col_text++;
	}, 5000);



});
