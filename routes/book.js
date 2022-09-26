const express = require('express');
const bookRouter = express.Router();
const BookController = require('./../controllers/BookController');
const auth = require('./../middleware/auth');
bookRouter.use(auth).route('/book').get(BookController.index).post(BookController.store);



bookRouter.route('/book/:id').get(BookController.show).patch(BookController.update)
    .delete(BookController.delete);
module.exports = bookRouter;