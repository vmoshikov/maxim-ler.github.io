$(function() {
	// slick slider
	$('.slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		dots: false,
		arrows: true,
		autoplaySpeed: 4000
	});

	// accordion jquery
	$('#accordion-js').find('h3').click(function() {
		$(this).next().stop().slideToggle();

		$('#accordion-js').find('h3').css('background', 'transparent');
		$(this).css('background', '#f8f8f8');

		$('#accordion-js').find('p').css('background', 'transparent');
		$(this).next().css('background', '#f8f8f8');
	}).next().stop().hide();
	
	// jQuery smooth scrolling
	$('.go_to1').click( function() { // ловим клик по ссылке с классом go_to1
		var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
	  
		if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
			$('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 900); // анимируем скроолинг к элементу scroll_el
		}

		return false; // выключаем стандартное действие
	});

	// popup
	// ставим на кнопку которая вызывает данный popup
	$('.js-popup').on('click', function(e) {
	  e.preventDefault();

	  // поиск popup и popup-overlay для их открытия
	  // $('.popup').css('display', 'block');
	  // $('.popup-overlay').css('display', 'block');
	  // or
	  $('.popup').slideDown();
	  $('.popup-overlay').css('display', 'block');
	  
	  // поиск button close popup
	  $('#js-close-popup, .popup-overlay').on('click', function(e) {
	    // $('.popup').css('display', 'none');
	    // $('.popup-overlay').css('display', 'none');
	    // or
	    $('.popup').slideUp();
	    $('.popup-overlay').css('display', 'none');
	  });
	});



	// запуск и подключение icheck
	// $('input').iCheck({
	// 	checkboxClass: 'icheckbox_polaris',
	// 	radioClass: 'iradio_polaris'
	// });

	// wow js
	// new WOW().init();


});