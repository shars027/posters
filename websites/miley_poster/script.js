$(document).ready(function(){

	$('.spin').click(function(){
		var randDeg = Math.floor(Math.random() * 360);
		console.log(randDeg);
		$(this).css('filter','hue-rotate(' +randDeg+ 'deg)');
	});
	
	$(document).click(function(){
		$(".message").hide();
	});
	
});