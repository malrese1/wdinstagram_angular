"use strict";

(function(){
  angular
  .module("grams")
  .controller("GramShowController", [
    "GramFactory",
    "$stateParams",
    GramShowControllerFunction
  ]);

  function GramShowControllerFunction( GramFactory, $stateParams ){
    this.gram = GramFactory.get({id: $stateParams.id});

   }
}());
