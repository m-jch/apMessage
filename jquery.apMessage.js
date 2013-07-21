(function($) {
  init();
      
  apMessage = function(msg, options) {
    var apMsgHolder = $('.apMessage'),
        msgHolder = $(".message", apMsgHolder),
        winWidth = $(window).width(),
        winHeight = $(window).height(),
        timeOut = 0;
    options = $.extend({
      delay: 5000,
      in_animate: 'fade_in',
      out_animate: 'fade_out'
    }, options);
    var getMiddle = {
      left: function() {
        var apMsgWidth = apMsgHolder.outerWidth() / 2;
        return (winWidth / 2) - apMsgWidth;
      },
      top: function() {
        var apMsgHeight = apMsgHolder.outerHeight() / 2;
        return (winHeight / 2) - apMsgHeight;
      }
    };
    msgHolder.text(msg);
    switch(options.in_animate) {
      case 'fade_in': fadeIn(); break;
      case 'from_right': fromRightIn(); break;
      case 'from_left': fromLeftIn(); break;
    }
    $(document).on("click", '.apMessage', function() {
      out_func();
      clearInterval(timeOut);
    });
    function out_func() {
      switch(options.out_animate) {
        case 'fade_out': fadeOut(); break;
        case 'from_right': fromRightOut(); break;
        case 'from_left': fromLeftOut(); break;
      }
    };
    function setTimeOut() {
      timeOut = setTimeout(function() {
        out_func();
      }, options.delay);
    };
    function showOver() {
      apMsgHolder.hide();
      options = "";
    };
    function fadeIn() {
      apMsgHolder.css({'left': getMiddle.left(), 'top': getMiddle.top()});
      apMsgHolder.fadeIn(function(){setTimeOut();});
    };
    function fromRightIn() {
      apMsgHolder.css({'left': winWidth + 100, 'top': getMiddle.top(), 'display': 'block'});
      apMsgHolder.animate({'left': getMiddle.left()}, function(){setTimeOut();});
    };
    function fromLeftIn() {
      apMsgHolder.css({'left': -100, 'top': getMiddle.top(), 'display': 'block'});
      apMsgHolder.animate({'left': getMiddle.left()}, function(){setTimeOut();});
    };
    function fadeOut() {
      apMsgHolder.fadeOut(function(){showOver();});
    };
    function fromRightOut() {
      apMsgHolder.animate({'left': winWidth + 100}, function(){showOver();});
    };
    function fromLeftOut() {
      apMsgHolder.animate({'left': -100}, function(){showOver();});
    };
  };
  function init() {
     $('body').append("<div class='apMessage' title='Click for close'><div class='message'></div></div>");
  };  
}(jQuery));
