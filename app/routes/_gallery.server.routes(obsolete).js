module.exports = function(app) {
	var gallery = require('../controllers/gallery.server.controller');
    app.route('/gallery/childsplay')
        .get(gallery.renderChildsplay);
    app.route('/gallery/flowers')
        .get(gallery.renderFlowers);
    app.route('/gallery/lines')
        .get(gallery.renderFlowers);
    app.route('/gallery/nature')
        .get(gallery.renderFlowers);        
    app.route('/gallery/randoms')
        .get(gallery.renderFlowers);
    app.route('/gallery/zoo')
        .get(gallery.renderFlowers);
};
