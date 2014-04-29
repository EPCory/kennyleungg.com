$(document).ready(function () {
	var videoWrappers = $(".youtubeWrapper");
	for (var videoCount = 0; videoCount < videoWrappers.length; videoCount++){
		var videoWrap = $(videoWrappers[videoCount]);
		var videoID = videoWrap.attr("id");
		
		var req = $.get( "https://gdata.youtube.com/feeds/api/videos/"+videoID+"?v=2", function( data ) 
		{
			var coverPhotoLink = "http://img.youtube.com/vi/" + videoID + "/maxresdefault.jpg";
			videoWrap.css("background-image","url(" + coverPhotoLink + ")");
			videoWrap.append("<div class='youtubeBackgroundGradient'></div>");

			var textWrap = $(document.createElement("div"));
			textWrap.addClass("youtubeText").addClass("light");
			textWrap.append("<div class='youtubeTitle normalText'>"+$(data).find("entry").find("title")[0].textContent+"</div>");
			textWrap.append("<div class='youtubeAuthor smallText'> "+$(data).find("entry").find("author").find("name")[0].textContent+" </div>");
			videoWrap.append(textWrap);

			var centerWrap = $(document.createElement("div"));
			centerWrap.addClass("centeredWrapper");
			centerWrap.append("<img class='youtubePlay' src='images/YT.png' onclick=\"getYoutubeIFrame('" + videoID + "')\" onmouseover=\"this.src='images/YT-Hover.png'\" onmouseout=\"this.src='images/YT.png'\"></img>");
			videoWrap.append(centerWrap);
		}).fail(function(){
			var centerWrap = $(document.createElement("div"));
			centerWrap.addClass("centeredWrapper");
			centerWrap.append("<div class='youtubeFailMessage normalText light'>Something went wrong! Could not load video</div>");

			videoWrap.append(centerWrap);
		});
		
		

	}
});

function getYoutubeIFrame(youtubeID) {
	var videoWrap = $("#" + youtubeID);
	videoWrap.append("<iframe src='http://www.youtube.com/embed/" +youtubeID+"?autoplay=1' frameborder='0' allowfullscreen></iframe>");
	videoWrap.children(".youtubeText").remove();
	videoWrap.children(".youtubePlayWrapper").remove();
}

// videoWrap.append("<iframe src='http://www.youtube.com/embed/" +videoID+"' frameborder='0' allowfullscreen></iframe>");