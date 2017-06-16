var apiKey = "89d3481555231713397ee0e4d15f48bf";
var url = "https://api.themoviedb.org/3/"

var topRated = function(page, callback) {
  $.get({
    url: url + "movie/top_rated",
    data: {
      api_key: apiKey,
      language: 'en-US',
      page: page
    },
    success: callback
  });
};

var search = function(query, page, callback) {
	$.get({
    url: url + "search/movie",
    data: {
      api_key: apiKey,
      language: 'en-US',
      page: page,
      query: query
    },
    success: callback
  });
}

module.exports = {
	topRated: topRated,
	search: search
};