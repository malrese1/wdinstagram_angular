"use strict";

(function(){
  angular
    .module( "grams" )
    .factory( "GramFactory", [
      "$resource",
      GramFactoryFunction
    ]);

  function GramFactoryFunction($resource){
    return $resource( "http://localhost:3000/entries/:id", {}, {
        update: { method: "PUT" }
      });
    }
}());
