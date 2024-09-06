const { Book } = require('../model/book');

exports.findOne = (where, opt = {}) => {
    return Book.findOne({
      where,
      ...opt
    });
  };

exports.findAll = (where, opt = {}) => {
    return Book.findAll({
      where,
      ...opt
    });
  };

exports.update = async (data, where, trx) => {
    return Book.update(data, {
        where,
        transaction: trx
      });
  };

module.exports = exports;
