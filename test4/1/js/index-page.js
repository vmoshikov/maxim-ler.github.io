$(function() {
	// slick slider
	$('.slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000
	});

	// popups
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

	// email - new with verify
	$('.main-form').submit(function(event) {
		event.preventDefault();
		
		// проверка на стороне клиента формы через js что форма не пустая
		var name = $('#name1').val();
		var phone = $('#tel1').val();
		// console.log(name);
		// console.log(phone);

		if (name !== '' & phone !== '') {
			$.ajax({
				type: "POST",
				url: "mailer/smart.php",
				data: $(this).serialize()
			}).done(function() {
				$(this).find("input").val("");
				
				//alert("Заявка отправлена!");
				window.location.href = "../mailer/thanks.html";
				
				$("form").trigger("reset");
				
				$('.popup').slideUp();
				$('.popup-overlay').css('display', 'none');
			});
		} else {
			alert('Данные не заполнены!');
		}
		return false;
	});

	// jQuery smooth scrolling
	$('.go_to1').click( function() { // ловим клик по ссылке с классом go_to1
		var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
	  
		if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
			$('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 900); // анимируем скроолинг к элементу scroll_el
		}

		return false; // выключаем стандартное действие
	});

	// magnific-popup
	$('.image-link').magnificPopup({type:'image'});
	$('.popup-link1').magnificPopup({
	  type: 'image'
	  // other options
	});


});