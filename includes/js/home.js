$(document).ready(function(){
  $('#watch > .button').click(function(){
    $('.logo, #watch').fadeOut();
    $('<iframe id="trailer" width="100%" height="60%" src="https://www.youtube.com/embed/Jo-0ytcEXKg?enablejsapi=1"></iframe>').insertAfter('.logo');
    $('#trailer').fadeIn();
    $('#back').fadeIn();
    $("#trailer")[0].src += "&autoplay=1"
  })
  $('#back > .button').click(function(){
    $('#trailer').fadeOut();
    $("#trailer").remove();
    $('#back').fadeOut();
    $('.logo, #watch').fadeIn();
  });
});
