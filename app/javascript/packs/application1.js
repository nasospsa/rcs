/* eslint no-console:0 */
"use strict";
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb

var $ = require('jquery');
require('bootstrap');

var $movies = $('#movies');

var apiKey = "89d3481555231713397ee0e4d15f48bf";
var url = "https://api.themoviedb.org/3/movie/top_rated";

var getMovies = function(callback) {
  $.get({
    url: url,
    data: {
      api_key: apiKey,
      language: 'en-US'
    },
    success: callback
  });
}


getMovies(function(response) {
  var movies = response.results;

  movies.forEach(function(data, i) {
    var $movie = $('<p>');
    $movie.text((i + 1) + '. ' + data.title);
    $movies.append($movie);
  })
});

