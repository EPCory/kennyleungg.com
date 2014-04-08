$(document).ready(function () {
	var images = $("img");
	for (var imageCount = 0; imageCount < images.length; imageCount++){
		var image = $(images[imageCount]);
		var highresLink = image.attr("highres-src");
		var lowresLink = image.attr("lowres-src");
		if (highresLink && lowresLink){
			if (screen.width > 640) {
				image.attr("src", highresLink);

			}
			else
			{
				image.attr("src", lowresLink);
			}
		}

	}
});