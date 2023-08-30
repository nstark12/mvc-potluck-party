// Dependencies
require('dotenv').config()
require('./models')

const sequelize = require('./config/connection')

const express = require('express');
const { engine } = require('express-handlebars')
const path = require('path');

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3001;

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', './views')

app.use(express.static(path.join(__dirname, 'public')));
// Sets up the routes
app.use(require('./controllers/dish-routes'));

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log('Server listening on: http://localhost:' + PORT);
  });
})



