
const Book = require('../repository/book')
const Member = require('../repository/member')
const Models = require('../config/database')

exports.borrowBook = async (body) => {

    const trx = await Models.transaction();

    const books = body.books;

    if(books && books.length > 0){
        if(books.length > 2){
            return {
                message : 'max limit to borrow is 2 books'
            }
        }

        //find member penalized or not
        const isPenalized = await Member.findOne({
            code: body.memberId,
            isPenalize : 1
        });

        //check availability book
        for(const book of books){
            const bookAvailability = await Book.findOne({
                code : book.code,
                memberId : null,
                borrowedAt : null
            });

            if(!bookAvailability){
                await trx.rollback()
                return {
                    message : `book ${book.title} not found`
                }
            }else{
                if(!isPenalized){
                    await Book.update({
                        memberId : body.memberId,
                        borrowedAt : new Date(),
                        returnedAt : null
                    },{
                        code: book.code
                    }, trx);
                }
            }
        }

        await trx.commit()
        return {
            message: "success borrowed books"
        }
    }
    
    return {
        message: "error payload"
    }


}
module.exports = exports;
