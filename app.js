const express = require('express');

const parser = require('body-parser');

const app = express();

app.listen(3000);

app.use(parser.urlencoded({extended: false}));

const addUserRouter = require('./routes/addUser');
const showUsersRouter = require('./routes/showUsers');

app.use(express.static('./public'));

app.set('view engine', 'ejs');

app.use(addUserRouter.addUserRouter);
app.use(showUsersRouter.showUsersRouter);

app.use((req, res, next) => {
    res.status(404).render('404');
});