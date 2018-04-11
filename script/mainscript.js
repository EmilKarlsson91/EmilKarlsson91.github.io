$(document).ready(function(){
  $(".button").click(function(e){
    var button = $(this).val();
    if(button === 0){
      $('html, body').animate({scrollTop: $("#home").offset().top - 60}, 1000)
    }
    else if(button === 1){
      $('html, body').animate({scrollTop: $("#tjänster").offset().top - 60}, 1000)
    }
    else if(button === 2){
      $('html, body').animate({scrollTop: $("#om-oss").offset().top - 60}, 1000)
    }
    else if(button === 3){
      $("html, body").animate({ scrollTop: $('#kontakt').offset().top - 60}, 1000)
    }
  });
});