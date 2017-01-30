(function($){
  "use strict";

$(function(){
  $('.box-header ul').hide();

  $('.box-header h1').click(function(){
  $('.box-header ul').slideUp();
  $(this).next().slideDown();
    });


});

})(jQuery);
