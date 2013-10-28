$(document).ready(function() {

	var url ='http://slapp.herokuapp.com';
	var threshold = 30 * 60 * 1000;  // 20 minutes (20 000 milliseconds )


	function getTweets() {
		console.log("Fetching new tweets");
		$.getJSON(url, processTweets);
	}

	getTweets();
	setInterval(getTweets, 60000);

	function processTweets(data) {
		$(".pin").remove();
		var tweets = data.statuses;
		for (var i = 0; i < tweets.length; i++){
			var tweet = tweets[i];
			var text = tweets[i].text.toLowerCase(); 
			var created_at = new Date(tweets[i].created_at);
			if ((new Date() - created_at) > threshold) {
				// If a tweet is older than 20 minutes, stop looping
				// over the tweets.
				break;
			}

			for (var station in stations) {
				if (text.indexOf(station) != -1) {
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
	pin.append('<a data-toggle="modal"  href="#twitterModal"><img src="SLmappin.png"></a>');
	pin.appendTo("#map");
}


stations = {
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
	örnsberg: { x: 38.6, y: 60.8 },
    aspudden:  { x: 43.7, y: 60.7 },
    liljeholmen: { x: 49.0, y: 61.0 },
    hornstull: { x: 54.7, y: 60.7 },
    zinkensdamm: { x: 60.8, y: 60.7 },
    mariatorget: { x: 66.7, y: 60.7 },
    östermalmstorg: { x: 72.3, y: 40.4 },
    stadion: { x: 71.8, y: 30.8 },
    stadions: { x: 71.8, y: 30.8 },
    tekniska: { x: 71.8, y: 26.7 },
    universitetet: { x: 71.8, y: 23.0 },
    bergshamra: { x: 71.8, y: 19.4 },
    danderyd: { x: 71.9, y: 15.8 },
    mörby: { x:71.8 , y: 12.9 },


	karlaplan: { x: 80.9, y: 30.4 },
	gärdet: { x: 88.8, y: 21.5 },
	ropsten: { x: 96.0, y: 12.5 },
	
	midsommarkransen: { x: 44.4, y: 66.9 },
	telefonplan: { x: 37.9, y: 74.9 },
	hägerstensåsen: { x: 30.6, y: 83.1 },
	västertorp: { x: 24.3, y: 90.8 },
	fruängen: { x: 19.3, y: 96.9 },

 //Hjulsta line
	hjulsta: { x: 11.9, y: 13.2 },
	tensta: { x: 13.6, y: 15.4 },
	rinkeby: { x: 16.2, y: 18.4 },
	rissne: { x: 19.1, y: 21.5 },
	duvbo: { x: 21.7, y: 24.6 },
	sundbyberg: { x: 24.0, y: 27.4 },
	sumpan: { x: 24.0, y: 27.4 },
	vreten: { x: 26.6, y: 30.5 },
	huvudsta: { x: 28.9, y: 32.9 },
//Akalla line

	akalla: { x: 29.1, y: 12.9 },
	husby: { x: 31.7, y: 15.9 },
	kista: { x: 34.6, y: 19.3 },
	hallonbergen: { x: 37.6, y: 22.7 },
	näckrosen: { x: 40.5, y: 26.3 },
	solna: { x: 43.6, y: 29.8 },
	
//blue binding station
	västraSkogen: { x: 46.6, y: 34.0 },
	
	stadshagen: { x: 49.8, y: 38.0 },
	rådhuset: { x: 64.2, y: 49.2 },
	kungsträdgården: { x: 86.9, y: 49.8 },
	kungsan: { x: 86.9, y: 49.8 },


 //Green line
	hässelbygård: { x: 3.7, y: 45.8 },
	johannelund: {x: 9.8, y: 45.8 },
	vällingby: {x: 13.5, y: 45.8 },
	råcksta: {x: 16.9, y: 45.8 },
	blackeberg: {x: 20.7, y: 45.8 },
	islandstorget: {x: 24.2, y: 45.8 },
	ängbyplan: {x: 27.7, y: 45.8 },
	åkeshov: {x: 30.6, y: 44.9 },
	brommaplan: {x: 34.7, y: 45.8 },
	abrahamsberg: {x: 38.3, y: 45.8 },
	storamossen: {x: 41.5, y: 45.8 },
	alvik: {x: 42.6, y: 43.3 }, 
	kristineberg: {x: 48.7, y: 45.8 }, 
	thorildsplan: {x: 52.3, y: 45.8 }, 
	fridhemsplan: {x: 55.4, y: 44.4 }, 
	steriksplan: {x: 58.9, y: 43.3 }, 
	odenplan: {x:62.1, y: 43.4 }, 
	rådmansgatan: {x: 65.0, y: 43.4 }, 
	hötorget: {x: 68.3, y: 43.3 }, 
	centralen: {x: 73.9, y: 50.0 },
	tcen: {x: 73.9, y: 50.0 },
	tcentralen: {x: 73.9, y: 50.0 },
	sergels: {x: 73.9, y: 50.0 },
	slussen: {x: 74.9, y: 57.7 }, 
	medborgarplatsen: {x: 75.7, y: 61.2},
	medis: {x: 75.7, y: 61.2},
	skanstull: {x: 75.7, y: 64.4 }, 
	gullmarsplan: {x: 74.8, y: 62.7 }, 
	gamlastan: {x: 73.9, y: 54.0 }, 

	
//Farsta strand
	skärmabrink: {x: 75.4, y: 70.2 }, 
	blåsut: {x: 74.9, y: 76.3}, 
	sandsborg: {x: 74.9, y: 79.4}, 
	skogskyrkogården: {x: 74.9, y: 82.5}, 
	tallkrogen: {x: 74.9, y: 85.6}, 
	gubbängen: {x: 74.9, y: 88.6}, 
	hökarängen: {x: 74.9, y: 92.0} , 
	farsta: {x: 74.9, y: 94.8 }, 
	

	//Skarpnäck
	hammarbyhöjden: {x: 79.5, y: 74.4}, 
	björkhagen: {x: 84.2, y: 79.8},
	kärrtorp: {x: 89.0, y: 85.5 }, 
	skarpnäck: {x: 98.6, y: 96.9 }, 
	

 //Hagsätra
	globen: {x: 60.3, y: 72.8 }, 
	enskede: {x: 67.0, y:75.5 }, 
	sockenplan: {x: 64.5, y: 78.5 }, 
	svedmyra: {x: 62.0, y: 81.4}, 
	stureby: {x: 59.5, y: 84.4 }, 
	bandhagen: {x: 56.8 , y: 87.5 }, 
	högdalen: {x: 54.1, y: 90.7 }, 
	rågsved: {x: 51.6, y: 93.5}, 
	hagsätra: {x: 48.7, y: 97.0} 




}








