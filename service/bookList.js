
const Book = require('../repository/book')

exports.booksList = async () => {

    const bookList = await Book.findAll();
    const bookListMap = bookList.map(obj => {
        return {
            ...obj.dataValues, 
            isBorrowed: obj.memberId ? true : false
          };
    });

    console.log('')
    
    return {
        data : bookListMap
    }

}
module.exports = exports;
