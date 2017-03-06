function findById(items,id){
	for(var i in items){
		if (items[i].id == id) {
			return items[i];
		}
	}
	return null;
}
var URL = "http://localhost:8000/api"
Vue.filter('Category',function(id){
				var category = findById(this.categories,id);
				 if (category != null) {
					return category.name;
				}else{
					return '';
				}

});

Vue.component('select-category',{
		template: '#select_category_template',
		props: ['categories','id']
	});
Vue.component('note-row', {
    template: "#note_row_tpl",
    props: ['note', 'categories'],
    data: function() { 
        return {
            editing: false
        };
    },
    methods: {
        remove: function () {
        	this.$http.get(URL+"/nota/"+this.note.id)	
			.then(response => {
				console.info(response.data)
				this.notes = response.data;
			})
            this.$parent.notes.$remove(this.note);
        },
        edit: function () {
        	this.$http.put(URL+"/nota/"+this.note.id, this.new_note).then(response => {

			    // get status
			    response.status;

			    // get status text
			    response.statusText;

			    // get 'Expires' header
			    response.headers.get('Expires');

			    // get body data
			    this.someData = response.body;

			  }, response => {
			    // error callback
			  });
            this.editing = true;
        },
        update: function () {
            this.editing = false;
        }
    }
});


var vm = new Vue({
	el: 'body',
	data: {
		new_note: {
			note: '',
			category_id: ''
		},
		notes: [],
		categories: [
			{
				id:1,
				name: 'Laravel'
			},
			{
				id:2,
				name:'Vue.js'
			}
		]
	},
	methods:{
		createNote: function(){
			this.$http.post(URL+"/nota", this.new_note).then(response => {

			    // get status
			    response.status;

			    // get status text
			    response.statusText;

			    // get 'Expires' header
			    response.headers.get('Expires');

			    // get body data
			    this.someData = response.body;

			  }, response => {
			    // error callback
			  });
				this.notes.push(this.new_note);
				this.new_note = {note:'',category_id:''};
			
		}
	},
	filters:{
		
			
		
	},
	created: function(){
		this.$http.get(URL+"/notas")	
			.then(response => {
				console.info(response.data)
				this.notes = response.data;
			})
	}
})