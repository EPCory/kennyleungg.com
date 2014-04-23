$(document).ready(function () {
	var videoWrappers = $(".youtubeWrapper");
	for (var videoCount = 0; videoCount < videoWrappers.length; videoCount++){
		var videoWrap = $(videoWrappers[videoCount]);
		var videoID = videoWrap.attr("videoID");
		var coverPhotoLink = "http://img.youtube.com/vi/" + videoID + "/maxresdefault.jpg";
		var thumbnailLink = "http://img.youtube.com/vi/" + videoID + "/hqdefault.jpg";

		videoWrap.css("background-image","url(" + coverPhotoLink + ")");
		videoWrap.append("<div class='youtubeBackgroundGradient'></div>");
		videoWrap.append("<iframe src='http://www.youtube.com/embed/" +videoID+"' frameborder='0' allowfullscreen></iframe>");
		// videoWrap.append("<div class='youtubeThumbnail' style=background-image:"+"url(" + coverPhotoLink + ")></div>");

	}
});

// videoWrap.append("<iframe src='http://www.youtube.com/embed/" +videoID+"' frameborder='0' allowfullscreen></iframe>");