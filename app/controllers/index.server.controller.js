exports.render = function(req, res) {
    res.render('index', {
        title: 'janvanrooyen.com'
    })
};

exports.renderNavigation = function(req, res, next) {
    res.render('navigation')
};

exports.renderRecipes = function(req, res, next) {
    res.render('recipes')
};

exports.renderAddRecipe = function(req, res, next) {
    res.render('add-recipe')
};

exports.renderFindRecipe = function(req, res, next) {
    res.render('find-recipe')
};

exports.renderRecipe = function(req, res, next) {
    res.render('view-recipe')
};

exports.renderEditRecipe = function(req, res, next) {
	res.render('edit-recipe')
};

exports.renderRecipeList = function(req, res, next) {
	res.render('recipe-list-test')
};
