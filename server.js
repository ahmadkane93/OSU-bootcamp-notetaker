require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);



const express = require('express');
const PORT = process.env.PORT || 3000;
const path = require('path');
const app = express(); 

// Routing
const apiRoute = require('./routes/apiroute');
const htmlRoute = require('./routes/htmlroute');
app.use(apiRoute);
app.use(htmlRoute);


app.get('*', (req, res) => res.sendFile(path.join(__dirname, './public/index.html')));

// Parse Data
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));



// Activate server
app.listen(PORT, function() {
console.log(`Application's server is listening on PORT: ${PORT}`);
});

