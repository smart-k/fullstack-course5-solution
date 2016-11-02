(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuyList = this;
  toBuyList.items = ShoppingListCheckOffService.getToBuyItems();
  toBuyList.removeItem = function (itemIndex) {
    ShoppingListCheckOffService.addBoughtItem(toBuyList.items[itemIndex].name, toBuyList.items[itemIndex].quantity);
    ShoppingListCheckOffService.removeItem(itemIndex);
  };
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var alreadyBoughtList = this;
  alreadyBoughtList.items = ShoppingListCheckOffService.getBoughtItems();
};

function ShoppingListCheckOffService() {
  var service = this;

  // List of items to buy
  var toBuyItems = [
    {name: "cookies", quantity: 10},
    {name: "drinks", quantity: 5},
    {name: "batons", quantity: 5},
    {name: "cheeses", quantity:5},
    {name: "yoghurts", quantity: 10}
  ];

  // List of bought items
  var boughtItems = [];

  service.addBoughtItem = function (itemName, quantity) {
      var item = {
        name: itemName,
        quantity: quantity
      };
      boughtItems.push(item);
    };

    service.removeItem = function (itemIdex) {
      toBuyItems.splice(itemIdex, 1);
    };

    service.getToBuyItems = function () {
      return toBuyItems;
    };

    service.getBoughtItems = function () {
      return boughtItems;
    }
  }
})();
