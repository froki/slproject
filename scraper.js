// Set up the twitter library stuff
var Twit = require('twit');
var T = new Twit({
    consumer_key:         process.env.CONSUMER_KEY
  , consumer_secret:      process.env.CONSUMER_SECRET
  , access_token:         process.env.ACCESS_TOKEN
  , access_token_secret:  process.env.ACCESS_TOKEN_SECRET
});

// Set up the web server stuff
var express = require('express');
var app = express();
var server = require('http').createServer(app);


// Used to store the latest results.
var cache = {};
var lastFetchedAt;
var fetchNewTweetsInterval = 60 * 1000; // 60 seconds


// Checks to see whether it has been 60 seconds since the last time you got the data
function shouldFetchNewData() {
  return !lastFetchedAt || ((new Date().getTime() - lastFetchedAt) > fetchNewTweetsInterval);
}

app.get('/', function(req, res) {
  // Allow for CORS that lets you do cross domain requests
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  if (shouldFetchNewData()) {
    console.log("Fetching from twitter!");

    // Call the twitter API
    T.get('search/tweets', { q: '@slbiljett', count: 100 }, function(err, reply) {
      if (reply) {
        // Save the data we got back.
        cache = reply;
        lastFetchedAt = new Date();
        res.send(reply);
      } else {
        res.send(err);
      }
    });
  } else { // If it's been less than 1 minute since the last time we called twitter, 
          // return the cached version
    console.log("rendering from cache!")
    res.send(cache);
  }
});

server.listen(process.env.PORT || 5000);
console.log("The server is up!");