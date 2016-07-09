$(document).ready(function() {
	 function rotateImg(){
    $(".cross").rotate({
      angle: 0,
      animateTo:360
      });
   }
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


	$('.trigger').toggle(function(){
	$('.nav').css('width' , '100%').fadeIn('slow');
	$('.trigger2, .menu').fadeOut();
  $('body').css('overflow-y', 'hidden');
  rotateImg();
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
},function(){
	   $('.nav').fadeOut(600);
    rotateImg();
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
	$('.left li').hover(function(){
	  $(this).animate({paddingLeft: '+=20px',
	  				
	},400);
  }, function(){
  	$( this ).animate({paddingLeft: '-=20px',
						
  						},400);
  });
	
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

