'use strict';

const { PRODUCT_TABLE } = require('../models/product.model');
module.exports = {
  async up(queryInterface) {
    await queryInterface.renameColumn(
      PRODUCT_TABLE,
      'descryption',
      'description'
    );
  },

  async down(queryInterface) {
    await queryInterface.renameColumn(
      PRODUCT_TABLE,
      'descryption',
      'descriytion'
    );
  },
};
