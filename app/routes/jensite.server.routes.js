module.exports = function(app) {
    var jensite = require('../controllers/jensite.server.controller');
    app.route('/jensite')
        .get(jensite.renderIndex);
    app.route('/jensite/jennavigation')
        .get(jensite.renderJenNavigation);
    app.route('/jensite/rubric')
        .get(jensite.renderRubric);
    app.route('/jensite/robotics')
        .get(jensite.renderRobotics);
    app.route('/jensite/singleboard')
        .get(jensite.renderSingleBoard);
    app.route('/jensite/highaltitude')
        .get(jensite.renderHighAltitude);
    };
