"use strict";

(function(){
  angular
  .module("grams")
  .controller("GramIndexController", [
    "GramFactory",
    GramIndexControllerFunction
  ]);

  function GramIndexControllerFunction( GramFactory ){
    this.grams = GramFactory.query();

   }
}());
