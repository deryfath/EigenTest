const { memberList } = require('../service/membersList');

exports.index = async (req, res) => {

    try {
        const result = await memberList()
        res.json(result);
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
  };
  
  module.exports = exports;