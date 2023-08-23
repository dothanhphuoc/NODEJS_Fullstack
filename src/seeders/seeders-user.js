'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {  // up: khi chạy bình thương thêm dữ liệu vào
    return queryInterface.bulkInsert('Users', [{
      email: 'dothanhphuoc0706@gmail.com',
      password: '123456',
      firstName: 'Do Thanh',
      lastName: 'Phuoc',
      address: 'Thua Thien Hue',
      gender: 1,
      roleId: "",
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down(queryInterface, Sequelize) { // down: khi muốn cancer quá trình thêm dữ liệu
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
