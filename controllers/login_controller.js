User = require('../models/user_model.js');

exports.login = function (req, res) {
    User.findOne(req.params.name, req.params.password, function (err, user) {
        if(err)
            res.send(err);
        if (req.body.password == user.password) {
            res.json({
                message: `Correct auth for ${user.name}`,
                user: user
            });
        } else {
            res.json({
                message: `Could not login ${req.body.name}`
            })
        }
    });
};