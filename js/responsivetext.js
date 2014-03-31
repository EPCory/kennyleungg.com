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

  $.fn.fitPane = function() {

    return this.each(function(){

      // Store the object
      var $pane = $(this);
      var $headerText = $pane.find(".headerText");
      var $subheaderText = $pane.find(".subheaderText");
      var $normalText = $pane.find(".normalText");
      var $smallText = $pane.find(".smallText");

      
      // Resizer() resizes items based on the object width divided by the compressor * 10
      var resizer = function () {
        $headerText.css('font-size', Math.max(Math.min($pane.width() / (20), parseFloat('54px')), parseFloat('32px')));
        $subheaderText.css('font-size', Math.max(Math.min($pane.width() / (30), parseFloat('30px')), parseFloat('18px')));
        $normalText.css('font-size', Math.max(Math.min($pane.width() / (35), parseFloat('26px')), parseFloat('18px')));
        $smallText.css('font-size', Math.max(Math.min($pane.width() / (50), parseFloat('22px')), parseFloat('16px')));

        var paneText = $pane.find(".paneText");
        if (paneText) {
          var paneHeight = $pane.outerHeight(true);
          var textHeight = $headerText.outerHeight(true) + $subheaderText.outerHeight(true) + $normalText.outerHeight(true) + $smallText.outerHeight(true);
          textHeight += paneText[0]? parseInt(paneText.css('margin-top')) : 0;
          if (textHeight > paneHeight) {
            $normalText.fadeOut(100);
          }
          else
          {
            $normalText.fadeIn(100);
          }
        }
      };

      // Call once to set.
      resizer();

      // Call on resize. Opera debounces their resize by default.
      listen(window, 'resize', resizer);

    });

  };

})( jQuery );