$(document).ready(function(){
	open_lightbox();
	close_lightbox();
});

const open_lightbox = () => {
	$('.grid-holder .grid > a').on('click', function(e){
		e.preventDefault();

		var title_  = $(this).data('title'),
			txt_	= $(this).data('txt'),
			img_	= $(this).find('img').attr('src');

		$('.lightbox').slideDown();

		$('.lightbox').find('h2').text(title_);
		$('.lightbox').find('.str p').text(txt_);
		$('.lightbox').find('.image img').attr('src', img_);
	});	
}

const close_lightbox = () => {
	$('.lightbox .btn-close').on('click', function(e){
		e.preventDefault();
		$('.lightbox').slideUp();
	});
}