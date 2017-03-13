"use strict";

(function(){
  angular
    .module( "grams" )
    .controller( "GramEditController", [
      "GramFactory",
      "$stateParams",
      GramEditControllerFunction
    ]);

  function GramEditControllerFunction( GramFactory, $stateParams ){
    this.gram = GramFactory.get({id: $stateParams.id});
    this.update = function(){
      this.gram.$update({id: $stateParams.id})
    }
    this.destroy = function(){
     this.gram.$delete({id: $stateParams.id});
   }
  }
}());
