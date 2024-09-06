
const Member = require('../repository/member')
const Book = require('../repository/book')

exports.memberList = async () => {

    const memberList = await Member.findAll();
    let data = [];
    for(const member of memberList){
        const bookBorrowed = await Book.findAll({
            memberId : member.code,
        })

        data.push({
            ...member.dataValues,
            borrowedBookCounts: bookBorrowed.length
        })
    }
    
    return {
        data : data
    }

}
module.exports = exports;
