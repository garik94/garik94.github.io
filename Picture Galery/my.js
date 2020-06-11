$(function(){
	$(".small a").click(function(e){
		if($(".big img").attr("src")!== $(this).attr("href")){
			$(".big img").hide().attr("src",$(this).attr("href")).fadeIn(1000);
		}
		
		e.preventDefault();
	});

	$(".button").click(function(){
		$(".gallery").slideToggle(500);
		if($(this).text() === "-"){
			$(this).text("+")
		}else{
			$(this).text("-")
		}
		
	})

	$(".small div ").click(function(){
		$(".small div ").fadeTo(500,1).css("border","none");
		$(this).fadeTo(500,0.5).css("border","3px solid red");
		
	})


})