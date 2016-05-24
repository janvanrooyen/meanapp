var Recipe = require('mongoose').model('Recipe');

var getErrorMessage = function(err) {
    if (err.errors) {
        for (var errName in err.errors) {
            if (err.errors[errName].message) return err.errors[errName].message;
        }
    } else {
        return 'Unknown server error';
    }
};

exports.create = function(req, res, next) {
    var recipe = new Recipe(req.body);
    recipe.save(function(err) {
        if (err) {
            return res.status(400).send({
            	message: getErrorMessage(err)
            });
        }
        else {
            res.json(recipe);
            console.log(recipe); //writes the post to the node command prompt debug only
             }
    });
};

exports.list = function(req, res, next) {
	Recipe.find({}, function(err, recipe) {
		if (err) {
			return next(err);
		}
		else {
			res.json(recipe);
		}
	})
};

exports.read = function(req, res) {
    res.json(req.recipe);
};

exports.recipeByID = function(req, res, next, id) {
    Recipe.findOne({
            _id: id
        },
        function(err, recipe) {
            if (err) {
                return next(err);
            }
            else {
                req.recipe = recipe;
                next();
            }
        }
    );
};

exports.delete = function(req, res, next) {
    req.recipe.remove(function(err) {
        if (err) {
            return next(err);
        }
        else {
            res.json(req.recipe);
        }
    })
};

exports.update = function(req, res, next) {
    Recipe.findByIdAndUpdate(req.recipe.id, req.body, function(err, recipe) {
        if (err) {
            return next(err);
        }
        else {
            res.json(recipe);
        }
    });
};