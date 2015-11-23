var MAX_ID = 0;
var DEFAULT_COUNT = 20;
var screen_name = "";
$(document).ready(function() {
	$('form').submit( function(event){
		event.preventDefault();
		
		//reset: remove childeren under twitterFeeds.
		$('#twitterFeeds').children('p').remove();
		
		screen_name = $('input[name=screen_name]').val();
		console.log("call ajax for input screen_name " + screen_name);
		$.get('/getTweets', {
			screen_name : screen_name,
			count : DEFAULT_COUNT
		}, function (data) {
			console.log(data);
			
			data.tweets.forEach(function(t){
				$('#twitterFeeds').append('<p>' + t.text + '</p>');
			});
			MAX_ID = data.max_id;
			
		});
	
	});
	//if window's bottom has reached, load more.
	$(window).scroll(function() {
		if($(window).scrollTop() + $(window).height() == $(document).height()) {
	       if(screen_name){
		   		console.log('getting more tweets for ' + screen_name + " max_id = " + MAX_ID);
		   		
		   		$.get('/getTweets', {
					screen_name : screen_name,
					count : DEFAULT_COUNT,
					max_id : MAX_ID
				}, function (data) {
					console.log(data);
					if(data.tweets){ //if any tweet returned
						data.tweets.forEach(function(t){
							$('#twitterFeeds').append('<p>' + t.text + '</p>');
						});
						MAX_ID = data.max_id;
					}
				});
		   	}
	   	}


	});

});