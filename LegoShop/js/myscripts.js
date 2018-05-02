window.onload = function(){
	
			
			
		
		
//Поиск при фокусе и уходе

var searchJS = document.querySelector("#search");

searchJS.onfocus = function(e){
	if(this.value == this.defaultValue ){
	this.value = '';
	}
}
searchJS.onblur = function(e){
	if(this.value != '') return;
	this.value = this.defaultValue;
}

//Скрыть/раскрыть описание
document.querySelector("p[aver] span span").style.cssText = "color: red; font-size: 18px;" //Стили скрытого текста.

var aver = document.querySelector("p[aver] span");


var hideDescr = document.querySelector("p[hideDescr]");
var shortAndLong = false;
hideDescr.onclick = function(){	
	aver.classList.toggle('hidden');
	if(shortAndLong == false){
	hideDescr.innerHTML = 'Короткий текст';
	shortAndLong = true;
	}
	else if(shortAndLong == true){
		hideDescr.innerHTML = 'Полный текст';
		shortAndLong = false;
	}
	
}





var heightLi = document.querySelector('.container ul li').offsetHeight;
containerScrollTop = 0;
//опустить картинку в галерее
document.getElementsByClassName('artMenu')[0].getElementsByTagName('input')[0].onclick = function(e){
	
	var countLi = document.querySelectorAll('.container ul li').length;	
	
	if(containerScrollTop == 0  ) return;
	containerScrollTop -= heightLi;  
	var sdvig = -(containerScrollTop)
	
	
	var ul = document.querySelector('.container ul');	
	ul.style.marginTop = sdvig + 'px';
	
};









//поднять картинку в галерее
document.getElementsByClassName('artMenu')[0].getElementsByTagName('input')[1].onclick = function(e){
	
	var countLi = document.querySelectorAll('.container ul li').length;	
		
	if(containerScrollTop + 5*heightLi == countLi * heightLi  ) return;	
	containerScrollTop += heightLi;
	var sdvig = -containerScrollTop;
	
	var ul = document.querySelector('.container ul');	
	ul.style.marginTop = sdvig + 'px';
	
}

};