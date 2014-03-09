$(document).ready(function(){
	$(".nav li").on("mouseenter", function() {
        $(this).css( "color", "#87CEFA" );
    }).on("mouseleave", function() {
   		$(this).css( "color", "#369" );
  	});

  	$(".nav .signin").on("mouseenter", function() {
        $(this).css( "color", "#369" );
    }).on("mouseleave", function() {
   		$(this).css( "color", "#18afe0" );
	});

	$(".bc").on("mouseenter", function () {
  		$(".main").hide();
  		$(".arrowtobc").show(); 
  		$(".bchover").show(); 
  	}).on("mouseleave", function() {
   		$(".bchover").hide();
   		$(".arrowtobc").hide(); 
   		$(".main").show();
  	});

  	$(".hr").on("mouseenter", function () {
  		$(".main").hide();
  		$(".arrowtohr").show(); 
  		$(".hrhover").show(); 
  	}).on("mouseleave", function() {
   		$(".hrhover").hide();
   		$(".arrowtohr").hide(); 
   		$(".main").show();
  	});

  	$(".cf").on("mouseenter", function () {
  		$(".main").hide();
  		$(".arrowtocf").show(); 
  		$(".cfhover").show(); 
  	}).on("mouseleave", function() {
   		$(".cfhover").hide();
   		$(".arrowtocf").hide(); 
   		$(".main").show();
  	});
});