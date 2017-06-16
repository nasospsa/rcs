/* eslint no-console:0 */
"use strict";

var $ = require('jquery');
require('bootstrap');

var movies = require('./services/movies');
var tpl = require('./templates/movies_template.ejs');

var $movies = $('#movies');
var $loadMore = $('.load-more');
var $totals = $('#totals');
var $search = $('#search');

var page = 1;

var showMovies = function(response) {
  var movies = response.results;
  $movies.append(tpl({movies: movies}));
  $loadMore.toggleClass('hide', response.total_pages === response.page);

  var rendered = $movies.find('.media').length;
  $totals.text(rendered + ' / ' + response.total_results);
}

movies.topRated(page, function(response) {
  $movies.empty();
  showMovies(response);
});

$loadMore.click(function(e) {
  e.preventDefault();

  page += 1;
  movies.topRated(page, showMovies);
});

$search.change(function(e) {
  var query = e.currentTarget.value;

  movies.search(query, 1, function(response) {
    $movies.empty();
    showMovies(response);
  });
});
