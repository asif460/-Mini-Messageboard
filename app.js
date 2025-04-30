const express = require('express');
const app = express();
const indexRouter = require('./routes/index');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.urlencoded({ extended: true })); // to parse form data
app.use(express.static(__dirname + '/public')); // optional for styling
app.use('/', indexRouter);
app.use(express.static(__dirname + '/public'));

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
