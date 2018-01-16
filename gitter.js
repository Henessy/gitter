#!/usr/bin/env node

'use strict';

var fs = require('fs');
var Twitter = require ('twitter');
var client = new Twitter({
  consumer_key: 'YOUR_CONSUMER_KEY',
  consumer_secret: 'YOUR_CONSUMER_SECRET',
  access_token_key: 'YOUR_ACCESS_TOKEN_KEY',
  access_token_secret: 'YOUR_ACCESS_TOKEN_SECRET',
});
// var project = 'Link_to_Github_Project';
var json = fs.readFileSync('package.json');
var tweet = fs.readFileSync('.git/COMMIT_EDITMSG') + ' ' + JSON.parse(json).repository.url;

client.post('statuses/update', { status: tweet},  
  function(error, tweet, response) {
    if(error) throw error;
});