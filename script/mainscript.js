$(document).ready(function(){
$(".button").click(function(e){
    var button = $(this).val();
    if(button === 0){
      $('#hamburger-btn').trigger('click');
      $('html, body').animate({scrollTop: $("#home").offset().top}, 1000)
    }
    else if(button === 1){
      $('#hamburger-btn').trigger('click');
      $('html, body').animate({scrollTop: $("#services").offset().top}, 1000)
    }
    else if(button === 2){
      $('#hamburger-btn').trigger('click');
      $('html, body').animate({scrollTop: $("#about").offset().top}, 1000)
    }
    else if(button === 3){
      $('#hamburger-btn').trigger('click');
      var StopHeight = ($('#contact').prop("scrollHeight") + $('#footer').prop("scrollHeight")) - $(window).height();
      if(StopHeight > 0){
        StopHeight = 0;
      }
      $('html, body').animate({scrollTop: $("#contact").offset().top + StopHeight}, 1000)
    }
  });
});