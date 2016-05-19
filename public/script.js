"use strict";

(function(){
  angular
  .module("giftMe", [
    "ui.router",
    "ngResource"
  ])
  .config(Router)
  .factory("User", UserFactory)
  .controller("Index", IndexCtrl);

  Router.$inject = ["$stateProvider"];
  function Router($stateProvider){
    $stateProvider
    .state("index", {
      url:  "/",
      templateUrl: "/assets/html/users-index.html",
      controller: "Index",
      controllerAs: "IndexVM"
    })
    .state("show", {
      url:  "/:_id",
      templateUrl: "/assets/html/users-show.html"
  });
}
UserFactory.$inject =["$resource"];
function UserFactory($resource){
  var User = $resource("/api/users/:_id");
  return User;
}

IndexCtrl.$inject= ["User"];
function IndexCtrl(User){
  var vm =this;
  vm.users =User.query();
  vm.create   =function(){
    User.save(vm.newUser, function(response){
      vm.users.push(response);
    });
  }
}

})();
