const DB = require('../models');

module.exports = {
    getUsers: (req, res) => {
        DB.User.findAll()
        .then(users => {
            res.status(200).json({
                status: 200,
                users
            })
        })
        .catch(err => {
            res.status(500).json({
                status: 500,
                message: err.message
            });
        })
    },
    getById: (req, res) => {
        const id = req.params.id;

        DB.User.findByPk(id)
        .then(user => {
            if(user){
                res.status(200).json(user);
            } else{
                res.status(404).json({
                    message: 'User Not Found',
                });
            }
        })
        .catch(err => {
            res.status(500).json({
                message: err.message
            });
        })
    },
    insert: (req, res) => {
        DB.User.create({
            name: req.body.name,
            email: req.body.email
        })
        .then(user => {
            res.status(201).json({
                message: 'Insert data success',
                user
            });
        })
        .catch(err => {
            res.status(500).json({
                message: err.message
            });
        })
    },
    update: (req, res) => {
        let id = req.params.id;

        DB.User.findByPk(id)
        .then(user => {
            user.update(req.body)
        })
        .then(user => {
            res.status(200).json({
                message: 'Update data success',
                user
            });
        })
        .catch(err => {
            res.status(500).json({
                message: err.message
            });
        })
    },
    remove: (req, res) => {
        const id = req.params.id;

        DB.User.findByPk(id)
        .then(user => {
            if(user){
                dataUser = user;
                return user.destroy();
            } else {
                res.status(404).json({
                    message: 'User Not Found',
                });
            }
        })
        .then(user => {
            if(user){
                res.status(200).json({
                    message: 'Delete data success',
                    user: dataUser
                });
            }
        })
        .catch(err => {
            res.status(500).json({
                message: err.message
            });
        })
    }
}