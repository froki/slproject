$(document).ready(function() {
var url ='https://free-ec2.scraperwiki.com/cvdpl6y/ebf52a60f3514fc/sql/?q=select%20%0A%09id_str%2C%0A%09tweet_url%2C%0A%09created_at%2C%0A%20%20%20%20text%2C%0A%20%20%20%20hashtags%0Afrom%20tweets%0A--%20where%20created_at%20%3E%20%0Aorder%20by%20tweet_url%0Alimit%2020'
$.getJSON(url, whatever);


function whatever(data) {
var i = 0;
for ( var i = 0; i < data.length; i++){
 // console.log(data[i].text);
 response = data[i].text; 
 response.toString();
 lookUp = "kista";


if (response.indexOf(lookUp) != -1)
{
  console.log("Works");
}

}}
});



stations = {
	fridhemsplan: { x: 133, y: 321 },
	telefonplan: { x: 1331, y: 1955 }
	midsommarkransen: { x: 1511, y: 1545 }

	
}