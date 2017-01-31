(function($){
  "use strict";

$(function(){
  $('.dropdown ol').hide();

  $('.dropdown h1').click(function(){
    $('.dropdown ol').slideUp();
    $(this).next().slideDown();
    });
});

})(jQuery);
