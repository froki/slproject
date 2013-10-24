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
	//red
	telefonplan: { x: 37.7, y: 75.1 },
	norsborg: { x: 2.1, y: 96.59 },	
	hallunda: { x: 4.6, y: 93.6 },
	alby:   { x: 7.9, y: 89.9 },
	fittja: { x: 13.4, y: 83.3 },
	masmo:  { x: 7.9, y: 89.9 },
	vårby:  { x: 16.5, y: 79.5 },
	vårberg:  { x: 19.5, y: 76.0 },
	skärholmen :  { x: 22.6, y: 72.6 },
	sätra:  { x: 25.3, y: 69.3 },
	bredäng: { x: 28.4, y: 69.1 },
	mälarhöjden: { x: 31.3, y: 62.3 },
	axelsberg: { x: 33.8, y: 60.8 },

 //Hjulsta line
	Hjulsta: { x: 11.9, y: 13.2 },
	Tensta: { x: 13.6, y: 15.4 },
	Rinkeby: { x: 16.2, y: 18.4 },
	Rissne: { x: 19.1, y: 21.5 },
	Duvbo: { x: 21.7, y: 24.6 },
	Sundbyberg: { x: 24.0, y: 27.4 },
	Vreten: { x: 26.6, y: 30.5 },
	Huvudsta: { x: 28.9, y: 32.9 },
//Akalla line

	Akalla: { x: 29.1, y: 12.9 },
	Husby: { x: 31.7, y: 15.9 },
	Kista: { x: 34.6, y: 19.3 },
	Hallonbergen: { x: 37.6, y: 22.7 },
	Näckrosen: { x: 40.5, y: 26.3 },
	Solna: { x: 43.6, y: 29.8 },
	
//blue binding station
	VästraSkogen: { x: 46.6, y: 34.0 },
	
	Stadshagen: { x: 49.8, y: 38.0 },
	Rådhuset: { x: 64.2, y: 49.2 },
	Kungsträdgården: { x: 86.9, y: 49.8 },









}
