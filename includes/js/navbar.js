$(document).ready(function() {
	 //Rotates the cross in navbar
   function rotateImg(){
    $(".cross").rotate({
      angle: 0,
      animateTo:360 
      });
   }
   /*Checks if window size is above 768px or not. If yes, double navbar is used, else single navbar is used */
   $(window).resize(function(){
		if($(window).width() > 768 && !($('#nav2').hasClass('right'))){
			$('#nav2').addClass('right');
			if($('#nav1').hasClass('active')){
			$('.left').css('width', '70%');
			$('.right').css('width','30%');
		}
			
		}else if($(window).width() < 768 && $('#nav2').hasClass('right')){
			if($('#nav1').hasClass('active')){
			$('.left').css('width', '100%');
			$('.right').css('width','0');
		}
		}	
	});

  $('#nav1 .contents').slideUp(); //Initially, contents of left navbar are slided up
	/* Navbar button trigger*/
  $('.trigger').toggle(function(){
	$('.nav').css('width' , '100%').fadeIn('slow');
	$('.trigger2, .menu').fadeOut();
  $('body').css('overflow-y', 'hidden');
  rotateImg(); //Rotates cross
  $('.cross').fadeIn();
	if($(window).width() > 768){
		$('.nav > .left').animate({
    		width: '70%',
    	}, 600, 'swing').addClass('active');    
    	$('.nav > .right').animate({
    		width: '30%',
    	}, 600, 'swing').addClass('active');
    	$('.right > .contents').hide();
    	$('.left .inline-contents').hide();
	}else{
		$('.nav > .left').animate({
    		width: '100%',
    	}, 600, 'swing');
	}
  $('#nav1 .contents').slideDown(500);
},function(){
	   $('.nav').fadeOut(600);
    rotateImg();
    $('#nav1 .contents').slideUp(500);
     $('body').css('overflow-y', 'visible');
    $('.cross').fadeOut();
    $('.trigger2, .menu').fadeIn();
    $('.nav > .left').animate({
    		width: '0',
    		}, 600, 'swing').removeClass('active');
    	if($(window).width() > 768){
    		    
    		$('.nav > .right').animate({
    		width: '0',
    		}, 600, 'swing').removeClass('active'); 
    	}
});
	
	/*Checks hover and click. If hover-time is more than 600ms then right elements appear via hover. 
  If clicked before that, then elements appear via click and waiting class is removed for, the event should not
  trigger via hover  */
	$('.left .events').toggle(function(){
	 $( this )
      .removeClass('waiting');
      $('.right > .contents').fadeIn();
  }, function(){
  	$( this )
      .removeClass('waiting');
      $('.right > .contents').fadeOut();
  });

	$('.left .events').hover(function(){
	 $(this).addClass('waiting');
    setTimeout(function() {
      $('.left .waiting')
        .click()
        .removeClass('waiting');
    }, 600);
  }, function() {
    $('.waiting').removeClass('waiting');
  });

  });

