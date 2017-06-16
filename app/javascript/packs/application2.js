/* eslint no-console:0 */
"use strict";

var $ = require('jquery');
require('bootstrap');
var tpl = require('./templates/movies_template.ejs');

var $movies = $('#movies');

var apiKey = "89d3481555231713397ee0e4d15f48bf";
var url = "https://api.themoviedb.org/3/"

var getMovies = function(callback) {
  $.get({
    url: url + "movie/top_rated",
    data: {
      api_key: apiKey,
      language: 'en-US',
      page: 1
    },
    success: callback
  });
}


getMovies(function(response) {
  var movies = response.results;
  $movies.html(tpl({movies: movies}));
});

