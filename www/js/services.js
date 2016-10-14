angular.module('app.services', [])

.service('RiscService', [function(){
  var out = {'params': []};
  out['setParams'] = function (params){
    out['params'] = params;
  };
  out['computeRisc1Year1'] = function(){
    return Math.random();
  };
  out['computeRisc1Year2'] = function(){
    return Math.random();
  };
  out['computeRisc1Year5'] = function(){
    return Math.random();
  };

  out['computeRisc2Year1'] = function(){
    return Math.random();
  };
  out['computeRisc2Year2'] = function(){
    return Math.random();
  };
  out['computeRisc2Year5'] = function(){
    return Math.random();
  };

  return out;
}]);
