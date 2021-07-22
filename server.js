
const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express(); 

require('./routes/apiroute');
require('./routes/htmlroute');
app.use(api);
app.use(html);

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

app.listen(PORT, function() {
    console.log(`Application's server is listening on PORT: ${PORT}`);
  });