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
  rotateImg();
  $('.cross').fadeIn();
	if($(window).width() > 768){
		$('.nav > .left').animate({
    		width: '70%',
    	}, 1000, 'swing').addClass('active');    
    	$('.nav > .right').animate({
    		width: '30%',
    	}, 1000, 'swing').addClass('active');
    	$('.right > .contents').hide();
    	$('.left .inline-contents').hide();
	}else{
		$('.nav > .left').animate({
    		width: '100%',
    	}, 1000, 'swing');
	}
},function(){
	   $('.nav').fadeOut(600);
    rotateImg();
    $('.cross').fadeOut();
    $('.trigger2, .menu').fadeIn();
    $('.nav > .left').animate({
    		width: '0',
    		}, 1000, 'swing').removeClass('active');
    	if($(window).width() > 768){
    		    
    		$('.nav > .right').animate({
    		width: '0',
    		}, 1000, 'swing').removeClass('active'); 
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

