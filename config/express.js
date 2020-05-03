var config = require('./config'),
	express = require('express');
	bodyParser = require('body-parser');

module.exports = function() {
    var app = express();
//    app.use(bodyParser.urlencoded({
//    	extended: false
//    }));
    app.use(bodyParser.json());
    app.set('views', './app/views');
	app.set('view engine', 'ejs');
    require('../app/routes/index.server.routes.js')(app);
    require('../app/routes/recipe.server.routes.js')(app);
    //require('../app/routes/gallery.server.routes.js')(app);
    require('../app/routes/cookbook.server.routes.js')(app);
    require('../app/routes/familytree.server.routes.js')(app);
    require('../app/routes/jensite.server.routes.js')(app);
    app.use(express.static('./public'));
    app.use('/familytree', express.static('public'));
    app.use('/ps', express.static('./node_modules/photoswipe/dist/'));
    return app;
};
