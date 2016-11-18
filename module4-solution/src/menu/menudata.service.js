(function () {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService)
.constant('Categories_REST_API_Endpoint', "https://davids-restaurant.herokuapp.com/categories.json")
.constant('ItemsForCategory_REST_API_Endpoint', "https://davids-restaurant.herokuapp.com/menu_items.json?category=");

MenuDataService.$inject = ['$http', 'Categories_REST_API_Endpoint', 'ItemsForCategory_REST_API_Endpoint'];

function MenuDataService($http, Categories_REST_API_Endpoint, ItemsForCategory_REST_API_Endpoint) {
  var service = this;

  service.getAllCategories = function () {
  return $http.get(Categories_REST_API_Endpoint)
              .then(function (response) {
              return response;
              })
              .catch(function (error) {
                    console.log("Error in service method to list category");
              });
  };


  service.getItemsForCategory = function (categoryShortName) {
  return $http({
            method: "GET",
            url: ItemsForCategory_REST_API_Endpoint,
            params: {
              category: categoryShortName
            }
          })
          .then(function (response) {
                return response;
          })
          .catch(function (error) {
                console.log("Error in service method to list category items");
          });

  };
}
})();
