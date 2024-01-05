const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = 3000;
app.use(morgan('dev'));

app.use ((req, res, next) => {
    console.log(`Received a ${req.method} request to ${req.url}`);
    next();
});

// Set up Pug as the view engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Routes
app.get('/', (req, res) => {
    console.log(req.url);
    
    res.send('<h1>Home</h1>');

});

app.get('/about', (req, res) => {
    res.send('<h1>About</h1>');
});

app.post('/submit', (req, res) => {
    console.log(req.body.message);
    res.send('<h1>Sucess</h1>');
});

app.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    res.send('user', { userId });
});

app.listen(PORT, () => {
    console.log(`Server is running!`);
});