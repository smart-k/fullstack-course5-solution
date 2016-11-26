(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MenuService'];
function SignUpController(MenuService) {
  var signUpCtrl = this;

  signUpCtrl.checkMenuItem = function () {
    MenuService.getItem(signUpCtrl.user.favoriteDish.toUpperCase())
              .then(
                function(){
                    signUpCtrl.errorStatus = false;
                  },
                function(){
                  signUpCtrl.errorStatus = true;
                });
              };

  signUpCtrl.submit = function () {
      MenuService.getItem(signUpCtrl.user.favoriteDish.toUpperCase())
                .then(
                  function(response){
                      signUpCtrl.user.menuItem = response.data;
                      MenuService.setUser(signUpCtrl.user);
                      signUpCtrl.errorStatus = false;
                      signUpCtrl.messageStatus = true;
                    },
                  function(){
                    signUpCtrl.errorStatus = true;
                    signUpCtrl.messageStatus = false;
                  });
                };
    }

})();
