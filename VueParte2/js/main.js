var urlAPI = 'https://api.randomuser.me/?results=50';
new Vue({
	el: 'body',
	data: {
		personas: []
	},
	created: function() {
		this.$http.get(urlAPI)	
			.then(response => {
				this.personas = response.data.results;
			})
	}
})