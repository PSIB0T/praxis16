$(document).ready(function(){
  $('#watch > .button').click(function(){
    $('.logo, #watch').fadeOut();
    /*Video appears on "WATCH VIDEO" button click and logo and the "WATCH VIDEO"button fades while 
    the "BACK" button appears */
    $('<iframe id="trailer" width="100%" height="60%" src="https://www.youtube.com/embed/Jo-0ytcEXKg?enablejsapi=1"></iframe>').insertAfter('.logo');
    $('#trailer').fadeIn();
    $('#back').fadeIn();
    $("#trailer")[0].src += "&autoplay=1" //autoplay
  })
  $('#back > .button').click(function(){
    $('#trailer').fadeOut();
    $("#trailer").remove(); //trailer element is removed
    $('#back').fadeOut();
    $('.logo, #watch').fadeIn(); //button and logo is brought back
  });
});
