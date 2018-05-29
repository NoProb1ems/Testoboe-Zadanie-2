$('#btnSlide1').click(function(event) {
	// let class = $('#btnSlide1').hasClass('click');
	if ($('#btnSlide1').hasClass('click')!=true){
		$('#btnSlide1').addClass('click');
		$('#btnSlide2').removeClass('click');
		$('#btnSlide3').removeClass('click');
		$('#btnSlide4').removeClass('click');
		$('.slide1').css('opacity', '1');
		$('.slide2').css('opacity', '0');
		$('.slide3').css('opacity', '0');
		$('.slide4').css('opacity', '0');
	}
});
$('#btnSlide2').click(function(event) {
	// let class = $('#btnSlide2').hasClass('click');
	if ($('#btnSlide2').hasClass('click')!=true){
		$('#btnSlide2').addClass('click');
		$('#btnSlide1').removeClass('click');
		$('#btnSlide3').removeClass('click');
		$('#btnSlide4').removeClass('click');
		$('.slide1').css('opacity', '0');
		$('.slide2').css('opacity', '1');
		$('.slide3').css('opacity', '0');
		$('.slide4').css('opacity', '0');
	}
});
$('#btnSlide3').click(function(event) {
	// let class = $('#btnSlide3').hasClass('click');
	if ($('#btnSlide3').hasClass('click')!=true){
		$('#btnSlide3').addClass('click');
		$('#btnSlide2').removeClass('click');
		$('#btnSlide1').removeClass('click');
		$('#btnSlide4').removeClass('click');
		$('.slide1').css('opacity', '0');
		$('.slide2').css('opacity', '0');
		$('.slide3').css('opacity', '1');
		$('.slide4').css('opacity', '0');
	}
});
$('#btnSlide4').click(function(event) {
	// let class = $('#btnSlide4').hasClass('click');
	if ($('#btnSlide4').hasClass('click')!=true){
		$('#btnSlide4').addClass('click');
		$('#btnSlide2').removeClass('click');
		$('#btnSlide3').removeClass('click');
		$('#btnSlide1').removeClass('click');
		$('.slide1').css('opacity', '0');
		$('.slide2').css('opacity', '0');
		$('.slide3').css('opacity', '0');
		$('.slide4').css('opacity', '1');
	}
});
var count = 3;
$('#back').click(function(event) {
	if (count >= 1 && count <= 5){
		$('#photo'+count).css({
			'width': '45px',
			'height': '45px'
		});
		if (count > 1){
			count-=1;	
		}
		$('#photo'+count).css({
			'width': '70px',
			'height': '70px'
		});
	}
	switch (count) {
		case 1:
			$('#name').text('Anna Borisovna');
			$('#profession').text('Mathematic teacher');
			break;
		case 2:
			$('#name').text('San Sanych');
			$('#profession').text('Trudovik');
			break;
		case 3:
			$('#name').text('JANE GALADRIEL');
			$('#profession').text('CEO TENGKUREP');
			break;
		case 4:
			$('#name').text('Natalia Vladimirovna');
			$('#profession').text('Designer');
			break;
		case 5:
			$('#name').text('Alex Lutor');
			$('#profession').text('Front-end');
			break;
	}
});
$('#forward').click(function(event) {
	if (count >= 1 && count <= 5){
		$('#photo'+count).css({
			'width': '45px',
			'height': '45px'
		});
		if (count < 5){
			count+=1;
		}
		$('#photo'+count).css({
			'width': '70px',
			'height': '70px'
		});
		console.log(count);
	}
	switch (count) {
		case 1:
			$('#name').text('Anna Borisovna');
			$('#profession').text('Mathematic teacher');
			break;
		case 2:
			$('#name').text('San Sanych');
			$('#profession').text('Trudovik');
			break;
		case 3:
			$('#name').text('JANE GALADRIEL');
			$('#profession').text('CEO TENGKUREP');
			break;
		case 4:
			$('#name').text('Natalia Vladimirovna');
			$('#profession').text('Designer');
			break;
		case 5:
			$('#name').text('Alex Lutor');
			$('#profession').text('Front-end');
			break;
	}
});

$('.learn').hover(function() {
	$('.learn').css({
		'text-decoration': 'none',
		'background-color': '#00e0d0',
		'color': 'white'
	});
}, function() {
		$('.learn').css({
		'background-color': 'rgba(0,0,0,0)',
		'color': '#00e0d0'
	});
});

$('.learnMore').hover(function() {
	$('.learnMore').css({
		'text-decoration': 'none',
		'background-color': '#00e0d0',
		'color': 'white'
	});
}, function() {
		$('.learnMore').css({
		'background-color': 'rgba(0,0,0,0)',
		'color': '#00e0d0'
	});
});

$('.hiring').hover(function() {
	$('.hiring').css({
		'text-decoration': 'none',
		'background-color': '#00e0d0',
		'color': 'white'
	});
}, function() {
		$('.hiring').css({
		'background-color': 'rgba(0,0,0,0)',
		'color': '#00e0d0'
	});
});

$('.sumbit').hover(function() {
	$('.sumbit').css({
		'text-decoration': 'none',
		'background-color': '#00e0d0',
		'color': 'white'
	});
}, function() {
		$('.sumbit').css({
		'background-color': 'rgba(0,0,0,0)',
		'color': '#00e0d0'
	});
});

$('.load').hover(function() {
	$('.load').css({
		'text-decoration': 'none',
		'background-color': '#00e0d0',
		'color': 'white'
	});
}, function() {
		$('.load').css({
		'background-color': 'rgba(0,0,0,0)',
		'color': '#00e0d0'
	});
});

window.onresize = function(event) {
	var width = $(window).width();
	if (width < 992){
		$('.container').addClass('container-fluid');
		$('.container-fluid').removeClass('container');
	}
		if (width > 992){
		$('.container-fluid').addClass('container');
		$('.container').removeClass('container-fluid');
	}
};