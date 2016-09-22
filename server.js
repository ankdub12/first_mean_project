var express  = require( 'express' ),
    path     = require( 'path' ),
    root     = __dirname,
    port     = process.env.PORT || 8000,
    bp       = require('body-parser'),
    app      = express();
   mongoose = require('mongoose');

app.use(bp.urlencoded({ extended: true }));
app.use(bp.json())


app.use( express.static( path.join( root, 'client' )));
app.use( express.static( path.join( root, 'bower_components' )));
// app.use(express.static(path.join(root, './client/assets')));
// app.set('partials', path.join(root, './client/partials'));

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);
// var routes_setter = require('./server/config/routes.js');
// routes_setter(app);

app.listen( port, function() {
  console.log( 'server running on port ${ port }' );
});