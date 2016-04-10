angular.module('poeticApp')

.factory('getAuthors', function($resource) {
    return $resource(
          'http://poetrydb.org/author',
          { method: 'getTask', q: '*' }, // Query parameters
          {'query': { method: 'GET' }}
        );
})

.factory('getPoems', function($resource) {
    return $resource(
          'http://poetrydb.org/author/:authorName/title',
          {authorName:'@authorName'}, // Query parameters
          {query: { method: 'GET',isArray:true }}
        );
})

.factory('getLines', function($resource) {
    return $resource(
          'http://poetrydb.org/title/:title/lines',
          {title:'@title'},
          {query: { method: 'GET',isArray:true }}
        );
});
