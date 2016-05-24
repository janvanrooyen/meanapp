var recipe = require('../../app/controllers/recipe.server.controller');

module.exports = function(app) {
    app.route('/recipedb')
    	.post(recipe.create)
    	.get(recipe.list);

    app.route('/recipedb/:recipeId')
    	.get(recipe.read)
    	.delete(recipe.delete)
    	.put(recipe.update);

    app.param('recipeId', recipe.recipeByID);
};