'use strict';
module.exports = function(app) {
  let productsCtrl = require('./controllers/controller');

  // todoList Routes
  app.route('/regist')
    .get(productsCtrl.get)
    .post(productsCtrl.store);

  app.route('/regist/:productId')
    .get(productsCtrl.detail)
    .put(productsCtrl.update)
    .delete(productsCtrl.delete);
};