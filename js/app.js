"use strict";

(function(){
  angular
  .module("wdinstagram", [
    "ui.router",
    "grams"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ]);

  function RouterFunction($stateProvider){
    $stateProvider
    .state("gramIndex", {
      url: "/grams",
      templateUrl: "js/grams/index.html",
      controller: "GramIndexController",
      controllerAs: "GramIndexViewModel"
    })
    .state("gramNew", {
      url: "/grams/new",
      templateUrl: "js/grams/new.html",
      controller: "GramNewController",
      controllerAs: "GramNewViewModel"
    })
    .state("gramEdit", {
    url: "/grams/:id/edit",
    templateUrl: "js/grams/edit.html",
    controller: "GramEditController",
    controllerAs: "GramEditViewModel"
  })
    .state("gramShow", {
      url: "/grams/:id",
      templateUrl: "js/grams/show.html",
      controller: "GramShowController",
      controllerAs: "GramShowViewModel"
    });
  }
}());
