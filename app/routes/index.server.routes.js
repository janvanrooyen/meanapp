module.exports = function(app) {
	var index = require('../controllers/index.server.controller');
	app.get('/', index.render);
	app.route('/navigation')
        .get(index.renderNavigation);
    app.route('/recipes')
    	.get(index.renderRecipes);
    app.route('/add-recipe')
        .get(index.renderAddRecipe);
    app.route('/find-recipe')
    	.get(index.renderFindRecipe);
    app.route('/view-recipe')
    	.get(index.renderRecipe);
    app.route('/edit-recipe')
        .get(index.renderEditRecipe);
    app.route('/gallery')
        .get(index.renderGallery);
    app.route('/googleef8cbd70513983af.html')
        .get(index.renderGoogle);
    app.route('/googletrack')
        .get(index.renderGoogletrack);
};
