/* eslint no-console:0 */
"use strict";

var $ = require('jquery');
require('bootstrap');

var tpl = require('./templates/movies_template.ejs');

var $movies = $('#movies');
var $loadMore = $('.load-more');
var $totals = $('#totals');

var apiKey = "89d3481555231713397ee0e4d15f48bf";
var url = "https://api.themoviedb.org/3/"

var page = 1;

var getMovies = function(callback) {
  $.get({
    url: url + "movie/top_rated",
    data: {
      api_key: apiKey,
      language: 'en-US',
      page: page
    },
    success: callback
  });
}

var showMovies = function(response) {
  var movies = response.results;
  $movies.append(tpl({movies: movies}));
  if (response.total_pages === response.page) {
    $loadMore.addClass('hide');
  } else {
    $loadMore.removeClass('hide');
  }

  // var rendered = ((response.page - 1) * 20) + response.results.length;
  var rendered = $movies.find('.media').length;
  $totals.text(rendered + ' / ' + response.total_results);
}

getMovies(function(response) {
  $movies.empty();
  showMovies(response);
});

$loadMore.click(function(e) {
  e.preventDefault();

  page += 1;
  getMovies(showMovies);
});

