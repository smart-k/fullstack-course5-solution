(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['MenuService', 'ApiPath'];
function MyInfoController(MenuService, ApiPath) {
  var myInfoCtrl = this;
  myInfoCtrl.basePath = ApiPath;
  myInfoCtrl.messageStatus = true;

  myInfoCtrl.user = MenuService.getUser();
  console.log(myInfoCtrl.user);

  if (myInfoCtrl.user) {
    myInfoCtrl.messageStatus = false;
  }
  }
})();
