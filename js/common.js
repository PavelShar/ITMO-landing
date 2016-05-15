$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});


$(document).ready(function (){

	$('.toggle_menu').click(function(){
		$(this).toggleClass('on');
		$('.top_menu').slideToggle();
	});


	var window_h = $(window).height();
	$('header').css('height', window_h + 'px');

	var owl = $('.feedback');
	owl.owlCarousel({
		items:1,
		center: true,
		loop: true,
		autoplay:true,
		autoplayTimeout:15000,
		autoplayHoverPause:true
	});

	$('section.feedbacks .chevrone.right').click(function() { owl.trigger('next.owl.carousel'); });
	$('section.feedbacks .chevrone.left').click(function() { owl.trigger('prev.owl.carousel'); });

});
