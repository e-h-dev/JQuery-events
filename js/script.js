$(document).ready(function() {
 

 	$("#stream1_btn").on("click", function() {
 		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream1").addClass('highlight_stream');
	});
	$("#stream2_btn").on("click", function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream2").addClass('highlight_stream');
	});
	$("#stream3_btn").on("click", function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream3").addClass('highlight_stream');
	});
    $("p").on("click", function(){
        $("p").css("color", "red");
    });
    $("h2").on("mouseenter", function() {
        $("h2").css("background-color", "lightblue");
    });
    $("#small-header1").on("mouseenter", function() {
        $("#small-header1").css("font-size", "32px");
    });
    $("#small-header2").on("mouseenter", function() {
        $("#small-header2").css("font-size", "32px");
    });
    $("#small-header3").on("mouseenter", function() {
        $("#small-header3").css("font-size", "32px");
    });
    $("#small-header4").on("mouseenter", function() {
        $("#small-header4").css("font-size", "32px");
    });
    $("#small-header5").on("mouseenter", function() {
        $("#small-header5").css("font-size", "32px");
    });
    $("#small-header6").hover(function() {
        $("#small-header6").css("font-size", "32px");
    });
    $(".bottom_button").on("mouseenter", function() {
        $("body").css("background-color", "black");
    });
    $(".bottom_button").on("mouseleave", function() {
        $("body").css("background-color", "grey");
    });



}); 
