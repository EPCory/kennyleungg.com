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



$(document).ready(function () {
  var $root = $(this);
  
  var listen = function(el,on,fn){(el.addEventListener||(on='on'+on)&&el.attachEvent)(on,fn,false)};
  var resizer = function () {
    
    var titleText = $root.find(".titleText");
    var headerText = $root.find(".headerText");
    var subheaderText = $root.find(".subheaderText");
    var normalText = $root.find(".normalText");
    var smallText = $root.find(".smallText");
    var menuText = $root.find(".menuText");


    //Resize text, numbers were obtained manual testing
    titleText.css('font-size', Math.max(Math.min($root.width() / (20), parseFloat('72px')), parseFloat('42px')));
    headerText.css('font-size', Math.max(Math.min($root.width() / (20), parseFloat('54px')), parseFloat('38px')));
    subheaderText.css('font-size', Math.max(Math.min($root.width() / (35), parseFloat('36px')), parseFloat('28px')));
    menuText.css('font-size', Math.max(Math.min($root.width() / (45), parseFloat('30px')), parseFloat('26px')));
    normalText.css('font-size', Math.max(Math.min($root.width() / (55), parseFloat('28px')), parseFloat('22px')));
    smallText.css('font-size', Math.max(Math.min($root.width() / (60), parseFloat('24px')), parseFloat('20px')));

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
  }
  // Call once to set.
  resizer();

  // Call on resize. Opera debounces their resize by default.
  listen(window, 'resize', resizer);
  listen(window, 'load', resizer);
});