$(document).ready(function () {
	var images = $(".responsiveImage");
	for (var imageCount = 0; imageCount < images.length; imageCount++){
		var image = $(images[imageCount]);
		var highresLink = image.attr("highres-src");
		var lowresLink = image.attr("lowres-src");
		if (highresLink && lowresLink){
			if (screen.width > 640) 
			{
				if (image.is('img'))
				{
					image.attr("src", highresLink);
				}
				else if (image.is('div'))
				{
					image.css("background-image","url("+highresLink+")");
				}

			}
			else
			{
				if (image.is('img'))
				{
					image.attr("src", lowresLink);
				}
				else if (image.is('div'))
				{
					image.css("background-image","url("+lowresLink+")");
				}
			}
		}

	}
});