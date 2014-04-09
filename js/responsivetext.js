/*global jQuery */
/*!
* FitText.js 1.2
*
* Copyright 2011, Dave Rupert http://daverupert.com
* Released under the WTFPL license
* http://sam.zoy.org/wtfpl/
*
* Date: Thu May 05 14:23:00 2011 -0600
*/

(function( $ ){
  var listen = function(el,on,fn){(el.addEventListener||(on='on'+on)&&el.attachEvent)(on,fn,false)}

  $.fn.fitText = function() {

    return this.each(function(){

      // Store the object
      var $root = $(this);
      var $headerText = $root.find(".headerText");
      var $subheaderText = $root.find(".subheaderText");
      var $normalText = $root.find(".normalText");
      var $smallText = $root.find(".smallText");
      var $menuText = $root.find(".menuText");
      
      var resizer = function () {
        //Resize text, numbers were obtained manual testing
        $headerText.css('font-size', Math.max(Math.min($root.width() / (25), parseFloat('54px')), parseFloat('32px')));
        $subheaderText.css('font-size', Math.max(Math.min($root.width() / (35), parseFloat('30px')), parseFloat('22px')));
        $menuText.css('font-size', Math.max(Math.min($root.width() / (35), parseFloat('28px')), parseFloat('24px')));
        $normalText.css('font-size', Math.max(Math.min($root.width() / (45), parseFloat('26px')), parseFloat('20px')));
        $smallText.css('font-size', Math.max(Math.min($root.width() / (55), parseFloat('22px')), parseFloat('18px')));

        var paneText = $root.find(".paneText");
        var pane = $root.find(".pane");
        if (paneText && pane) {
          var paneHeight = pane.outerHeight(true) * 0.95; //5% buffer, don't want text sticking to edge
          paneText.each(function() {
            var currentPaneText = $(this);
            var paneHeader = currentPaneText.find(".paneHeader");
            var paneBody = currentPaneText.find(".paneBody");
            var bodyLineItems = paneBody.find("li");
            var textHeight = currentPaneText.position().top + parseFloat(currentPaneText.css("margin-top")) + paneHeader.outerHeight(true);
            var bodyHeight = 0;
            for (var i = 0; i < bodyLineItems.length;i++) {
              var bodyLineItem = $(bodyLineItems[i]);
              bodyHeight += bodyLineItem.outerHeight(true);

              if (textHeight + bodyHeight > paneHeight) {
                bodyLineItem.fadeOut(100);
              }
              else {
                bodyLineItem.fadeIn(100);
              }
            }
          });
        }
      };

      // Call once to set.
      resizer();

      // Call on resize. Opera debounces their resize by default.
      listen(window, 'resize', resizer);
      listen(window, 'load', resizer);

    });

  };

})( jQuery );