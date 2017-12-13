$(function() {

	// 2 - two popups in left menu
	var a = $('.js-ul li a');

	a.on('click', function(e) {
		e.preventDefault();
		// console.log($(this).attr('data-number'));

		switch($(this).attr('data-number')) {
			case '1':
				// hide all items in left menu
				$('main .menu6').fadeOut(0);
				// add new menuN pages popup when create
				//
				//

				// $('main .menu1').css('display', 'block');
				$('main .menu1').fadeToggle(0, 'linear', verifeMenuN);
				break;

			case '2':
				// alert('2');
				break;

			case '3':
				// alert('3');
				break;

			case '4':
				// alert('4');
				break;

			case '5':
				// alert('5');
				break;

			case '6':
				// hide all items in left menu
				$('main .menu1').fadeOut(0);
				// add new menuN pages popup when create
				//
				//

				// $('main .menu2').css('display', 'block');
				$('main .menu6').fadeToggle(0, 'linear', verifeMenuN);
				break;

			case '7':
				// alert('7');
				break;
		}


		function verifeMenuN() {
			// block verife in menu1... menuN (display: block/none) for overlay
			if(
					($('main .menu1').css('display') == 'block')
					|| ($('main .menu6').css('display') == 'block')
					// add new if if create popup
					//
					//
				)
			{
				$('main .overlay').fadeIn(0);
				// $(this).fadeIn(0);
			}
			else{
				$('main .overlay').fadeOut(0);
			}
		}
	});

	// 3 - gumburger click
	$('header .header-info .icon').on('click', function() {
		$('.main-content .left-menu').addClass('fix-menu');
		$('.main-content .left-menu').animate({left: "0"}, 300);

		var h1 = document.body.clientHeight;
		$('.fix-menu').css('height', h1+'px');

		// block сдвига текста попап при открытии left меню
		$('.main-content main .menu1').css('padding-left', '212px');
		//
		//
		$('.main-content main .menu6').css('padding-left', '212px');
	});

	// 4 - click to close gumburger
	$('.close-menu-popup').on('click', function() {
		$('.main-content .left-menu').animate({left: "-200px"}, 300, function() {

			// feedback popup left menu by vertical
			var h1 = document.body.clientHeight;
			$('.fix-menu').css('height', '0px');

			$('.main-content .left-menu').removeClass('fix-menu');
				$('main .all-menu').fadeOut(0);
				$('.overlay').fadeOut(0);
		});

		// block сдвига текста попап при скрытии left меню
		$('.main-content main .menu1').css('padding-left', '10px');		
		//
		//
		$('.main-content main .menu6').css('padding-left', '10px');
	});

	// 5 - auto height left popup menu
	var h = document.body.clientHeight;
	$('.fix-menu').css('height', h+'px');

	$(window).resize(function(){
	  h = document.body.clientHeight;

	  $('.fix-menu').css('height', h+'px');
	});
	
});