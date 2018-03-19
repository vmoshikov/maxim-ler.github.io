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




	// Initialize a new plugin instance for all
	// e.g. $('input[type="range"]') elements.
	$('input[type="range"]').rangeslider({

    // Feature detection the default is `true`.
    // Set this to `false` if you want to use
    // the polyfill also in Browsers which support
    // the native <input type="range"> element.
    polyfill: false,

    // Default CSS classes
    rangeClass: 'rangeslider',
    disabledClass: 'rangeslider--disabled',
    horizontalClass: 'rangeslider--horizontal',
    verticalClass: 'rangeslider--vertical',
    fillClass: 'rangeslider__fill',
    handleClass: 'rangeslider__handle',

    // Callback function
    onInit: function() {},

    // Callback function
    onSlide: function(position, value) {},

    // Callback function
    onSlideEnd: function(position, value) {}
});


	// Destroy all plugin instances created from the
	// e.g. $('input[type="range"]') elements.
	// $('input[type="range"]').rangeslider('destroy');

	// Update all rangeslider instances for all
	// e.g. $('input[type="range"]') elements.
	// Usefull if you changed some attributes e.g. `min` or `max` etc.
	// $('input[type="range"]').rangeslider('update', true);





	$.ajax({
      type: "GET",
      url: "https://robasta.ru/ajax/marks.php",
      success: function(data) {
          var mark_options = '<option value = ""></option>';

          data = JSON.parse(data);
          $.each(data,function(i,el) {
              mark_options += '<option value = "' + data[i] + '">' + data[i] + '</option>';
          });

          $('#mark').html(mark_options);
      }
  });

  $('#mark').on('change', function() {
      $.ajax({
          type: "GET", //Метод отправки
          url: "https://robasta.ru/ajax/models.php",
          data: 'mark=' + $('#mark').val(),
          success: function (data) {
              var model_options = '<option value = ""></option>';

              data = JSON.parse(data);
              $.each(data, function (i, el) {
                  model_options += '<option value = "' + data[i] + '">' + data[i] + '</option>';
              });

              $('#model').html(model_options);
          }
      });
  });

  $('#form').on('click', function() {
      //здесь надо отправлять запрос на свой сервер и действовать в соответствии с документацией https://docs.google.com/document/d/1UiR7TX0GHN0JpIGsVQYOx8ZLQ_JqoY8-MPXRzzZkwxI/edit
  });








	// запуск и подключение icheck
	// $('input').iCheck({
	// 	checkboxClass: 'icheckbox_polaris',
	// 	radioClass: 'iradio_polaris'
	// });

	// wow js
	// new WOW().init();


});