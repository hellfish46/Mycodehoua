$(document).ready(function() {
	
	//Работа галереи
	$('#list-of-img a').on('click', function(){		
		$('#list-of-img a').fadeTo(1,1);
		$(this).fadeTo(1,0.4);
		
	});
	
	
	
	$('#list-of-img a').on('click', function(e){				
			e.preventDefault();		
			if($('#main-img').attr('src') != $(this).attr('href')){				
				$('#main-img').hide().attr('src', $(this).attr('href'));	
				$('list-of-img').fadeTo(1,1);				
				$(this).fadeTo(1,0.4);
				
			}
		});
		$('#main-img').on('load', function(){
			$(this).fadeIn(2000);
		});
	
	
	
	//Работа галереи
	var source = ['images/img_main.jpg','images/alladin_main.jpg','images/d2_main.jpg','images/forest_main.jpg','images/futurama_main.jpg','images/orb_main.jpg','images/prince_main.jpg','images/simpson_main.jpg','images/warcraft_main.jpg','images/wheel_main.jpg'];
	
	/*
	$('#next').on('click', function(e){
		e.preventDefault();
		$.each(source, function(index, value){
			if(value == $('#main-img').attr('src')){
				$('#main-img').fadeOut(1).attr('src', source[index + 1]);
				return false;
			}
		});
		$('#main-img').on('load', function(){
		$(this).fadeIn();
	});
	});
	
	
	
	$('#back').on('click', function(e){
		e.preventDefault();
		$.each(source, function(index, value){
			if(value == $('#main-img').attr('src')){
				$('#main-img').fadeOut(1).attr('src', source[index - 1]);
				return false;
			}
		});
		$('#main-img').on('load', function(){
			$(this).fadeIn();
		});
	});
	*/
	
	
	//1й способ полностью с помощью jQuery
	$('#next').on('click', function(e){
		e.preventDefault();
		$.each(source, function(index, value){
			if (value == $('#main-img').attr('src')){
				$('#main-img').attr('src', source[index + 1]);
				return false;
			}			
		});	
	});
	
	//2й способ частично с jQuery
	$('#back').on('click', function(e){
		e.preventDefault();
		for(var i = 0; i < source.length; i++){
			if($('#main-img').attr('src') == source[i] ){
				$('#main-img').attr('src', source[i - 1]);
				break;
			}
		}		
	
	});
	
	
	
	//Работа меняющигся новостей
	function show1(){
		$('#block2').fadeIn(1000);
	}
	function show2(){
		$('#block1').fadeIn(1000);
	}
	
	
	var bolleanBlock = true;
	
	function change(){
		if(bolleanBlock == true){
			$('#block1').fadeOut(1000);
			setTimeout(show1, [1000]);			
			bolleanBlock = false;			
		}
		else if (bolleanBlock == false){
			$('#block2').fadeOut(1000);
			setTimeout(show2, [1000]);	
			bolleanBlock = true;
		}
	}	
	
	setInterval(change, 10000);
	
	
	//Работа блока с вкладками
	$('#all-menu ul li a').on('click', function(e){
		e.preventDefault();
		$('#all-menu ul li a').removeClass('white');
		$(this).addClass('white');		
	});
	
	$('#all-menu ul li a').on('click', function(e){
		e.preventDefault();
		$('.hideClass').fadeOut(20)
		if($(this).attr('id') == 'sub_1'){
			
			setTimeout("$('#content_1').fadeIn(100)", 100);
		}
		else if($(this).attr('id') == 'sub_2'){
			
			setTimeout("$('#content_2').fadeIn(100)", 100);
		}
		else if($(this).attr('id') == 'sub_3'){
			
			setTimeout("$('#content_3').fadeIn(100)", 100);
		}
	});
	
	
	$(':text').on('click', function(){
		if($(this).val() == 'ENTER SEARCH...'){
			$(this).attr('value','');
		}
	});
	$(':text').on('blur', function(){
		if($(this).val() == ''){
			$(this).attr('value','ENTER SEARCH...');
		}
	});
	
	
	//Скрыть/показать дополнительные примеры верстки
	var examplesButton = document.querySelector('#examples');
	var otherEx = document.querySelector('#otherExamples');
	var ul = document.querySelector('#otherExamples ul');
	var bool = true;
	
	
	examplesButton.onclick = function(){
		if(bool == true){
		bool = false;
		otherEx.style.display = 'block';
		setTimeout(function(){
			
			otherEx.style.height = '220px';}, 50);
			this.innerHTML = 'Скрыть другие примеры свёрстанных страниц'
		return false;		
		
		};
		if (bool == false){			
			otherEx.style.height = '0';
			
			bool = true;
			otherEx.addEventListener('transitionend', function(){				
				//alert(getComputedStyle(otherEx).height);
				if(parseInt(getComputedStyle(otherEx).height) <= 0){
					otherEx.style.display = 'none';				
					return false;
					};
			});
			this.innerHTML = 'Показать другие примеры свёрстанных страниц'
			
		
		}
			
	}
	
	
	
	
	
	
	
	/*
	var bool = false;
	
	function hideExamples(){
		
		otherEx.style.height = '0px';
		otherEx.addEventListener('transitionend', function(){
			this.style.display = 'none';
		})
	};
	
	
	
	function showExamples(){			
		otherEx.style.display = 'block';
		setTimeout(function(){otherEx.style.height = '200px';}, 4)
		//otherEx.style.height = '200px';	
			
	};
	
	
	
	
	
	examplesButton.onclick = function(){
		if(bool == false){
			showExamples();
			examplesButton.innerHTML = 'Скрыть';
			bool = true;
		}else if(bool == true){
			hideExamples();
			examplesButton.innerHTML = 'Показать';
			bool = false;
		}
		};
	*/
	
	
	
});