module.exports = function(app) {
	var familytree = require('../controllers/familytree.server.controller');
    app.route('/familytree')
        .get(familytree.renderFamilytree);
    app.route('/familytree/cilliers')
    	.get(familytree.renderCilliers);
};