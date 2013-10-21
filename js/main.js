$( document ).ready(function() {

	// Set carousel options
	$('.carousel').carousel({
	  interval: 8000 // 8 seconds vs. default 5
	});

	// Add swipe to homepage carousel
	$('#homepage-feature').hammer().on('swipeleft', function(){
		$(this).carousel('next');
	})
	$('#homepage-feature').hammer().on('swiperight', function(){
		$(this).carousel('prev');
	})

});
