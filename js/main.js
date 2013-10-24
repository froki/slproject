$(document).ready(function() {
	var url ='https://free-ec2.scraperwiki.com/c4uem5y/b800cc5ce96d4be/sql/?q=select200A09id_str2C0A09tweet_url2C0A%20%20%20%20text%2C%0A%20%20%20%20tweet_url%2C%0A%20%20%20%20created_at%0Afrom%20tweets%0A--%20where%20created_at%20%3E%20%0Aorder%20by%20created_at%0A'
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
	Örnsberg: { x: 38.6, y: 60.8 },
    Aspudden:  { x: 43.7, y: 60.7 },
    Liljeholmen: { x: 49.0, y: 61.0 },
    Hornstull: { x: 54.7, y: 60.7 },
    Liljeholmen: { x: 55.5, y: 44.6 },
    Zinkensdamm: { x: 60.8, y: 60.7 },
    Mariatorget: { x: 66.7, y: 60.7 },
    Östermalmstorg: { x: 72.3, y: 40.4 },
    Stadion: { x: 71.8, y: 30.8 },
    Tekniska: { x: 71.8, y: 26.7 },
    Universitetet: { x: 71.8, y: 23.0 },
    Bergshamra: { x: 71.8, y: 19.4 },
    Danderyd: { x: 71.9, y: 15.8 },
    Mörby: { x:71.8 , y: 12.9 },


	Karlaplan: { x: 80.9, y: 30.4 },
	Gärdet: { x: 88.8, y: 21.5 },
	Ropsten: { x: 96.0, y: 12.5 },
	
	Midsommarkransen: { x: 44.4, y: 66.9 },
	Telefonplan: { x: 37.9, y: 74.9 },
	Hägerstensåsen: { x: 30.6, y: 83.1 },
	Västertorp: { x: 24.3, y: 90.8 },
	Fruängen: { x: 19.3, y: 96.9 },

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


 //Green line
	Hässeblygård: { x: 3.7, y: 45.8 },
	Johannelund: {x: 9.8, y: 45.8 },
	Vällingby: {x: 13.5, y: 45.8 },
	Råcksta: {x: 16.9, y: 45.8 },
	Blackeberg: {x: 20.7, y: 45.8 },
	Islandstorget: {x: 24.2, y: 45.8 },
	Ängbyplan: {x: 27.7, y: 45.8 },
	Åkeshov: {x: 30.6, y: 44.9 },
	Brommaplan: {x: 34.7, y: 45.8 },
	Abrahamsberg: {x: 38.3, y: 45.8 },
	Storamossen: {x: 41.5, y: 45.8 },
	Alvik: {x: 42.6, y: 43.3 }, 
	Kristineberg: {x: 48.7, y: 45.8 }, 
	Thorildsplan: {x: 52.3, y: 45.8 }, 
	Fridhemsplan: {x: 55.4, y: 44.4 }, 
	StEriksplan: {x: 58.9, y: 43.3 }, 
	Odenplan: {x:62.1, y: 43.4 }, 
	Rådmansgatan: {x: 65.0, y: 43.4 }, 
	Hötorget: {x: 68.3, y: 43.3 }, 
	centralen: {x: 73.9, y: 50.0 }, 
	Slussen: {x: 74.9, y: 57.7 }, 
	Medborgarplatsen: {x: 75.7, y: 61.2}, 
	Skanstull: {x: 75.7, y: 64.4 }, 
	Gullmarsplan: {x: 74.8, y: 62.7 }, 
	Gamlastan: {x: 73.9, y: 54.0 }, 

	
//Farsta strand
	Skärmabrink: {x: 75.4, y: 70.2 }, 
	Blåsut: {x: 74.9, y: 76.3}, 
	Sandsborg: {x: 74.9, y: 79.4}, 
	Skogskyrkogården: {x: 74.9, y: 82.5}, 
	Tallkrogen: {x: 74.9, y: 85.6}, 
	Gubbängen: {x: 74.9, y: 88.6}, 
	Hökarängen: {x: 74.9, y: 92.0} , 
	Farsta: {x: 74.9, y: 94.8 }, 
	Farsta: {x: 74.9, y: 96.8},

	//Skarpnäck
	Hammarbyhöjden: {x: 79.5, y: 74.4}, 
	Björkhagen: {x: 84.2, y: 79.8},
	Kärrtorp: {x: 89.0, y: 85.5 }, 
	Skarpnäck: {x: 98.6, y: 96.9 }, 
	

 //Hagsätra
	Globen: {x: 60.3, y: 72.8 }, 
	Enskede: {x: 67.0, y:75.5 }, 
	Sockenplan: {x: 64.5, y: 78.5 }, 
	Svedmyra: {x: 62.0, y: 81.4}, 
	Stureby: {x: 59.5, y: 84.4 }, 
	Bandhagen: {x: 56.8 , y: 87.5 }, 
	Högdalen: {x: 54.1, y: 90.7 }, 
	Rågsved: {x: 51.6, y: 93.5}, 
	Hagsätra: {x: 48.7, y: 97.0} 




}








