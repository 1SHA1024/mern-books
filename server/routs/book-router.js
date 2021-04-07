const bookRouter = require('express').Router()
const BookCtrl = require('../controllers/book-ctrl')

bookRouter.post('./', BookCtrl.createBook)
bookRouter.get('/', BookCtrl.showBooks)

module.exports = bookRouter;

