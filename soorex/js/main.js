$(document).ready(function(){
  $('.slider').slick({
		slidesToShow: 6,
		prevArrow:"<button type='button' class='slick-prev'><img src='svg/arrow-left.svg'></button>",
		nextArrow:"<button type='button' class='slick-next'><img src='svg/arrow-right.svg'></button>",
		responsive: [
			{
				breakpoint: 1600,
				settings: {
					slidesToShow: 5,
				}
			},
			{
				breakpoint: 1440,
				settings: {
					slidesToShow: 4,
				}
			},
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 500,
				settings: {
					slidesToShow: 2,
				}
			},
		],
	});
	$('.product-slider').slick({
		slidesToShow: 4,
		prevArrow:"<button type='button' class='slick-prev product-slider-prev'><img src='svg/arrow-fill-left.svg'></button>",
		nextArrow:"<button type='button' class='slick-next product-slider-next'><img src='svg/arrow-fill-right.svg'></button>",
		responsive: [
			{
				breakpoint: 1600,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 1040,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
				}
			},
		],
	});
	
});

$('.menu-btn').click(function(){
	$('.mobile-menu').toggleClass('active');
})
