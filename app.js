function findById(items,id){
	for(var i in items){
		if (items[i].id == id) {
			return items[i];
		}
	}
	return null;
}
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
            this.$parent.notes.$remove(this.note);
        },
        edit: function () {
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
		notes: [
			{
				note: 'Laravel 5.1 es LTS',
				category_id:'1'
			},
			{
				note: 'v-for es la directiva que utilizamos para iterar una lista',
				category_id:'2'
			},
			{
				note: '@click se utiliza como alias v-on:click',
				category_id:'2'
			}
		],
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
			this.notes.push(this.new_note);
			this.new_note = {note:'',category_id:''};
		}
	},
	filters:{
		
			
		
	}
})