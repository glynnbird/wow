
var getstarted = function() {
  $.get('/getstarted').complete(function() {
    $('#buttons').removeClass('hide');
  });


};

(function($){
  $(function(){

    $('.button-collapse').sideNav();

    var dm = window.location.hostname;
    $('#sss-button').attr('href', 'http://' + dm + ':' + 6001);
    $('#sas-button').attr('href', 'http://' + dm + ':' + 6002);
    $('#scs-button').attr('href', 'http://' + dm + ':' + 6004);

  }); // end of document ready
})(jQuery); // end of jQuery name space