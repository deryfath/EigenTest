const { Member } = require('../model/member');

exports.findOne = (where, opt = {}) => {
    return Member.findOne({
      where,
      ...opt
    });
  };

  exports.findAll = (where, opt = {}) => {
    return Member.findAll({
      where,
      ...opt
    });
  };

exports.update = async (data, options, trx) => {
    return Member.update(data, {
      where,
      transaction: trx
    });
  };

module.exports = exports;
