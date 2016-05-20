"use strict";

(function(){
  angular
  .module("giftMe", [
    "ui.router",
    "ngResource"
  ])
  .config(Router)
  .factory("User", UserFactory)
  .controller("Index", IndexCtrl)
  .controller("Show", ShowCtrl);

  Router.$inject = ["$stateProvider", "$locationProvider"];
  function Router($stateProvider, $locationProvider){
    $locationProvider.html5Mode(true);
    $stateProvider
    .state("index", {
      url:  "/",
      templateUrl: "/assets/html/users-index.html",
      controller: "Index",
      controllerAs: "IndexVM"
    })
    .state("show", {
      url:  "/:_id",
      templateUrl: "/assets/html/users-show.html",
      controller: "Show",
      controllerAs: "ShowVM"
  });
}
UserFactory.$inject =["$resource"];
function UserFactory($resource){
  var User = $resource("/api/users/:_id");
  return User;
}

IndexCtrl.$inject= ["User"];
function IndexCtrl(User){
  var vm = this;
  vm.users = User.query();
  vm.create = function(){
    User.save(vm.newUser, function(response){
      console.log(response)
      vm.users.push(response);
    });
  }
}

ShowCtrl.$inject = ["User", "$stateParams", "$state"];
function ShowCtrl(User, $stateParams, $state){
  var vm = this;
  vm.user = User.get($stateParams);
  vm.update = function(){
    User.update($stateParams, vm.user, function(response){
      $state.reload();
    });
  }

  }

})();
