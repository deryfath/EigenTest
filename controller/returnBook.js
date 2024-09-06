const { returnBook } = require('../service/returnBook');

exports.index = async (req, res) => {
    const { body } = req; 

    try {
        const result = await returnBook(body)
        res.json(result);
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
  };
  
  module.exports = exports;