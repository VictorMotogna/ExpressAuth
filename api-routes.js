let router = require('express').Router();

router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to ExpressAuth crafted with love!',
    });
});

var userController = require('./controllers/user_controller');
var loginController = require('./controllers/login_controller');

router.route('/users')
    .get(userController.index)

router.route('/users/create')
    .post(userController.new);

router.route('/users/:user_id')
    .get(userController.view)
    .patch(userController.update)
    .put(userController.update)
    .delete(userController.delete);

router.route('/login')
    .post(loginController.login)

module.exports = router;