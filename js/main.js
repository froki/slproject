$(document).ready(function() {
	var url ='https://free-ec2.scraperwiki.com/c4uem5y/b800cc5ce96d4be/sql/?q=select%20%0A%09id_str%2C%0A%09tweet_url%2C%0A%20%20%20%20text%2C%0A%20%20%20%20tweet_url%2C%0A%20%20%20%20created_at%0Afrom%20tweets%0A--%20where%20created_at%20%3E%20%0Aorder%20by%20created_at%0A'
	$.getJSON(url, processTweets);


	function processTweets(data) {
		for (var i = 0; i < data.length; i++){
			response = data[i].text; 
			response = response.toLowerCase();

			for (var station in stations) {
				if (response.indexOf(station) != -1) {
					showMarker(station);
				}
			}

		}
	}
});

function showMarker(station) {
	var pin = jQuery("<div>");
	pin.addClass("pin");
	pin.css("left", stations[station].x + "%");
	pin.css("top", stations[station].y + "%");
	pin.append("<img src='SLmappin.png'>")
	pin.appendTo("#map");
}


stations = {
	fridhemsplan: { x: 55.5, y: 44.6 },
	telefonplan: { x: 37.7, y: 75.1 }	
}
