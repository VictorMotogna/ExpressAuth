User = require('../models/user_model.js');

exports.index = function (req, res) {
    User.get(function (err, users) {
        if (err) {
            console.log("error")
            res.json({
                status: "error",
                message: err
            });
        }

        res.json({
            status: "success",
            message: "Users retrieved successfully",
            data: users
        });
    });
};

// create user
exports.new = function (req, res) {
    var user = new User();
    user.name = req.body.name ? req.body.name : user.name;
    user.email = req.body.email;
    user.password = req.body.password;

    user.save(function (err) {
        if (err) {
            res.json({
                status: "error",
                message: err
            });
        }

        res.json({
            status: "success",
            message: "New user create",
            data: user
        });
    });
};

// find by id
exports.view = function (req, res) {
    User.findById(req.params.user_id, function (err, user) {
        if (err)
            res.send(err);
        res.json({
            message: 'User details loading..',
            data: user
        });
    });
};

// update user
exports.update = function (req, res) {
    User.findById(req.params.user_id, function (err, user) {
        if (err) {
            res.send(err);
        }

        var user = new User();
        user.name = req.body.name ? req.body.name : user.name;
        user.email = req.body.email;
        user.password = req.body.password;

        user.save(function (err) {
            if (err) {
                res.send(err);
            }

            res.json({
                status: "success",
                message: "User updated",
                data: user
            });
        });
    });
};

// delete user
exports.delete = function (req, res) {
    User.remove({
        _id: req.params.user_id
    }, function (err, user) {
        if (err)
            res.send(err);

        res.json({
            status: "success",
            message: 'User deleted'
        });
    });
};