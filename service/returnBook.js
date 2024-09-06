
const Book = require('../repository/book')
const Member = require('../repository/member')
const Models = require('../config/database')
const Moment = require('moment');
const cron = require('node-cron');

const MomentUtc = (date) => {
    return Moment.utc(date);
  };

const getThreeDaysAgo = () => {
    const date = MomentUtc(new Date()).add(7, 'hours').subtract(3, 'days').startOf('day')
    return date;
};

exports.returnBook = async (body) => {

    const trx = await Models.transaction();

    const books = body.books;
    let isPenalized = false;

    if(books && books.length > 0){
        //check member borrowed
        for(const book of books){
            const memberBorrowed = await Book.findOne({
                code : book.code,
                memberId : body.memberId
            });

            //check penalized
            const currentDate = MomentUtc(new Date()).add(7, 'hours').startOf('day');
            const borrowedAt = MomentUtc(book.borrowedAt).add(7, 'hours');
            const dateDiff = currentDate.diff(borrowedAt, 'days');

            if(dateDiff > 7 && !isPenalized){
                isPenalized = true;
                //update member penalized
                await Member.update({
                    isPenalized: 1
                },{
                    code: body.memberId
                }, trx);
            }

            if(memberBorrowed){
                await Book.update({
                    memberId : null,
                    borrowedAt : null,
                    returnedAt: new Date()
                },{
                    code: book.code
                }, trx);

            }else{
                return {
                    message: `you aren't borrowed ${book.title}`
                }
            }
            
        }

        await trx.commit()
        if(isPenalized) runCron;
        return {
            message: isPenalized ? "success returned books, but got penalized 3 days due to late returned" : "success returned books"
        }
    }
    
    return {
        message: "error payload"
    }

}

const runCron = () =>{
  cron.schedule('0 0 * * *', () => {
    console.log('Running cron job to update scheduler...');
    updateSchedulerForThreeDaysOldRecords();
  }, {
    scheduled: true,
    timezone: "Asia/Jakarta" 
  });
}

const updateSchedulerForThreeDaysOldRecords = async() => {
    try {
      const threeDaysAgo = getThreeDaysAgo();
  
      const result = await Member.update(
        { isPenalized: 0 }, 
        {
          where: {
            createdAt: threeDaysAgo 
          }
        }
      );
  
      if (result[0] === 0) {
        console.log('No records to update.');
      } else {
        console.log(`Updated ${result[0]} record(s).`);
      }
    } catch (error) {
      console.error('Error updating scheduler:', error);
    }
  }
  
  

module.exports = exports;
