const exp = require('express');

const router = exp.Router();

const users = [];

router.get('/reg', (req, res, next) => {
    res.render('reg', {
        path: '/reg',
        pageTitle: 'Register'
    });
});

router.post('/reg', (req, res, next) => {
    users.push({userName: req.body.userName});
    res.redirect('/reg');
});

module.exports = {
    addUserRouter: router,
    userList: users
}