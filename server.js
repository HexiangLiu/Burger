const express = require('express');

const PORT = process.env.PORT || 8080;

const app = express();

// Serve static files
app.use(express.static('public'));

// Parse middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set handlebars
const exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Import routes
const router = require('./controllers/burgers_controller');

app.use(router);

//Start server
app.listen(PORT, () => {
  console.log('Server listening on: http://localhost:' + PORT);
});
