//Parallax
//Derived from http://cirkateater.no/

jQuery(function($){
	var scrollTop = 0;
	var winHeight = 0;
	var smoothing = 0;
	var paneTops = [];
	var paneBottoms = [];
	var paneHeights = [];
	var imageHeights = [];
	var divWrapper = $('#wrap').css({position:'fixed', width:'100%', top:0, left:0})[0];
	var scrollableArea = $('<div>').css({height: divWrapper.clientHeight}).appendTo('body')[0];
	var parallaxPanes = $('.pane');
	var parallaxImages = parallaxPanes.find('img');

	var update = function(){
		//Call this function every time the screen needs to redraw
		window.requestAnimFrame(update);

		if(Math.abs(scrollTop - smoothing) > 1){
			//Transition by a quarter of the difference each frame
			var smoothedScrollPosition = Math.floor(smoothing += .25 * (scrollTop-smoothing));
			var bot = smoothedScrollPosition + winHeight;
			divWrapper.style.top = (smoothedScrollPosition*-1) + 'px';

			for(var i = parallaxImages.length; i--;)
			{
				//If this pane is in view
				if(paneBottoms[i] > smoothedScrollPosition && paneTops[i] < bot)
				{
					parallaxImages[i].style.top = ((paneTops[i] - smoothedScrollPosition) / Math.max(imageHeights[i] - paneHeights[i],winHeight - paneHeights[i]) * (paneHeights[i] - imageHeights[i])) + 'px';
				}
			}
		}
	}

	var listen = function(el,on,fn){(el.addEventListener||(on='on'+on)&&el.attachEvent)(on,fn,false)}

	var bounce = function(){
		clearTimeout(bounce.timer);
		bounce.timer = setTimeout(resize, 200);
	}
	
	var scroll = function(){
		scrollTop = Math.max(0, document.documentElement.scrollTop || window.pageYOffset || 0);
	}

	var resize = function(){
		winHeight = (document.documentElement.clientHeight || document.body.clientHeight || 0);
		//winHeight = (document.body.clientHeight || 0);
		var windowWidth = document.body.clientWidth;	
		var ratio = windowWidth/parallaxImages[0].clientWidth;
		for(var i = parallaxImages.length;i--;)
		{
			paneTops[i]=parallaxPanes[i].offsetTop;
			paneHeights[i]=parallaxPanes[i].clientHeight;
			paneBottoms[i]=paneTops[i]+paneHeights[i];
			imageHeights[i]=parallaxImages[i].clientHeight*ratio;
		}

		for(var i = parallaxImages.length;i--;)
		{
			parallaxImages[i].style.width = windowWidth+'px';
			parallaxImages[i].style.height = imageHeights[i]+'px';
		}

		scrollableArea.style.height = divWrapper.clientHeight + 'px';
		smoothing -= 5;
		update();
	}

	listen(window, 'scroll', scroll);
	listen(window, 'resize', bounce);
	listen(window, 'load',   resize);
	resize();
	update();
});