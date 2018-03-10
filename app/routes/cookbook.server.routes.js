module.exports = function(app) {
	var cookbook = require('../controllers/cookbook.server.controller');
    app.route('/cookbook')
        .get(cookbook.renderIndex);
    };