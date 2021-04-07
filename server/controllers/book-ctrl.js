const BookModel = require('../models/book-model');
const router = require ('express').Router();


function createBook(){
    router.post('/book', (req,res) => {
        const body = req.body;
        if (!body) {
            return res.status(400)
            .json({success:false,message:'no body found'})
        }
        const book = new BookModel(body);
        if (!book) {
            return res.status(400)
            .json({success:false,message:'no book found'})
        }
        book.save()
        .then(()=>{
            return res.status(200)
            .json({success:false,message:'book save'})
        })
        .catch(error => {
            return res.status(401)
            .json({success:false,message:'book was not saved',error:error})
        })
    })
}

module.export = bookRouter;

/**
 * 
 */