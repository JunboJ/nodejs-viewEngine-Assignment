const exp = require('express');

const router = exp.Router();

const addedUser = require('./addUser');

router.get('/users', (req, res, next) => {
    const users = addedUser.userList;
    res.render('users', {
        userList: users,
        pageTitle: 'All Users',
        path: '/users'
    });
});

module.exports = {
    showUsersRouter: router
}