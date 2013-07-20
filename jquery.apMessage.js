(function($) {
  init();
  var apMsgHolder = $('.apMessage'),
      msgHolder = $(".message", apMsgHolder);
  apMessage = function(msg, options) {
    options = $.extend({
      delay: 5000
    }, options); 
    msgHolder.text(msg);
    apMsgHolder.css({'left': getMiddle.left(), 'top': getMiddle.top()});
    apMsgHolder.fadeIn();
    setTimeout(function() {
      apMsgHolder.fadeOut();
    }, options.delay);
  };
  $(document).on("click", '.apMessage', function() {
    apMsgHolder.fadeOut();
  });
  var getMiddle = {
    left: function() {
      var windowWidth = $(window).width() / 2,
        apMsgWidth = apMsgHolder.outerWidth() / 2;
      return (windowWidth - apMsgWidth);
    },
    top: function() {
      var windowHeight = $(window).height() / 2,
          apMsgHeight = apMsgHolder.outerHeight() / 2;
      return (windowHeight - apMsgHeight);
    }
  };
  function init() {
     $('body').append("<div class='apMessage' title='Click for close'><div class='message'></div></div>");
  }
}(jQuery));
