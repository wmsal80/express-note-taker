const express = require('express');
// initialize express;
const app = express();
const PORT = process.env.PORT || 3000;

// set up data parser 
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));

// routes setup 
require('./routes/routes')(app);

// set up listener
app.listen(PORT, () => {
    console.log('Server is running on PORT: ' + PORT);
});