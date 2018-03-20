$(function() {
	// slick slider
	$('.slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: false,
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




	$('.menu-icon').on('click', function(event) {
		event.preventDefault();
		
		// $('.second-menu').toggle(400);
		$('.second-menu').toggleClass('change-menu');

	});
















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








	





























	/** jQuery UI slider **/
	$(function() {


	function abc2(n) {
	    n += "";
	    n = new Array(4 - n.length % 3).join("U") + n;
	    return n.replace(/([0-9U]{3})/g, "$1 ").replace(/U/g, "");
	}


	    $('body').on('change', '#resultInMonth', function() {

	        console.log("test-custom");

	        var summ_in_month_new_custom = $('#resultInMonth').html();

	        $('#resultInMonth-custom-new').val(summ_in_month_new_custom);

	    });


	    console.log("1");
	    /******************************************************************************/
	   // Сумма на главной

	    // Стартовая сумма с процентами(правки от 20.04.2017)
	    $('#resultInMonth').text('215');
	    console.log("3");
	    $("#summ").slider({
	        range: "min",
	        //min: 3000, Р±С‹Р»Рѕ РЅР° 3000 СЃС‚Р°Р»Рѕ 10000(РїСЂР°РІРєРё РѕС‚ 20.04.2017)
	        min: 10000,
	        //max: 412000, Р±С‹Р»Рѕ РЅР° 300000 СЃС‚Р°Р»Рѕ 162000(РїСЂР°РІРєРё РѕС‚ 20.04.2017)
	        //max: 162000, Р±С‹Р»Рѕ РЅР° 162000 СЃС‚Р°Р»Рѕ 50000(РїСЂР°РІРєРё РѕС‚ 20.04.2017)
	        max: 50000,
	        step: 1000,
	        //value: 3000, Р±С‹Р»Рѕ РЅР° 3000 СЃС‚Р°Р»Рѕ 10000(РїСЂР°РІРєРё РѕС‚ 20.04.2017)
	        value: 10000,
	        slide: summSlide
	    });

	    // Очищаем поле ввода суммы при клике
	    $("#summInputIndex").on('click', function() {
	        $(this).val('');
	    });

		// Выполняем пересчет при событии change
	    $("#summInputIndex").on("change", function() {
	        keypressSumm();
	    });

	    // Выполняем пересчет при событии keypress
	    $("#summInputIndex").on("keypress", function(e) {
	        if (e.keyCode == 13) {
	            keypressSumm();
	        }
	    });

	    // Функция пересчета для событий change и keypress
	    function keypressSumm() {
	        var current = $("#summInputIndex").val();
	        console.log(current + "cus");
	        // Переопределение сумм
	        if (current >= 0 && current < 3500) {
	            $("#summInputIndex").val('10000');
	            current_m = 10000;
	        } else if (current >= 11000 && current < 12000) {
	            $("#summInputIndex").val('11000');
	            current_m = 11000;
	        } else if (current >= 12000 && current < 13000) {
	            $("#summInputIndex").val('12000');
	            current_m = 12000;
	        } else if (current >= 13000 && current < 14000) {
	            $("#summInputIndex").val('13000');
	            current_m = 13000;
	        } else if (current >= 14000 && current < 15000) {
	            $("#summInputIndex").val('14000');
	            current_m = 14000;
	        } else if (current >= 15000 && current < 16000) {
	            $("#summInputIndex").val('15000');
	            current_m = 15000;
	        } else if (current >= 16000 && current < 17000) {
	            $("#summInputIndex").val('16000');
	            current_m = 16000;
	        } else if (current >= 17000 && current < 18000) {
	            $("#summInputIndex").val('17000');
	            current_m = 17000;
	        } else if (current >= 18000 && current < 19000) {
	            $("#summInputIndex").val('18000');
	            current_m = 18000;
	        } else if (current >= 19000 && current < 20000) {
	            $("#summInputIndex").val('19000');
	            current_m = 19000;
	        } else if (current >= 20000 && current < 21000) {
	            $("#summInputIndex").val('20000');
	            current_m = 20000;
	        } else if (current >= 21000 && current < 22000) {
	            $("#summInputIndex").val('21000');
	            current_m = 21000;
	        } else if (current >= 22000 && current < 23000) {
	            $("#summInputIndex").val('22000');
	            current_m = 22000;
	        } else if (current >= 23000 && current < 24000) {
	            $("#summInputIndex").val('23000');
	            current_m = 23000;
	        } else if (current >= 24000 && current < 25000) {
	            $("#summInputIndex").val('24000');
	            current_m = 24000;
	        } else if (current >= 25000 && current < 26000) {
	            $("#summInputIndex").val('25000');
	            current_m = 25000;
	        } else if (current >= 26000 && current < 27000) {
	            $("#summInputIndex").val('26000');
	            current_m = 26000;
	        } else if (current >= 27000 && current < 28000) {
	            $("#summInputIndex").val('27000');
	            current_m = 27000;
	        } else if (current >= 28000 && current < 29000) {
	            $("#summInputIndex").val('28000');
	            current_m = 28000;
	        } else if (current >= 29000 && current < 30000) {
	            $("#summInputIndex").val('29000');
	            current_m = 29000;
	        } else if (current >= 30000 && current < 31000) {
	            $("#summInputIndex").val('30000');
	            current_m = 30000;
	        } else if (current >= 31000 && current < 32000) {
	            $("#summInputIndex").val('31000');
	            current_m = 31000;
	        } else if (current >= 32000 && current < 33000) {
	            $("#summInputIndex").val('32000');
	            current_m = 32000;
	        } else if (current >= 33000 && current < 34000) {
	            $("#summInputIndex").val('33000');
	            current_m = 33000;
	        } else if (current >= 34000 && current < 35000) {
	            $("#summInputIndex").val('34000');
	            current_m = 34000;
	        } else if (current >= 35000 && current < 36000) {
	            $("#summInputIndex").val('35000');
	            current_m = 35000;
	        } else if (current >= 36000 && current < 37000) {
	            $("#summInputIndex").val('36000');
	            current_m = 36000;
	        } else if (current >= 37000 && current < 38000) {
	            $("#summInputIndex").val('37000');
	            current_m = 37000;
	        } else if (current >= 38000 && current < 39000) {
	            $("#summInputIndex").val('38000');
	            current_m = 38000;
	        } else if (current >= 39000 && current < 40000) {
	            $("#summInputIndex").val('39000');
	            current_m = 39000;
	        } else if (current >= 40000 && current < 41000) {
	            $("#summInputIndex").val('40000');
	            current_m = 40000;
	        } else if (current >= 41000 && current < 42000) {
	            $("#summInputIndex").val('41000');
	            current_m = 41000;
	        } else if (current >= 42000 && current < 43000) {
	            $("#summInputIndex").val('42000');
	            current_m = 42000;
	        } else if (current >= 43000 && current < 44000) {
	            $("#summInputIndex").val('43000');
	            current_m = 43000;
	        } else if (current >= 44000 && current < 45000) {
	            $("#summInputIndex").val('44000');
	            current_m = 44000;
	        } else if (current >= 45000 && current < 46000) {
	            $("#summInputIndex").val('45000');
	            current_m = 45000;
	        } else if (current >= 46000 && current < 47000) {
	            $("#summInputIndex").val('46000');
	            current_m = 46000;
	        } else if (current >= 47000 && current < 48000) {
	            $("#summInputIndex").val('47000');
	            current_m = 47000;
	        } else if (current >= 48000 && current < 49000) {
	            $("#summInputIndex").val('48000');
	            current_m = 48000;
	        } else if (current >= 49000 && current < 50000) {
	            $("#summInputIndex").val('49000');
	            current_m = 49000;
	        } else if (current >= 50000) {
	            $("#summInputIndex").val('50000');
	            current_m = 50000;
	        } else if (current > 50000) {
	            current_m = 50000;
	        }



	        $("#summInputIndex").val(current);

	        //$( "#summ" ).slider({'value' : current_m}); // изменения (правки от 20.04.2017)

	        $("#summ").slider({
	            'value': current_m
	        });

	        // Функция summSlide
	        function summSlide(event, ui) {
	            //summ = $('#summ').slider('value');
	            summ = $('#summ').slider('value');
	            time = $('#time').slider('value');
	            calculate(summ, time);
	        }
	        summSlide();
	    }

	    // Функция summSlide
	    function summSlide(event, ui) {
	        summ = ui.value;
	        time = $('#time').slider('value');
	        calculate(summ, time);
	    }
	    // Значение слайдера в переменную
	    var summ = $("#summ").slider("value");
	    // Вывод суммы при загрузке страницы
	    $("#summInputIndex").val(summ);
	    $("#summMainIndex").text(summ);
	    $("input[name=cheapSumm]").val(summ);

	    /******************************************************************************/
		// Срок на главной
	    $("#time").slider({
	        range: "min",
	        min: 1,
	        max: 63,
	        value: 1,
	        slide: timeSlide
	    });

	    // Очищаем поле ввода даты
	    $("#timeInputIndex").on('click', function() {
	        $(this).val('');
	        test = false;
	    });

	    // Выполняем пересчет при событии keypress
	    $("#timeInputIndex").on("keypress", function(e) {
	        if (e.keyCode == 13) {
	            keypressTime();
	            test = true;
	        }
	    });

	    // Выполняем пересчет при событии change
	    $("#timeInputIndex").on("change", function() {
	        if (test != true) {
	            keypressTime();
	        }
	    });

	    // Функция пересчета для change и keypress
	    function keypressTime() {
	        var current = $("#timeInputIndex").val();

	        if (current >= 30 && current < 45) {
	            timeMonth = 30;
	            current = 30;
	        } else if (current >= 45 && current < 75) {
	            timeMonth = 60;
	            current = 34;
	        } else if (current >= 75 && current < 105) {
	            timeMonth = 90;
	            current = 38;
	        } else if (current >= 105 && current < 135) {
	            timeMonth = 120;
	            current = 42;
	        } else if (current >= 135 && current < 165) {
	            timeMonth = 150;
	            current = 46;
	        } else if (current >= 165 && current < 195) {
	            timeMonth = 180;
	            current = 50;
	        } else if (current >= 195 && current < 225) {
	            timeMonth = 210;
	            current = 54;
	        } else if (current >= 225 && current < 255) {
	            timeMonth = 240;
	            current = 58;
	        } else if (current >= 255 && current < 285) {
	            timeMonth = 270;
	            current = 62;
	        } else if (current >= 285) {
	            timeMonth = 300;
	            current = 64;
	        }

	        $("#time").slider({
	            'value': current
	        });

	        function timeSlide() {
	            time = $('#time').slider('value');
	            summ = $('#summ').slider('value');

	            calculate(summ, time);
	        }
	        timeSlide();
	    }

	    // Функция timeSlide
	    function timeSlide(event, ui) {
	        time = ui.value;
	        summ = $('#summ').slider('value');
	        calculate(summ, time);
	    }
	    // Значение слайдера в переменную
	    var time = $("#time").slider("value");
	    var now = moment().add(1, 'day').locale('ru').format('DD MMMM YYYY');
	    // Вывод времени при загрузке страницы
	    $("#timeInputIndex").val(time + ' РґРЅ.');
	    $("input[name=cheapDate]").val(now);

	    // Калькулятор
	    function calculate(summ, time) {

	        // Фикс диапазонов сумм
	        // ?­то уже в последнюю очередь делалось :(


	        /*if(summ > 3000 && summ < 8000) { // комменты (правки от 20.04.2017)
	        	summ = 3000;
	        } else if(summ >= 8000 && summ < 13000){
	        	summ = 4000;
	        } else if(summ >= 13000 && summ < 18000){
	        	summ = 5000;
	        }  else if(summ >= 18000 && summ < 23000){
	        	summ = 6000;
	        }  else if(summ >= 23000 && summ < 28000){
	        	summ = 7000;
	        }  else if(summ >= 28000 && summ < 33000){
	        	summ = 8000;
	        }  else if(summ >= 33000 && summ < 38000){
	        	summ = 9000;
	        }  else if(summ >= 38000 && summ < 42000){ 
	        	summ = 10000;
	        }  else if(summ >= 42000 && summ < 47000){
	        	summ = 11000;
	        }  else if(summ >= 47000 && summ < 52000){
	        	summ = 12000;
	        }  else if(summ >= 52000 && summ < 57000){
	        	summ = 13000;
	        }  else if(summ >= 57000 && summ < 62000){
	        	summ = 14000;
	        }  else if(summ >= 62000 && summ < 67000){
	        	summ = 15000;
	        }  else if(summ >= 67000 && summ < 72000){
	        	summ = 16000;
	        }  else if(summ >= 72000 && summ < 77000){
	        	summ = 17000;
	        }  else if(summ >= 77000 && summ < 82000){
	        	summ = 18000;
	        }  else if(summ >= 82000 && summ < 87000){
	        	summ = 19000;
	        }  else if(summ >= 87000 && summ < 92000){
	        	summ = 20000;
	        }  else if(summ >= 92000 && summ < 97000){
	        	summ = 21000;
	        }  else if(summ >= 97000 && summ < 102000){
	        	summ = 22000;
	        }  else if(summ >= 102000 && summ < 107000){
	        	summ = 23000;
	        }  else if(summ >= 107000 && summ < 112000){
	        	summ = 24000;
	        }  else if(summ >= 112000 && summ < 117000){
	        	summ = 25000;
	        }  else if(summ >= 117000 && summ < 122000){
	        	summ = 26000;
	        }  else if(summ >= 122000 && summ < 127000){
	        	summ = 27000;
	        }  else if(summ >= 12700 && summ < 132000){
	        	summ = 28000;
	        }  else if(summ >= 132000 && summ < 137000){
	        	summ = 29000;
	        } else if(summ >= 137000 && summ < 142000){
	        	summ = 30000;
	        } else if(summ >=142000) {
	        	summ = summ - 112000;
	        }*/

	        // Вывод суммы при прокрутке бегунка
	        $("#summInputIndex").val(summ);
	        $("#summMainIndex").text(summ);
	        $("input[name=cheapSumm]").val(summ);


	        // Отображение срока займа
	        if (time <= 30) {
	            $('#cheap').attr('disabled', 'disabled');
	            timeString = time + ' мес.'; //???
	            // Пересчет даты окончания займа
	            var now = moment().add(time, 'day').locale('ru').format('DD MMMM YYYY');
	            $('.datePostIndex').text(now);
	            $("input[name=cheapDate]").val(now);
	        } else if (time > 30 && time < 35) {
	            timeString = '2 мес.';
	            var now = moment().add(60, 'day').locale('ru').format('DD MMMM YYYY');
	            $('.datePostIndex').text(now);
	            $("input[name=cheapDate]").val(now);
	        } else if (time > 34 && time < 39) {
	            timeString = '3 мес.';
	            var now = moment().add(90, 'day').locale('ru').format('DD MMMM YYYY');
	            $('.datePostIndex').text(now);
	            $("input[name=cheapDate]").val(now);
	        } else if (time > 38 && time < 43) {
	            timeString = '4 мес.';
	            var now = moment().add(120, 'day').locale('ru').format('DD MMMM YYYY');
	            $('.datePostIndex').text(now);
	            $("input[name=cheapDate]").val(now);
	        } else if (time > 42 && time < 47) {
	            timeString = '5 мес.';
	            var now = moment().add(150, 'day').locale('ru').format('DD MMMM YYYY');
	            $('.datePostIndex').text(now);
	            $("input[name=cheapDate]").val(now);
	        } else if (time > 46 && time < 51) {
	            timeString = '6 мес.';
	            var now = moment().add(180, 'day').locale('ru').format('DD MMMM YYYY');
	            $('.datePostIndex').text(now);
	            $("input[name=cheapDate]").val(now);
	        } else if (time > 50 && time < 55) {
	            timeString = '7 мес.';
	            var now = moment().add(210, 'day').locale('ru').format('DD MMMM YYYY');
	            $('.datePostIndex').text(now);
	            $("input[name=cheapDate]").val(now);
	        } else if (time > 54 && time < 59) {
	            timeString = '8 мес.';
	            var now = moment().add(240, 'day').locale('ru').format('DD MMMM YYYY');
	            $('.datePostIndex').text(now);
	            $("input[name=cheapDate]").val(now);
	        } else if (time > 58 && time < 63) {
	            timeString = '9 мес.';
	            var now = moment().add(270, 'day').locale('ru').format('DD MMMM YYYY');
	            $('.datePostIndex').text(now);
	            $("input[name=cheapDate]").val(now);
	        } else if (time > 62) {
	            timeString = '10 мес.';
	            var now = moment().add(300, 'day').locale('ru').format('DD MMMM YYYY');
	            $('.datePostIndex').text(now);
	            $("input[name=cheapDate]").val(now);
	        }

	        $('#timeInputIndex').val(timeString);

			// Отображение платежа в месяц
	        // var summ = $("#summ").slider(ui.value);
	        var timeMonth;

	        if (time > 30 && time < 35) {
	            timeMonth = 60;
	        } else if (time > 34 && time < 39) {
	            timeMonth = 90;
	        } else if (time > 38 && time < 43) {
	            timeMonth = 120;
	        } else if (time > 42 && time < 47) {
	            timeMonth = 150;
	        } else if (time > 46 && time < 51) {
	            timeMonth = 180;
	        } else if (time > 50 && time < 55) {
	            timeMonth = 210;
	        } else if (time > 54 && time < 59) {
	            timeMonth = 240;
	        } else if (time > 58 && time < 63) {
	            timeMonth = 270;
	        } else if (time > 62) {
	            timeMonth = 300;
	        }



	        // визуальный фикс на калькулятор (правки от 20.04.2017)
	        if ((summ > 10000) && (summ < 15000)) {
	            $('.calc-button').prop('disabled', true);
	            $('.prfix').slideUp('slow');
	            $('.nomanyy').slideDown('slow');
	        } else if ((summ > 30000) && (summ < 35000)) {
	            $('.calc-button').prop('disabled', true);
	            $('.prfix').slideUp('slow');
	            $('.nomanyy').slideDown('slow');
	        } else {
	            $('.calc-button').prop('disabled', false);
	            $('.nomanyy').slideUp('slow');
	            $('.prfix').slideDown('slow');
	        }


	        if (time <= 30) {
	            if (summ < 15000) {
	                var result = (time * (23 / 30) * summ) / 100 + summ;
	            } else if ((summ >= 15000) && (summ < 35000)) {
	                var result = (time * (15 / 30) * summ) / 100 + summ;
	            } else if ((summ >= 35000)) {
	                var result = (time * (12 / 30) * summ) / 100 + summ;
	            }
	        } else {
	            if (summ < 15000) {
	                var result = (time * (23 / 30) * summ) / 100 + summ;
	            } else if ((summ >= 15000) && (summ < 35000)) {
	                var result = (time * (15 / 30) * summ) / 100 + summ;
	            } else if ((summ >= 35000)) {
	                var result = (time * (12 / 30) * summ) / 100 + summ;
	            }
	        }

	        if (time <= 30) {
	            result = Math.round(parseInt(result));
	        } else if (time > 30 && time < 35) {
	            $('#cheap').removeAttr('disabled');
	            result = (Math.round(parseInt(result / 2)));
	        } else if (time > 34 && time < 39) {
	            $('#cheap').removeAttr('disabled');
	            result = (Math.round(parseInt(result / 3)));
	        } else if (time > 38 && time < 43) {
	            $('#cheap').removeAttr('disabled');
	            result = (Math.round(parseInt(result / 4)));
	        } else if (time > 42 && time < 47) {
	            $('#cheap').removeAttr('disabled');
	            result = (Math.round(parseInt(result / 5)));
	        } else if (time > 46 && time < 51) {
	            $('#cheap').removeAttr('disabled');
	            result = (Math.round(parseInt(result / 6)));
	        } else if (time > 50 && time < 55) {
	            $('#cheap').removeAttr('disabled');
	            result = (Math.round(parseInt(result / 7)));
	        } else if (time > 54 && time < 59) {
	            $('#cheap').removeAttr('disabled');
	            result = (Math.round(parseInt(result / 8)));
	        } else if (time > 58 && time < 63) {
	            $('#cheap').removeAttr('disabled');
	            result = (Math.round(parseInt(result / 9)));
	        } else if (time > 62) {
	            $('#cheap').removeAttr('disabled');
	            result = (Math.round(parseInt(result / 10)));
	        }
	        console.log("1");
	        $('#resultInMonth').text(result);

	    }






	    /******************************************************************************/
	    // Сумма на странице Хочу дешевле
	    $("#summpage").slider({
	        range: "min",
	        min: 3000,
	        max: 412000,
	        step: 1000,
	        value: 3000,
	        slide: summSlideCheap
	    });

	    // Очищаем поле ввода суммы при клике
	    $("#summInput").on('click', function() {
	        $(this).val('');
	    });

	    // Выполняем пересчет при событии change
	    $("#summInput").on("change", function() {
	        keypressSummCheap();
	    });

	    // Выполняем пересчет при событии keypress
	    $("#summInput").on("keypress", function(e) {
	        if (e.keyCode == 13) {
	            keypressSummCheap();
	        }
	    });


	    // Функция пересчета для событий change и keypress
	    function keypressSummCheap() {
	        var current = $("#summInput").val();

	        // Переопределение сумм
	        if (current >= 0 && current < 3500) {
	            $("#summInput").val('3000');
	            current_m = 3000;
	        } else if (current >= 3500 && current < 4500) {
	            $("#summInput").val('4000');
	            current_m = 8000;
	        } else if (current >= 4500 && current < 5500) {
	            $("#summInput").val('5000');
	            current_m = 13000;
	        } else if (current >= 5500 && current < 6500) {
	            $("#summInput").val('6000');
	            current_m = 18000;
	        } else if (current >= 6500 && current < 7500) {
	            $("#summInput").val('7000');
	            current_m = 23000;
	        } else if (current >= 7500 && current < 8500) {
	            $("#summInput").val('8000');
	            current_m = 28000;
	        } else if (current >= 8500 && current < 9500) {
	            $("#summInput").val('9000');
	            current_m = 33000;
	        } else if (current >= 9500 && current < 10500) {
	            $("#summInput").val('10000');
	            current_m = 38000;
	        } else if (current >= 10500 && current < 11500) {
	            $("#summInput").val('11000');
	            current_m = 43000;
	        } else if (current >= 11500 && current < 12500) {
	            $("#summInput").val('12000');
	            current_m = 48000;
	        } else if (current >= 12500 && current < 13500) {
	            $("#summInput").val('13000');
	            current_m = 53000;
	        } else if (current >= 13500 && current < 14500) {
	            $("#summInput").val('14000');
	            current_m = 58000;
	        } else if (current >= 14500 && current < 15500) {
	            $("#summInput").val('15000');
	            current_m = 63000;
	        } else if (current >= 15500 && current < 16500) {
	            $("#summInput").val('16000');
	            current_m = 68000;
	        } else if (current >= 16500 && current < 17500) {
	            $("#summInput").val('17000');
	            current_m = 73000;
	        } else if (current >= 17500 && current < 18500) {
	            $("#summInput").val('18000');
	            current_m = 78000;
	        } else if (current >= 18500 && current < 19500) {
	            $("#summInput").val('19000');
	            current_m = 83000;
	        } else if (current >= 19500 && current < 20500) {
	            $("#summInput").val('20000');
	            current_m = 88000;
	        } else if (current >= 20500 && current < 21500) {
	            $("#summInput").val('21000');
	            current_m = 93000;
	        } else if (current >= 21500 && current < 22500) {
	            $("#summInput").val('22000');
	            current_m = 98000;
	        } else if (current >= 22500 && current < 23500) {
	            $("#summInput").val('23000');
	            current_m = 103000;
	        } else if (current >= 23500 && current < 24500) {
	            $("#summInput").val('24000');
	            current_m = 108000;
	        } else if (current >= 24500 && current < 25500) {
	            $("#summInput").val('25000');
	            current_m = 113000;
	        } else if (current >= 25500 && current < 26500) {
	            $("#summInput").val('26000');
	            current_m = 118000;
	        } else if (current >= 26500 && current < 27500) {
	            $("#summInput").val('27000');
	            current_m = 123000;
	        } else if (current >= 27500 && current < 28500) {
	            $("#summInput").val('28000');
	            current_m = 128000;
	        } else if (current >= 28500 && current < 29500) {
	            $("#summInput").val('29000');
	            current_m = 133000;
	        } else if (current >= 29500 && current < 31500) {
	            $("#summInput").val('30000');
	            current_m = 138000;
	        } else if (current > 30000) {
	            current_m = parseInt(current) + 112000;
	        }

	        $("#summpage").slider({
	            'value': current_m
	        });

	        // Функция summSlideCheap
	        function summSlideCheap(event, ui) {
	            summ = $('#summpage').slider('value');
	            time = $('#timepage').slider('value');
	            calculateCheap(summ, time);
	        }
	        summSlideCheap();
	    }


	    // Функция summSlideCheap
	    function summSlideCheap(event, ui) {
	        summ = ui.value;
	        time = $('#timepage').slider('value');
	        calculateCheap(summ, time);
	    }

	    // Значение слайдера в переменную
	    var summ = $("#summpage").slider("value");
	    // Вывод суммы при загрузке страницы
	    $("#summInput").val(summ);
	    $("#summMain").text(summ);


	    /******************************************************************************/
	    // Срок на странице Хочу дешевле
	    $("#timepage").slider({
	        range: "min",
	        min: 1,
	        max: 63,
	        value: 1,
	        slide: timeSlideCheap
	    });

	    // Очищаем поле ввода даты
	    $("#timeInput").on('click', function() {
	        $(this).val('');
	        test = false;
	    });

	    // Выполняем пересчет при событии keypress
	    $("#timeInput").on("keypress", function(e) {
	        if (e.keyCode == 13) {
	            keypressTimeCheap();
	            test = true;
	        }
	    });

		// Выполняем пересчет при событии change
	    $("#timeInput").on("change", function() {
	        if (test != true) {
	            keypressTimeCheap();
	        }
	    });

	    // Функция пересчета для change и keypress
	    function keypressTimeCheap() {
	        var current = $("#timeInput").val();

	        if (current >= 30 && current < 45) {
	            timeMonth = 30;
	            current = 30;
	        } else if (current >= 45 && current < 75) {
	            timeMonth = 60;
	            current = 34;
	        } else if (current >= 75 && current < 105) {
	            timeMonth = 90;
	            current = 38;
	        } else if (current >= 105 && current < 135) {
	            timeMonth = 120;
	            current = 42;
	        } else if (current >= 135 && current < 165) {
	            timeMonth = 150;
	            current = 46;
	        } else if (current >= 165 && current < 195) {
	            timeMonth = 180;
	            current = 50;
	        } else if (current >= 195 && current < 225) {
	            timeMonth = 210;
	            current = 54;
	        } else if (current >= 225 && current < 255) {
	            timeMonth = 240;
	            current = 58;
	        } else if (current >= 255 && current < 285) {
	            timeMonth = 270;
	            current = 62;
	        } else if (current >= 285) {
	            timeMonth = 300;
	            current = 64;
	        }

	        $("#timepage").slider({
	            'value': current
	        });

	        function timeSlideCheap() {
	            time = $('#timepage').slider('value');
	            summ = $('#summpage').slider('value');

	            calculateCheap(summ, time);
	        }
	        timeSlideCheap();
	    }

	    // Функция timeSlideCheap
	    function timeSlideCheap(event, ui) {
	        time = ui.value;
	        summ = $('#summpage').slider('value');
	        calculateCheap(summ, time);
	    }

	    // Значение слайдера в переменную
	    var time = $("#timepage").slider("value");
	    $(".page-cheap .mainsummcheap").val(summ);
	    // Вывод времени при загрузке страницы
	    $("#timeInput").val(time);
	    $('#debt .summMonth, #health .summMonth, #feast .summMonth, #education .summMonth').text('3029');
	    $('#auto .summMonth, #build .summMonth, #rest .summMonth').text('3027');
	    $('#businnes .summMonth').text('3026');
	    $('#pensioner .summMonth').text('3015');


	    // Калькулятор Cheap
	    function calculateCheap(summCheap, timeCheap) {
	        if (summCheap > 3000 && summCheap < 8000) {
	            summCheap = 3000;
	        } else if (summCheap >= 8000 && summCheap < 13000) {
	            summCheap = 4000;
	        } else if (summCheap >= 13000 && summCheap < 18000) {
	            summCheap = 5000;
	        } else if (summCheap >= 18000 && summCheap < 23000) {
	            summCheap = 6000;
	        } else if (summCheap >= 23000 && summCheap < 28000) {
	            summCheap = 7000;
	        } else if (summCheap >= 28000 && summCheap < 33000) {
	            summCheap = 8000;
	        } else if (summCheap >= 33000 && summCheap < 38000) {
	            summCheap = 9000;
	        } else if (summCheap >= 38000 && summCheap < 42000) {
	            summCheap = 10000;
	        } else if (summCheap >= 42000 && summCheap < 47000) {
	            summCheap = 11000;
	        } else if (summCheap >= 47000 && summCheap < 52000) {
	            summCheap = 12000;
	        } else if (summCheap >= 52000 && summCheap < 57000) {
	            summCheap = 13000;
	        } else if (summCheap >= 57000 && summCheap < 62000) {
	            summCheap = 14000;
	        } else if (summCheap >= 62000 && summCheap < 67000) {
	            summCheap = 15000;
	        } else if (summCheap >= 67000 && summCheap < 72000) {
	            summCheap = 16000;
	        } else if (summCheap >= 72000 && summCheap < 77000) {
	            summCheap = 17000;
	        } else if (summCheap >= 77000 && summCheap < 82000) {
	            summCheap = 18000;
	        } else if (summCheap >= 82000 && summCheap < 87000) {
	            summCheap = 19000;
	        } else if (summCheap >= 87000 && summCheap < 92000) {
	            summCheap = 20000;
	        } else if (summCheap >= 92000 && summCheap < 97000) {
	            summCheap = 21000;
	        } else if (summCheap >= 97000 && summCheap < 102000) {
	            summCheap = 22000;
	        } else if (summCheap >= 102000 && summCheap < 107000) {
	            summCheap = 23000;
	        } else if (summCheap >= 107000 && summCheap < 112000) {
	            summCheap = 24000;
	        } else if (summCheap >= 112000 && summCheap < 117000) {
	            summCheap = 25000;
	        } else if (summCheap >= 117000 && summCheap < 122000) {
	            summCheap = 26000;
	        } else if (summCheap >= 122000 && summCheap < 127000) {
	            summCheap = 27000;
	        } else if (summCheap >= 12700 && summCheap < 132000) {
	            summCheap = 28000;
	        } else if (summCheap >= 132000 && summCheap < 137000) {
	            summCheap = 29000;
	        } else if (summCheap >= 137000 && summCheap < 142000) {
	            summCheap = 30000;
	        } else if (summCheap >= 142000) {
	            summCheap = summCheap - 112000;
	        }

	        var summ = summCheap;
	        var time = timeCheap;
	        // Вывод суммы при прокрутке бегунка
	        $("#summInput").val(summ);
	        $("#summMain").text(summ);
	        var now = moment().add(time, 'day').locale('ru').format('DD MMMM YYYY');
	        $('input[name=cheapDate]').val(now);

	        // Отображение срока займа       
	        if (time <= 30) {
	            $('#cheap').attr('disabled', 'disabled');
	            timeString = time + ' РґРЅ.';
				// Пересчет даты окончания займа
	            var now = moment().add(time, 'day').locale('ru').format('DD MMMM YYYY');
	            $('.datePost').text(now);
	            $("input[name=cheapDate]").val(now);
	        } else if (time > 30 && time < 35) {
	            timeString = '2 РјРµСЃ.';
	            // Пересчет даты окончания займа
	            var now = moment().add(60, 'day').locale('ru').format('DD MMMM YYYY');
	            $('.datePost').text(now);
	            $("input[name=cheapDate]").val(now);
	        } else if (time > 34 && time < 39) {
	            timeString = '3 РјРµСЃ.';
	            // Пересчет даты окончания займа
	            var now = moment().add(90, 'day').locale('ru').format('DD MMMM YYYY');
	            $('.datePost').text(now);
	            $("input[name=cheapDate]").val(now);
	        } else if (time > 38 && time < 43) {
	            timeString = '4 РјРµСЃ.';
	            // Пересчет даты окончания займа
	            var now = moment().add(120, 'day').locale('ru').format('DD MMMM YYYY');
	            $('.datePost').text(now);
	            $("input[name=cheapDate]").val(now);
	        } else if (time > 42 && time < 47) {
	            timeString = '5 РјРµСЃ.';
	            // Пересчет даты окончания займа
	            var now = moment().add(150, 'day').locale('ru').format('DD MMMM YYYY');
	            $('.datePost').text(now);
	            $("input[name=cheapDate]").val(now);
	        } else if (time > 46 && time < 51) {
	            timeString = '6 РјРµСЃ.';
	            // Пересчет даты окончания займа
	            var now = moment().add(180, 'day').locale('ru').format('DD MMMM YYYY');
	            $('.datePost').text(now);
	            $("input[name=cheapDate]").val(now);
	        } else if (time > 50 && time < 55) {
	            timeString = '7 РјРµСЃ.';
	            // Пересчет даты окончания займа
	            var now = moment().add(210, 'day').locale('ru').format('DD MMMM YYYY');
	            $('.datePost').text(now);
	            $("input[name=cheapDate]").val(now);
	        } else if (time > 54 && time < 59) {
	            timeString = '8 РјРµСЃ.';
	            // Пересчет даты окончания займа
	            var now = moment().add(240, 'day').locale('ru').format('DD MMMM YYYY');
	            $('.datePost').text(now);
	            $("input[name=cheapDate]").val(now);
	        } else if (time > 58 && time < 63) {
	            timeString = '9 РјРµСЃ.';
	            // Пересчет даты окончания займа
	            var now = moment().add(270, 'day').locale('ru').format('DD MMMM YYYY');
	            $('.datePost').text(now);
	            $("input[name=cheapDate]").val(now);
	        } else if (time > 62) {
	            timeString = '10 РјРµСЃ.';
	            // Пересчет даты окончания займа
	            var now = moment().add(300, 'day').locale('ru').format('DD MMMM YYYY');
	            $('.datePost').text(now);
	            $("input[name=cheapDate]").val(now);
	        }

	        $('#timeInput').val(timeString);

	        // Отображение платежа в месяц
	        if (summ < 15000) {
	            var result = (time * (23 / 30) * summ) / 100 + summ;
	        } else if (summ >= 15000 || summ <= 3000) {
	            var result = (time * (15 / 30) * summ) / 100 + summ;
	        } else if (summ >= 35000) {
	            var result = (time * (12 / 30) * summ) / 100 + summ;
	        }


	        //фикс для промежутков хочу дешевле
	        if (((summ >= 3000) && (summ <= 8000))) {
	            $('#debt, #rest, #auto, #health, #build, #feast, #education, #businnes').stop(150).slideDown('slow');
	            console.log('3000-8000');
	        } else if (((summ == 10000))) {
	            $('#debt, #rest, #auto, #health, #build, #feast, #education, #businnes').stop(150).slideDown('slow');
	            console.log('10000');
	        } else if (((summ >= 15000) && (summ <= 30000))) {
	            $('#debt, #rest, #auto, #health, #build, #feast, #education, #businnes').stop(150).slideDown('slow');
	            console.log('15000-30000');
	        } else if (((summ >= 35000) && (summ <= 50000))) {
	            $('#debt, #rest, #auto, #health, #build, #feast, #education, #businnes').stop(150).slideDown('slow');
	            console.log('35000-50000');
	        } else if (((summ >= 60000) && (summ <= 100000))) {
	            $('#debt, #rest, #auto, #health, #build, #feast, #education, #businnes').stop(150).slideDown('slow');
	            console.log('60000-100000');
	        } else if (((summ >= 99999))) {
	            $('#debt, #rest, #auto, #health, #build, #feast, #education').stop(150).slideUp('slow');
	            $('#businnes').stop(150).slideDown('slow');
	            console.log('60000-300000');
	        } else {
	            $('#debt, #rest, #auto, #health, #build, #feast, #education, #businnes').stop(150).slideUp('slow')
	            console.log('No');
	        }

	        if ((summ > 20000) || (time > 240)) {
	            $('#pensioner').stop(150).slideUp('slow');
	        } else {
	            $('#pensioner').stop(150).slideDown('slow');
	        }


	        // Сумма для оформления заказа
	        $('input[name="cheapSumm"]').val(summ);

	        // Пересчет суммы платежа в месяц
	        if (summ >= 3000 && summ <= 8000) {
	            if (time > 30) {
	                if (time > 30 && time < 35) {
	                    time = 2;
	                    days = 60;
	                } else if (time > 34 && time < 39) {
	                    time = 3;
	                    days = 90;
	                } else if (time > 38 && time < 43) {
	                    time = 4;
	                    days = 120;
	                } else if (time > 42 && time < 47) {
	                    time = 5;
	                    days = 150;
	                } else if (time > 46 && time < 51) {
	                    time = 6;
	                    days = 180;
	                } else if (time > 50 && time < 55) {
	                    time = 7;
	                    days = 210;
	                } else if (time > 54 && time < 59) {
	                    time = 8;
	                    days = 240;
	                } else if (time > 58 && time < 63) {
	                    time = 9;
	                    days = 270;
	                } else if (time > 62) {
	                    time = 10;
	                    days = 300;
	                }

	                var debt = (time * 30 * (28.9 / 30) * summ) / 100 + summ;
	                debt = Math.round(debt / time);
	                $('#debt .summMonth, #health .summMonth, #feast .summMonth, #education .summMonth').text(debt);
	                /*$('#debt input[name="cheapSumm"], #health input[name="cheapSumm"], #feast input[name="cheapSumm"], #education input[name="cheapSumm"]').val(debt);*/

	                var auto = (time * 30 * (27.2 / 30) * summ) / 100 + summ;
	                auto = Math.round(auto / time);
	                $('#auto .summMonth, #build .summMonth, #rest .summMonth').text(auto);
	                /*$('#auto input[name="cheapSumm"], #build input[name="cheapSumm"], #rest input[name="cheapSumm"]').val(auto);*/

	                var bus = (time * 30 * (25.5 / 30) * summ) / 100 + summ;
	                bus = Math.round(bus / time);
	                $('#businnes .summMonth').text(bus);
	                /*$('#businnes input[name="cheapSumm"]').val(bus);*/

	                var pen = (time * 30 * (15 / 30) * summ) / 100 + summ;
	                pen = Math.round(pen / time);
	                $('#pensioner .summMonth').text(pen);
	                /*$('#pensioner input[name="cheapSumm"]').val(pen);*/
	            } else {
	                var debt = (time * (28.9 / 30) * summ) / 100 + summ;
	                debt = Math.round(debt);
	                $('#debt .summMonth, #health .summMonth, #feast .summMonth, #education .summMonth').text(debt);
	                /*$('#debt input[name="cheapSumm"], #health input[name="cheapSumm"], #feast input[name="cheapSumm"], #education input[name="cheapSumm"]').val(debt);*/

	                var auto = (time * (27.2 / 30) * summ) / 100 + summ;
	                auto = Math.round(auto);
	                $('#auto .summMonth, #build .summMonth, #rest .summMonth').text(auto);
	                /*$('#auto input[name="cheapSumm"], #build input[name="cheapSumm"], #rest input[name="cheapSumm"]').val(auto);*/

	                var bus = (time * (25.5 / 30) * summ) / 100 + summ;
	                bus = Math.round(bus);
	                $('#businnes .summMonth').text(bus);
	                /*$('#businnes input[name="cheapSumm"]').val(bus);*/

	                var pen = (time * (15 / 30) * summ) / 100 + summ;
	                pen = Math.round(pen);
	                $('#pensioner .summMonth').text(pen);
	                /*$('#pensioner input[name="cheapSumm"]').val(pen);*/
	            }
	        } else if (summ == 9000) {
	            if (time > 30) {
	                if (time > 30 && time < 35) {
	                    time = 2;
	                } else if (time > 34 && time < 39) {
	                    time = 3;
	                } else if (time > 38 && time < 43) {
	                    time = 4;
	                } else if (time > 42 && time < 47) {
	                    time = 5;
	                } else if (time > 46 && time < 51) {
	                    time = 6;
	                } else if (time > 50 && time < 55) {
	                    time = 7;
	                } else if (time > 54 && time < 59) {
	                    time = 8;
	                } else if (time > 58 && time < 63) {
	                    time = 9;
	                } else if (time > 62) {
	                    time = 10;
	                }

	                var pen = (time * 30 * (15 / 30) * summ) / 100 + summ;
	                pen = Math.round(pen / time);
	                $('#pensioner .summMonth').text(pen);
	                /*$('#pensioner input[name="cheapSumm"]').val(pen);*/

	            } else {

	                var pen = (time * (15 / 30) * summ) / 100 + summ;
	                pen = Math.round(pen);
	                $('#pensioner .summMonth').text(pen);
	                /*$('#pensioner input[name="cheapSumm"]').val(pen);*/
	            }
	        } else if (summ >= 10000 && summ < 15000) {
	            if (time > 30) {
	                if (time > 30 && time < 35) {
	                    time = 2;
	                } else if (time > 34 && time < 39) {
	                    time = 3;
	                } else if (time > 38 && time < 43) {
	                    time = 4;
	                } else if (time > 42 && time < 47) {
	                    time = 5;
	                } else if (time > 46 && time < 51) {
	                    time = 6;
	                } else if (time > 50 && time < 55) {
	                    time = 7;
	                } else if (time > 54 && time < 59) {
	                    time = 8;
	                } else if (time > 58 && time < 63) {
	                    time = 9;
	                } else if (time > 62) {
	                    time = 10;
	                }

	                var debt = (time * 30 * (19.5 / 30) * summ) / 100 + summ;
	                debt = Math.round(debt / time);
	                $('#debt .summMonth, #health .summMonth, #feast .summMonth, #education .summMonth').text(debt);
	                /*$('#debt input[name="cheapSumm"], #health input[name="cheapSumm"], #feast input[name="cheapSumm"], #education input[name="cheapSumm"]').val(debt);*/

	                var auto = (time * 30 * (18.4 / 30) * summ) / 100 + summ;
	                auto = Math.round(auto / time);
	                $('#auto .summMonth, #build .summMonth, #rest .summMonth').text(auto);
	                /*$('#auto input[name="cheapSumm"], #build input[name="cheapSumm"], #rest input[name="cheapSumm"]').val(auto);*/

	                var bus = (time * 30 * (17.2 / 30) * summ) / 100 + summ;
	                bus = Math.round(bus / time);
	                $('#businnes .summMonth').text(bus);
	                /*$('#businnes input[name="cheapSumm"]').val(bus);*/

	                var pen = (time * 30 * (15 / 30) * summ) / 100 + summ;
	                pen = Math.round(pen / time);
	                $('#pensioner .summMonth').text(pen);
	                /*$('#pensioner input[name="cheapSumm"]').val(pen);*/
	            } else {
	                var debt = (time * (19.5 / 30) * summ) / 100 + summ;
	                debt = Math.round(debt);
	                $('#debt .summMonth, #health .summMonth, #feast .summMonth, #education .summMonth').text(debt);
	                /*$('#debt input[name="cheapSumm"], #health input[name="cheapSumm"], #feast input[name="cheapSumm"], #education input[name="cheapSumm"]').val(debt);*/

	                var auto = (time * (18.4 / 30) * summ) / 100 + summ;
	                auto = Math.round(auto);
	                $('#auto .summMonth, #build .summMonth, #rest .summMonth').text(auto);
	                /*$('#auto input[name="cheapSumm"], #build input[name="cheapSumm"], #rest input[name="cheapSumm"]').val(auto);*/

	                var bus = (time * (17.2 / 30) * summ) / 100 + summ;
	                bus = Math.round(bus);
	                $('#businnes .summMonth').text(bus);
	                /*$('#businnes input[name="cheapSumm"]').val(bus);*/

	                var pen = (time * (15 / 30) * summ) / 100 + summ;
	                pen = Math.round(pen);
	                $('#pensioner .summMonth').text(pen);
	                /*$('#pensioner input[name="cheapSumm"]').val(pen);*/
	            }
	        } else if (summ >= 15000 && summ <= 20000) {
	            if (time > 30) {
	                if (time > 30 && time < 35) {
	                    time = 2;
	                } else if (time > 34 && time < 39) {
	                    time = 3;
	                } else if (time > 38 && time < 43) {
	                    time = 4;
	                } else if (time > 42 && time < 47) {
	                    time = 5;
	                } else if (time > 46 && time < 51) {
	                    time = 6;
	                } else if (time > 50 && time < 55) {
	                    time = 7;
	                } else if (time > 54 && time < 59) {
	                    time = 8;
	                } else if (time > 58 && time < 63) {
	                    time = 9;
	                } else if (time > 62) {
	                    time = 10;
	                }

	                var pen = (time * 30 * (15 / 30) * summ) / 100 + summ;
	                pen = Math.round(pen / time);
	                $('#pensioner .summMonth').text(pen);
	                /*$('#pensioner input[name="cheapSumm"]').val(pen);*/

	                var debt = (time * 30 * (12.8 / 30) * summ) / 100 + summ;
	                debt = Math.round(debt / time);
	                $('#debt .summMonth, #health .summMonth, #feast .summMonth, #education .summMonth').text(debt);
	                /*$('#debt input[name="cheapSumm"], #health input[name="cheapSumm"], #feast input[name="cheapSumm"], #education input[name="cheapSumm"]').val(debt);*/

	                var auto = (time * 30 * (12 / 30) * summ) / 100 + summ;
	                auto = Math.round(auto / time);
	                $('#auto .summMonth, #build .summMonth, #rest .summMonth').text(auto);
	                /*$('#auto input[name="cheapSumm"], #build input[name="cheapSumm"], #rest input[name="cheapSumm"]').val(auto);*/

	                var bus = (time * 30 * (11.2 / 30) * summ) / 100 + summ;
	                bus = Math.round(bus / time);
	                $('#businnes .summMonth').text(bus);
	                /*$('#businnes input[name="cheapSumm"]').val(bus);*/

	            } else {

	                var pen = (time * (15 / 30) * summ) / 100 + summ;
	                pen = Math.round(pen);
	                $('#pensioner .summMonth').text(pen);
	                /*$('#pensioner input[name="cheapSumm"]').val(pen);*/

	                var debt = (time * (12.8 / 30) * summ) / 100 + summ;
	                debt = Math.round(debt);
	                $('#debt .summMonth, #health .summMonth, #feast .summMonth, #education .summMonth').text(debt);
	                /*$('#debt input[name="cheapSumm"], #health input[name="cheapSumm"], #feast input[name="cheapSumm"], #education input[name="cheapSumm"]').val(debt);*/

	                var auto = (time * (12 / 30) * summ) / 100 + summ;
	                auto = Math.round(auto);
	                $('#auto .summMonth, #build .summMonth, #rest .summMonth').text(auto);
	                /*$('#auto input[name="cheapSumm"], #build input[name="cheapSumm"], #rest input[name="cheapSumm"]').val(auto);*/

	                var bus = (time * (11.2 / 30) * summ) / 100 + summ;
	                bus = Math.round(bus);
	                $('#businnes .summMonth').text(bus);
	                /*$('#businnes input[name="cheapSumm"]').val(bus);*/
	            }
	        } else if (summ >= 15000 && summ <= 30000) {
	            $('#pensioner .summMonth').text('Не доступно');
	            if (time > 30) {
	                if (time > 30 && time < 35) {
	                    time = 2;
	                } else if (time > 34 && time < 39) {
	                    time = 3;
	                } else if (time > 38 && time < 43) {
	                    time = 4;
	                } else if (time > 42 && time < 47) {
	                    time = 5;
	                } else if (time > 46 && time < 51) {
	                    time = 6;
	                } else if (time > 50 && time < 55) {
	                    time = 7;
	                } else if (time > 54 && time < 59) {
	                    time = 8;
	                } else if (time > 58 && time < 63) {
	                    time = 9;
	                } else if (time > 62) {
	                    time = 10;
	                }



	                var debt = (time * 30 * (12.8 / 30) * summ) / 100 + summ;
	                debt = Math.round(debt / time);
	                $('#debt .summMonth, #health .summMonth, #feast .summMonth, #education .summMonth').text(debt);
	                /*$('#debt input[name="cheapSumm"], #health input[name="cheapSumm"], #feast input[name="cheapSumm"], #education input[name="cheapSumm"]').val(debt);*/

	                var auto = (time * 30 * (12 / 30) * summ) / 100 + summ;
	                auto = Math.round(auto / time);
	                $('#auto .summMonth, #build .summMonth, #rest .summMonth').text(auto);
	                /*$('#auto input[name="cheapSumm"], #build input[name="cheapSumm"], #rest input[name="cheapSumm"]').val(auto);*/

	                var bus = (time * 30 * (11.2 / 30) * summ) / 100 + summ;
	                bus = Math.round(bus / time);
	                $('#businnes .summMonth').text(bus);
	                /*$('#businnes input[name="cheapSumm"]').val(bus);*/
	            } else {
	                var debt = (time * (12.8 / 30) * summ) / 100 + summ;
	                debt = Math.round(debt);
	                $('#debt .summMonth, #health .summMonth, #feast .summMonth, #education .summMonth').text(debt);
	                /*$('#debt input[name="cheapSumm"], #health input[name="cheapSumm"], #feast input[name="cheapSumm"], #education input[name="cheapSumm"]').val(debt);*/

	                var auto = (time * (12 / 30) * summ) / 100 + summ;
	                auto = Math.round(auto);
	                $('#auto .summMonth, #build .summMonth, #rest .summMonth').text(auto);
	                /*$('#auto input[name="cheapSumm"], #build input[name="cheapSumm"], #rest input[name="cheapSumm"]').val(auto);*/

	                var bus = (time * (11.2 / 30) * summ) / 100 + summ;
	                bus = Math.round(bus);
	                $('#businnes .summMonth').text(bus);
	                /*$('#businnes input[name="cheapSumm"]').val(bus);*/
	            }
	        } else if (summ >= 35000 && summ <= 50000) {
	            $('#pensioner .summMonth').text('Не доступно');
	            if (time > 30) {
	                if (time > 30 && time < 35) {
	                    time = 2;
	                } else if (time > 34 && time < 39) {
	                    time = 3;
	                } else if (time > 38 && time < 43) {
	                    time = 4;
	                } else if (time > 42 && time < 47) {
	                    time = 5;
	                } else if (time > 46 && time < 51) {
	                    time = 6;
	                } else if (time > 50 && time < 55) {
	                    time = 7;
	                } else if (time > 54 && time < 59) {
	                    time = 8;
	                } else if (time > 58 && time < 63) {
	                    time = 9;
	                } else if (time > 62) {
	                    time = 10;
	                }

	                var debt = (time * 30 * (10.2 / 30) * summ) / 100 + summ;
	                debt = Math.round(debt / time);
	                $('#debt .summMonth, #health .summMonth, #feast .summMonth, #education .summMonth').text(debt);
	                /*$('#debt input[name="cheapSumm"], #health input[name="cheapSumm"], #feast input[name="cheapSumm"], #education input[name="cheapSumm"]').val(debt);*/

	                var auto = (time * 30 * (9.6 / 30) * summ) / 100 + summ;
	                auto = Math.round(auto / time);
	                $('#auto .summMonth, #build .summMonth, #rest .summMonth').text(auto);
	                /*$('#auto input[name="cheapSumm"], #build input[name="cheapSumm"], #rest input[name="cheapSumm"]').val(auto);*/

	                var bus = (time * 30 * (9 / 30) * summ) / 100 + summ;
	                bus = Math.round(bus / time);
	                $('#businnes .summMonth').text(bus);
	                /*$('#businnes input[name="cheapSumm"]').val(bus);*/
	            } else {
	                var debt = (time * (10.2 / 30) * summ) / 100 + summ;
	                debt = Math.round(debt);
	                $('#debt .summMonth, #health .summMonth, #feast .summMonth, #education .summMonth').text(debt);
	                /*$('#debt input[name="cheapSumm"], #health input[name="cheapSumm"], #feast input[name="cheapSumm"], #education input[name="cheapSumm"]').val(debt);*/

	                var auto = (time * (9.6 / 30) * summ) / 100 + summ;
	                auto = Math.round(auto);
	                $('#auto .summMonth, #build .summMonth, #rest .summMonth').text(auto);
	                /*$('#auto input[name="cheapSumm"], #build input[name="cheapSumm"], #rest input[name="cheapSumm"]').val(auto);*/

	                var bus = (time * (9 / 30) * summ) / 100 + summ;
	                bus = Math.round(bus);
	                $('#businnes .summMonth').text(bus);
	                /*$('#businnes input[name="cheapSumm"]').val(bus);*/
	            }
	        }
	        /*else if(summ > 50000) {
	                   		$('#education .summMonthh').text('Не доступно');
	                   }*/
	        else if (summ >= 60000 && summ <= 100000) {
	            $('#pensioner .summMonth').text('Не доступно');
	            if (time > 30) {
	                if (time > 30 && time < 35) {
	                    time = 2;
	                } else if (time > 34 && time < 39) {
	                    time = 3;
	                } else if (time > 38 && time < 43) {
	                    time = 4;
	                } else if (time > 42 && time < 47) {
	                    time = 5;
	                } else if (time > 46 && time < 51) {
	                    time = 6;
	                } else if (time > 50 && time < 55) {
	                    time = 7;
	                } else if (time > 54 && time < 59) {
	                    time = 8;
	                } else if (time > 58 && time < 63) {
	                    time = 9;
	                } else if (time > 62) {
	                    time = 10;
	                }

	                var debt = (time * 30 * (8.5 / 30) * summ) / 100 + summ;
	                debt = Math.round(debt / time);
	                $('#debt .summMonth, #health .summMonth, #feast .summMonth, #education .summMonth').text(debt);
	                /*$('#debt input[name="cheapSumm"], #health input[name="cheapSumm"], #feast input[name="cheapSumm"], #education input[name="cheapSumm"]').val(debt);*/

	                var auto = (time * 30 * (8 / 30) * summ) / 100 + summ;
	                auto = Math.round(auto / time);
	                $('#auto .summMonth, #build .summMonth, #rest .summMonth').text(auto);
	                /*$('#auto input[name="cheapSumm"], #build input[name="cheapSumm"], #rest input[name="cheapSumm"]').val(auto);*/

	                var bus = (time * 30 * (7.5 / 30) * summ) / 100 + summ;
	                bus = Math.round(bus / time);
	                $('#businnes .summMonth').text(bus);
	                /*$('#businnes input[name="cheapSumm"]').val(bus);*/
	            } else {
	                var debt = (time * (8.5 / 30) * summ) / 100 + summ;
	                debt = Math.round(debt);
	                $('#debt .summMonth, #health .summMonth, #feast .summMonth, #education .summMonth').text(debt);
	                /*$('#debt input[name="cheapSumm"], #health input[name="cheapSumm"], #feast input[name="cheapSumm"], #education input[name="cheapSumm"]').val(debt);*/

	                var auto = (time * (8 / 30) * summ) / 100 + summ;
	                auto = Math.round(auto);
	                $('#auto .summMonth, #build .summMonth, #rest .summMonth').text(auto);
	                /*$('#auto input[name="cheapSumm"], #build input[name="cheapSumm"], #rest input[name="cheapSumm"]').val(auto);*/

	                var bus = (time * (7.5 / 30) * summ) / 100 + summ;
	                bus = Math.round(bus);
	                $('#businnes .summMonth').text(bus);
	                /*$('#businnes input[name="cheapSumm"]').val(bus);*/
	            }
	        } else if (summ >= 100000 && summ <= 300000) {
	            $('#debt .summMonth, #health .summMonth, #feast .summMonth, #auto .summMonth, #build .summMonth, #rest .summMonth, #education .summMonth, #pensioner .summMonth').text('Не доступно');
	            if (time > 30) {
	                if (time > 30 && time < 35) {
	                    time = 2;
	                } else if (time > 34 && time < 39) {
	                    time = 3;
	                } else if (time > 38 && time < 43) {
	                    time = 4;
	                } else if (time > 42 && time < 47) {
	                    time = 5;
	                } else if (time > 46 && time < 51) {
	                    time = 6;
	                } else if (time > 50 && time < 55) {
	                    time = 7;
	                } else if (time > 54 && time < 59) {
	                    time = 8;
	                } else if (time > 58 && time < 63) {
	                    time = 9;
	                } else if (time > 62) {
	                    time = 10;
	                }

	                var bus = (time * 30 * (7.5 / 30) * summ) / 100 + summ;
	                bus = Math.round(bus / time);
	                $('#businnes .summMonth').text(bus);
	                /*$('#businnes input[name="cheapSumm"]').val(bus);*/

	            } else {
	                var bus = (time * (7.5 / 30) * summ) / 100 + summ;
	                bus = Math.round(bus);
	                $('#businnes .summMonth').text(bus);
	                /*$('#businnes input[name="cheapSumm"]').val(bus);*/
	            }
	        }
	    }







	    /******************************************************************************/
	    // Сумма на автозалоге
	    $("#summauto").slider({
	        range: "min",
	        min: 3000,
	        max: 691000,
	        step: 1000,
	        value: 22000,
	        slide: summSlideAuto
	    });


	$('#summauto .ui-slider-handle').css("left", "15%");
	$('#summauto .ui-slider-range').css("width", "15%");
	$('#block-calc-new #resultInMonth').text("1 650");


	    // calculateAuto("19000", "12");
	    // calculateAuto(19000, 12);
	    // $("#summauto").slider
	    // ui.value = 19000;
	    // Очищаем поле ввода суммы при клике
	    $("#summInputAuto").on('click', function() {
	        $(this).val('');
	    });

	    // Выполняем пересчет при событии change
	    $("#summInputAuto").on("change", function() {
	        keypressSummAuto();
	    });
	    // $("#summInputAuto").on("", function() {
	    //     keypressSummAuto();
	    // });

	    // Выполняем пересчет при событии keypress
	    $("#summInputAuto").on("keypress", function(e) {
	        if (e.keyCode == 13) {
	            keypressSummAuto();
	        }
	    });

	    // Функция пересчета для событий change и keypress
	    function keypressSummAuto() {

	        var current = $("#summInputAuto").val();
	        console.log(current + "avto, там где работает");
	        // Переопределение сумм

	        if (current >= 0 && current < 3500) {
	            $("#summInputAuto").val('3000');
	            current_m = 3000;
	        } else if (current >= 3500 && current < 4500) {
	            $("#summInputAuto").val('4000');
	            current_m = 8000;
	        } else if (current >= 4500 && current < 5500) {
	            $("#summInputAuto").val('5000');
	            current_m = 13000;
	        } else if (current >= 5500 && current < 6500) {
	            $("#summInputAuto").val('6000');
	            current_m = 18000;
	        } else if (current >= 6500 && current < 7500) {
	            $("#summInputAuto").val('7000');
	            current_m = 23000;
	        } else if (current >= 7500 && current < 8500) {
	            $("#summInputAuto").val('8000');
	            current_m = 28000;
	        } else if (current >= 8500 && current < 9500) {
	            $("#summInputAuto").val('9000');
	            current_m = 33000;
	        } else if (current >= 9500 && current < 10500) {
	            $("#summInputAuto").val('10000');
	            current_m = 38000;
	        } else if (current >= 10500 && current < 11500) {
	            $("#summInputAuto").val('11000');
	            current_m = 43000;
	        } else if (current >= 11500 && current < 12500) {
	            $("#summInputAuto").val('12000');
	            current_m = 48000;
	        } else if (current >= 12500 && current < 13500) {
	            $("#summInputAuto").val('13000');
	            current_m = 53000;
	        } else if (current >= 13500 && current < 14500) {
	            $("#summInputAuto").val('14000');
	            current_m = 58000;
	        } else if (current >= 14500 && current < 15500) {
	            $("#summInputAuto").val('15000');
	            current_m = 63000;
	        } else if (current >= 15500 && current < 16500) {
	            $("#summInputAuto").val('16000');
	            current_m = 68000;
	        } else if (current >= 16500 && current < 17500) {
	            $("#summInputAuto").val('17000');
	            current_m = 73000;
	        } else if (current >= 17500 && current < 18500) {
	            $("#summInputAuto").val('18000');
	            current_m = 78000;
	        } else if (current >= 18500 && current < 19500) {
	            $("#summInputAuto").val('19000');
	            current_m = 83000;
	        } else if (current >= 19500 && current < 20500) {
	            $("#summInputAuto").val('20000');
	            current_m = 88000;
	        } else if (current >= 20500 && current < 21500) {
	            $("#summInputAuto").val('21000');
	            current_m = 93000;
	        } else if (current >= 21500 && current < 22500) {
	            $("#summInputAuto").val('22000');
	            current_m = 98000;
	        } else if (current >= 22500 && current < 23500) {
	            $("#summInputAuto").val('23000');
	            current_m = 103000;
	        } else if (current >= 23500 && current < 24500) {
	            $("#summInputAuto").val('24000');
	            current_m = 108000;
	        } else if (current >= 24500 && current < 25500) {
	            $("#summInputAuto").val('25000');
	            current_m = 113000;
	        } else if (current >= 25500 && current < 26500) {
	            $("#summInputAuto").val('26000');
	            current_m = 118000;
	        } else if (current >= 26500 && current < 27500) {
	            $("#summInputAuto").val('27000');
	            current_m = 123000;
	        } else if (current >= 27500 && current < 28500) {
	            $("#summInputAuto").val('28000');
	            current_m = 128000;
	        } else if (current >= 28500 && current < 29500) {
	            $("#summInputAuto").val('29000');
	            current_m = 133000;
	        } else if (current >= 29500 && current < 30500) {
	            $("#summInputAuto").val('30000');
	            current_m = 138000;
	        } else if (current >= 30500 && current < 31500) {
	            $("#summInputAuto").val('31000');
	            current_m = 143000;
	        } else if (current >= 31500 && current < 32500) {
	            $("#summInputAuto").val('32000');
	            current_m = 148000;
	        } else if (current >= 32500 && current < 33500) {
	            $("#summInputAuto").val('33000');
	            current_m = 153000;
	        } else if (current >= 29500 && current < 34500) {
	            $("#summInputAuto").val('34000');
	            current_m = 158000;
	        } else if (current >= 29500 && current < 35500) {
	            $("#summInputAuto").val('35000');
	            current_m = 163000;
	        } else if (current >= 29500 && current < 36500) {
	            $("#summInputAuto").val('36000');
	            current_m = 168000;
	        } else if (current >= 29500 && current < 37500) {
	            $("#summInputAuto").val('37000');
	            current_m = 173000;
	        } else if (current >= 29500 && current < 38500) {
	            $("#summInputAuto").val('38000');
	            current_m = 178000;
	        } else if (current >= 29500 && current < 39500) {
	            $("#summInputAuto").val('39000');
	            current_m = 183000;
	        } else if (current >= 29500 && current < 40500) {
	            $("#summInputAuto").val('40000');
	            current_m = 188000;
	        } else if (current >= 29500 && current < 41500) {
	            $("#summInputAuto").val('41000');
	            current_m = 193000;
	        } else if (current >= 29500 && current < 42500) {
	            $("#summInputAuto").val('42000');
	            current_m = 198000;
	        } else if (current >= 29500 && current < 43500) {
	            $("#summInputAuto").val('43000');
	            current_m = 203000;
	        } else if (current >= 29500 && current < 44500) {
	            $("#summInputAuto").val('44000');
	            current_m = 208000;
	        } else if (current >= 29500 && current < 45500) {
	            $("#summInputAuto").val('45000');
	            current_m = 213000;
	        } else if (current >= 29500 && current < 46500) {
	            $("#summInputAuto").val('46000');
	            current_m = 218000;
	        } else if (current >= 29500 && current < 47500) {
	            $("#summInputAuto").val('47000');
	            current_m = 223000;
	        } else if (current >= 29500 && current < 48500) {
	            $("#summInputAuto").val('48000');
	            current_m = 228000;
	        } else if (current >= 29500 && current < 49500) {
	            $("#summInputAuto").val('49000');
	            current_m = 233000;
	        } else if (current >= 29500 && current < 50000) {
	            $("#summInputAuto").val('50000');
	            current_m = 238000;
	        } else if (current >= 50000) {
	            current_m = parseInt(current) + 191000;
	        }
	        console.log(current_m);
	        $("#summauto").slider({
	            'value': current_m
	        });
	        // Функция summSlide
	        function summSlideAuto(event, ui) {
	            summ = $('#summauto').slider('value');
	            time = $('#timeauto').slider('value');
	            calculateAuto(summ, time);
	            console.log(summ);
	            console.log(time);
	            console.log(typeof summ);
	            console.log(typeof time);
	        }
	        summSlideAuto();
	    }
	// summSlideAuto("83000", "12");
	    // Функция summSlideAuto
	    function summSlideAuto(event, ui) {
	        summ = ui.value;
	        time = $('#timeauto').slider('value');
	        calculateAuto(summ, time);
	    }

	    // Значение слайдера в переменную
	    var summ = $("#summauto").slider("value");
	    // Вывод суммы при загрузке страницы

	    $("#summInputAuto").val(summ);
	    $("#summMainAuto").text(summ);
	    $(".auto-item input[name=cheapSumm]").val(summ);



	    /******************************************************************************/
	    // Срок на автозалоге
	    $("#timeauto").slider({
	        range: "min",
	        min: 12,
	        max: 12,
	        value: 12,
	        slide: timeSlideAuto
	    });

	    // Очищаем поле ввода даты
	    $("#timeInputAuto").on('click', function() {
	        $(this).val('');
	        test = false;
	    });

	    // Выполняем пересчет при событии keypress
	    $("#timeInputAuto").on("keypress", function(e) {
	        if (e.keyCode == 13) {
	            keypressTimeAuto();
	            test = true;
	        }
	    });

	    // Выполняем пересчет при событии change
	    $("#timeInputAuto").on("change", function() {
	        if (test != true) {
	            keypressTimeAuto();
	        }
	    });

	    // Функция пересчета для change и keypress
	    function keypressTimeAuto() {
	        var current = $("#timeInputAuto").val();

	        $("#timeauto").slider({
	            'value': current
	        });

	        function timeSlideAuto() {
	            time = $('#timeauto').slider('value');
	            summ = $('#summauto').slider('value');


	            // функция была заменена для корректного ввода данных с клавиатуры
	            // calculate(summ, time);
	            calculateAuto(summ, time);

	        }
	        timeSlideAuto();
	    }





	    // Функция timeSlide
	    function timeSlideAuto(event, ui) {
	        time = ui.value;
	        summ = $('#summauto').slider('value');


	        calculateAuto(summ, time);
	    }

	    // Значение слайдера в переменную
	    var time = $("#timeauto").slider("value");
	    var now = moment().add(1, 'day').locale('ru').format('DD MMMM YYYY');
	    // Вывод времени при загрузке страницы
	    $("#timeInputAuto").val(time + ' РјРµСЃ.');
	    $("input[name=cheapDate]").val(now);

	    // Калькулятор
	    function calculateAuto(summ, time) {

	        if (summ > 3000 && summ < 8000) {
	            summ = 3000;
	        } else if (summ >= 8000 && summ < 13000) {
	            summ = 4000;
	        } else if (summ >= 13000 && summ < 18000) {
	            summ = 5000;
	        } else if (summ >= 18000 && summ < 23000) {
	            summ = 6000;
	        } else if (summ >= 23000 && summ < 28000) {
	            summ = 7000;
	        } else if (summ >= 28000 && summ < 33000) {
	            summ = 8000;
	        } else if (summ >= 33000 && summ < 38000) {
	            summ = 9000;
	        } else if (summ >= 38000 && summ < 42000) {
	            summ = 10000;
	        } else if (summ >= 42000 && summ < 47000) {
	            summ = 11000;
	        } else if (summ >= 47000 && summ < 52000) {
	            summ = 12000;
	        } else if (summ >= 52000 && summ < 57000) {
	            summ = 13000;
	        } else if (summ >= 57000 && summ < 62000) {
	            summ = 14000;
	        } else if (summ >= 62000 && summ < 67000) {
	            summ = 15000;
	        } else if (summ >= 67000 && summ < 72000) {
	            summ = 16000;
	        } else if (summ >= 72000 && summ < 77000) {
	            summ = 17000;
	        } else if (summ >= 77000 && summ < 82000) {
	            summ = 18000;
	        } else if (summ >= 82000 && summ < 87000) {
	            summ = 19000;
	        } else if (summ >= 87000 && summ < 92000) {
	            summ = 20000;
	        } else if (summ >= 92000 && summ < 97000) {
	            summ = 21000;
	        } else if (summ >= 97000 && summ < 102000) {
	            summ = 22000;
	        } else if (summ >= 102000 && summ < 107000) {
	            summ = 23000;
	        } else if (summ >= 107000 && summ < 112000) {
	            summ = 24000;
	        } else if (summ >= 112000 && summ < 117000) {
	            summ = 25000;
	        } else if (summ >= 117000 && summ < 122000) {
	            summ = 26000;
	        } else if (summ >= 122000 && summ < 127000) {
	            summ = 27000;
	        } else if (summ >= 12700 && summ < 132000) {
	            summ = 28000;
	        } else if (summ >= 132000 && summ < 137000) {
	            summ = 29000;
	        } else if (summ >= 137000 && summ < 142000) {
	            summ = 30000;
	        } else if (summ >= 142000 && summ < 147000) {
	            summ = 31000;
	        } else if (summ >= 147000 && summ < 152000) {
	            summ = 32000;
	        } else if (summ >= 152000 && summ < 157000) {
	            summ = 33000;
	        } else if (summ >= 157000 && summ < 162000) {
	            summ = 34000;
	        } else if (summ >= 162000 && summ < 167000) {
	            summ = 35000;
	        } else if (summ >= 167000 && summ < 172000) {
	            summ = 36000;
	        } else if (summ >= 172000 && summ < 177000) {
	            summ = 37000;
	        } else if (summ >= 177000 && summ < 182000) {
	            summ = 38000;
	        } else if (summ >= 182000 && summ < 187000) {
	            summ = 39000;
	        } else if (summ >= 187000 && summ < 192000) {
	            summ = 40000;
	        } else if (summ >= 192000 && summ < 197000) {
	            summ = 41000;
	        } else if (summ >= 197000 && summ < 202000) {
	            summ = 42000;
	        } else if (summ >= 202000 && summ < 207000) {
	            summ = 43000;
	        } else if (summ >= 207000 && summ < 212000) {
	            summ = 44000;
	        } else if (summ >= 212000 && summ < 217000) {
	            summ = 45000;
	        } else if (summ >= 217000 && summ < 222000) {
	            summ = 46000;
	        } else if (summ >= 222000 && summ < 227000) {
	            summ = 47000;
	        } else if (summ >= 227000 && summ < 232000) {
	            summ = 48000;
	        } else if (summ >= 232000 && summ < 237000) {
	            summ = 49000;
	        } else if (summ >= 237000 && summ < 242000) {
	            summ = 50000;
	        } else if (summ >= 242000) {
	            summ = summ - 191000;
	        }




	// summ = abc2(summ);



	console.log(typeof summ);
	        // Вывод суммы при прокрутке бегунка
	        $("#summInputAuto").val(abc2(summ) + ' СЂ.');
	        $("#summMainAuto").text(abc2(summ));
	        $("input[name=cheapSumm]").val(abc2(summ));

	        // Отображение срока займа
	        $('#timeInputAuto').val(time + ' РјРµСЃ.');

	        // Отображение платежа в месяц
	        // var result = (time * 7.2 * summ) / 100 + summ; //предыдущая реализация
	        // result = Math.round(parseInt(result / time)); //предыдущая реализация

	        var result = (0.075 * +summ);
	        result = Math.round(parseInt(result));
	        console.log("2");
	        $('#resultInMonth').text(abc2(result));

	    }


	var copy_abc = $('#summInputAuto').val();
	$('#summInputAuto').val(abc2(copy_abc) + " СЂ."); 

	});


});