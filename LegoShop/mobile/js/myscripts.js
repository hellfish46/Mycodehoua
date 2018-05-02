window.onload = function(){

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

















}