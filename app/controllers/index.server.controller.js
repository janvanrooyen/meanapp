exports.render = function(req, res) {
    res.render('index', {
        title: 'janvanrooyen.com'
    })
};

exports.renderNavigation = function(req, res, next) {
    res.render('navigation')
};

exports.renderRecipes = function(req, res, next) {
    res.render('recipe/recipes')
};

exports.renderAddRecipe = function(req, res, next) {
    res.render('recipe/add-recipe')
};

exports.renderFindRecipe = function(req, res, next) {
    res.render('recipe/find-recipe')
};

exports.renderRecipe = function(req, res, next) {
    res.render('recipe/view-recipe')
};

exports.renderEditRecipe = function(req, res, next) {
	res.render('recipe/edit-recipe')
};

exports.renderGallery = function(req, res, next) {
    res.render('gallery')
};

exports.renderGoogle = function(req, res, next) {
    res.render('google')
};

exports.renderGoogletrack = function(req, res, next) {
    res.render('googletrack')
};