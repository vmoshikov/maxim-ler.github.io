$(function() {
	
	// slick slider - certificates
	$('.slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		arrows: true,
		dots: true,
		autoplaySpeed: 2000,
		responsive: [
			{
			  breakpoint: 1000,
			  settings: {
			    arrows: false,
	       slidesToShow: 3
			  }
			},
	   {
	     breakpoint: 768,
	     settings: {
	       arrows: false,
 	       centerMode: true,
 	       centerPadding: '40px',
	       slidesToShow: 2
	     }
	   },
	   {
	     breakpoint: 480,
	     settings: {
	       arrows: false,
	       slidesToShow: 2
	     }
	   }
		]
	});

	// tabs jquery
	$(".tab_item").not(":first").hide();
	$(".right .tab").click(function() {
		
		// нужно если slick+tab
		//$('.slider').slick('slickGoTo', 0, false);
		
		$(".right .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

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

	// magnific-popup
	$('.image-link').magnificPopup({type:'image'});
	$('.popup-link1').magnificPopup({
	  type: 'image'
	  // other options
	});

	// jQuery smooth scrolling
	$('.go_to1').click( function() { // ловим клик по ссылке с классом go_to1
		var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
	  
		if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
			$('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 900); // анимируем скроолинг к элементу scroll_el
		}

		return false; // выключаем стандартное действие
	});
	
	// reviews
	$('.tabs .tab').on('click', function(event) {
		event.preventDefault();

		$('.reviews-tabs .left img').attr('src', 'img/reviews'+$(this).attr('data-index')+'.png');
		// console.log( $(this).attr('data-index') );
	});

	// email
	$('.main-form').submit(function(event) {
		event.preventDefault();

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
		
		return false;
	});



});