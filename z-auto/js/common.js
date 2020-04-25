'use struct'


$(function () {
	//добавление тега <br>
	$(function () {
		$(window).resize(function () {
			if ($(this).width() <= 480) {
				$('.js-com').html('<br>');
			}
			else {
				$('.js-com').html(',');
			}
		});
	});

	// Коментарии
	$('.your-class').slick({
		arrows: false,
		dots: true,
		infinite: true,
		slidesToShow: 1,
		adaptiveHeight: true
	});


	// всплывайка
	$('.js-button').magnificPopup({
		items: {
			src: '#pop',
			type: 'inline'
		}
	});

	// Маска телефона
	$("#phone").mask("+38(099)999-99-99", {
		autoclear: false, completed: function () {
			bol_mask = true; $('.jc-out-mob').magnificPopup({
				items: {
					src: '#pop_sencu',
					type: 'inline'
				}
			});
		}
	});

	// Валидация номер телефона
	$('#form_information').validate({
		rules: {
			mobile: {
				required: true,
			}
		},
		messages: {
			mobile: {
				required: 'Введите номер телефона',
			}
		}
	});


	//что нужно перевезти цена перевозки
	$(function () {
		var select_text = $('.select-text');
		var result = $('.result');

		$('.js-track-out').click(function () {
			$('.truck__list-masa-wid').toggleClass('open__put-truck');
			$('.js-select-wid').toggleClass('open__put-truck');
			$('.jq-select__trigger-truck').toggleClass('open-rotate');

			$('.truck__list-masa-sity').removeClass('open__put-truck');
			$('.js-select-sity').removeClass('open__put-truck');
			$('.jq-select__trigger-sity').removeClass('open-rotate');
		});

		$('.truck__list-masa-wid ul li').click(function () {
			select_text = $(this).text();
			$('.js-text-truck').text(select_text);
			result.text($(this).attr('data-number'));


			$('.truck__list-masa-wid ul li').removeClass('selected_sel');
			$(this).addClass('selected_sel');
			$('.truck__list-masa-wid').removeClass('open__put-truck');
			$('.js-select-wid').removeClass('open__put-truck');
			$('.jq-select__trigger-truck').removeClass('open-rotate');
		});



		$('.js-track-out-sity').click(function () {
			$('.truck__list-masa-sity').toggleClass('open__put-truck');
			$('.js-select-sity').toggleClass('open__put-truck');
			$('.jq-select__trigger-sity').toggleClass('open-rotate');

			$('.truck__list-masa-wid').removeClass('open__put-truck');
			$('.js-select-wid').removeClass('open__put-truck');
			$('.jq-select__trigger-truck').removeClass('open-rotate');
		});

		$('.truck__list-masa-sity ul li').click(function () {
			select_text = $(this).text();
			$('.js-text-sity').text(select_text);
			result.text($(this).attr('data-number'));


			$('.truck__list-masa-sity ul li').removeClass('selected_sel');
			$(this).addClass('selected_sel');
			$('.truck__list-masa-sity').removeClass('open__put-truck');
			$('.js-select-sity').removeClass('open__put-truck');
			$('.jq-select__trigger-sity').removeClass('open-rotate');
		});
	});

});

