const { booksList } = require('../service/bookList');

exports.index = async (req, res) => {

    try {
        const result = await booksList()
        res.json(result);
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
  };
  
  module.exports = exports;