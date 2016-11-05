(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
.component('foundItems', {
      templateUrl: 'foundItems.html',
      bindings: {
          items: '<',
          onRemove: '&',
          search: '<'
          }
    });

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var list = this;
  list.searchTerm="";

  list.search = function (searchTerm) {
  MenuSearchService.getMatchedMenuItems(searchTerm)
  .then(function (response) {
      list.found = response;
  })
  .catch(function (error) {
     console.log("Еrror in click function");
  });
};

  list.removeItem = function (index) {
    list.found.splice(index, 1);
    console.log("Item removed");
  };
}

MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
  var service = this;

  service.getMatchedMenuItems = function (searchTerm) {

    return $http.get(ApiBasePath + "/menu_items.json")
    .then(function (response) {
  var foundItems = [];
  if (searchTerm.length !== 0) {
    foundItems = response.data.menu_items.filter(function(item){
       return (item.description.indexOf(searchTerm.toLowerCase()) >= 0 );
    });

}
    return foundItems;
  })
  .catch(function (error) {
  console.log("Error in service method");
});
    };
  }
})();
