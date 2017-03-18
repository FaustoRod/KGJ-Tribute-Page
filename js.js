$(document).ready(function(){
	$('.stat-icon').hover(function(){
		$h1 = $(this).children();
		$(this).toggleClass('stat-iconC',500,"easeOutSine");
		/*$(this).children('h1').toggleClass('stat-iconH',500,"easeOutSine*/
		
		if($h1.hasClass('stat-text-avg')){
			$h1.toggleClass("stat-text-avgC");
		}else if($h1.hasClass('stat-text-hr')){
			$h1.toggleClass("stat-text-hrC");
		}else if($h1.hasClass('stat-text-h')){
			$h1.toggleClass("stat-text-hC");
		}
		
		
	});
});

var slideIndex = 0;
showSlides();

function showSlides() {
	var i;
	var slides = document.getElementsByClassName("slide");
	
	for(i = 0; i < slides.length; i++){
		slides[i].style.display = "none";
	}
	slideIndex++;
	if (slideIndex> slides.length){slideIndex=1}
	slides[slideIndex-1].style.display="block";
	setTimeout(showSlides,3000);

};
