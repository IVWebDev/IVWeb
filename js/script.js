function backToTop() {
	let button = $('.back-to-top');

	$(window).on('scroll',() => {
		if ($(this).scrollTop() >= 50){
			button.fadeIn();
		} else {
			button.fadeOut();
		}
	});

	button.on('click',(e) => {
		e.preventDefault();
		$('html').animate({scrollTop: 0}, 1000);
	})
}
 
backToTop();

function readMore() {
	var dots = document.getElementById("dots");
	var more = document.getElementById("more");
	var btn = document.getElementById("btn");

	if (dots.style.display === "none" ) {
		dots.style.display = "inline";
		btn.innerHTML = "Смотреть еще";
		more.style.display = "none";
	} else {
		dots.style.display = "none";
		btn.innerHTML = "Скрыть";
		more.style.display = "inline";
	}
}