"use strict";

(function(){
  angular
    .module( "grams" )
    .controller( "GramNewController", [
      "GramFactory",
      GramNewControllerFunction
    ]);

    function GramNewControllerFunction( GramFactory ){
      this.gram = new GramFactory();
      this.create = function(){
        this.gram.$save()
      }
    }
}());
