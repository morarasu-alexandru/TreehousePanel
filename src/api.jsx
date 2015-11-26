var Fetch = require('whatwg-fetch');
var rootUrl ='https://teamtreehouse.com/';
var user = 'alexmorarasu';

module.exports = window.api = {
	get: function() {
		return fetch(rootUrl + user + '.json')
		.then(function(response){
			return response.json()
		})
		 .then(function(data){
			    console.log(data);
			})
	}
};
