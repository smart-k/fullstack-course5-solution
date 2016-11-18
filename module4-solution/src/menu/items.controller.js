(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsController', ItemsController);

ItemsController.$inject = ['items'];
function ItemsController(items) {
  var list = this;
  list.items = items.data.menu_items;
  list.name = items.data.category.name;
}
})();
