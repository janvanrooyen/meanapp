var mongoose = require('mongoose')
	Schema = mongoose.Schema;

var RecipeSchema = new Schema({

	created: {
		type: Date, 
		default: Date.now
	},
	title: {
		type: String, 
		default: '', 
		trim: true,
		required: "Title Can Not Be Blank"
	},
	ingredients: {
		type: [],
		default: '',
	},
	steps: {
		type: [],
		default: '',
	},
	keywords: {
		type: [],
		default: '',
	},
	notes: {
		type: String,
		default: '',
		trim: true
		}
});
mongoose.model('Recipe', RecipeSchema);