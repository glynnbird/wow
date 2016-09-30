
var getstarted = function() {
  $.get('/getstarted').complete(function() {
    $('#buttons').removeClass('hide');
  });


};

(function($){
  $(function(){

    $('.button-collapse').sideNav();

  }); // end of document ready
})(jQuery); // end of jQuery name space