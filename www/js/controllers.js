angular.module('app.controllers', [])

.controller('risc1Ctrl', ['$scope', '$stateParams', '$state', 'RiscService',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $state, $riscService) {
  $scope.params = {};
  $scope.checkAndContinue = function(){
      var required = ["wbc","ecog_ps","bmi","ethnicity","ct_type"];
      for(var i = 0; i < required.length; i++){
        var param = required[i];
        if(!$scope.params[param] || $scope.params[param].$invalid){
          alert("The parameter "+param+" is invalid");
          return;
        }
      }
      $riscService.setParams($scope.params);
      $state.go('risc1Results');
  }
}])

.controller('risc1ResultsCtrl', ['$scope', '$stateParams', '$state', 'RiscService', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $state, $riscService) {
  $scope.params = $riscService.params;
  $scope.survival1Year = $riscService.computeRisc1Year1()*100;
  $scope.survival2Year = $riscService.computeRisc1Year2()*100;
  $scope.survival5Year = $riscService.computeRisc1Year5()*100;
  $scope.checkAndContinue = function(){
    if(!$scope.params.response){
      alert("The parameter response is invalid");
    }
    $riscService.setParams($scope.params);
    $state.go('risc2Results');
  }
}])

.controller('risc2ResultsCtrl', ['$scope', '$stateParams', '$state', 'RiscService', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $state, $riscService) {
  $scope.params = $riscService.params;
  $scope.survival1Year = $riscService.computeRisc2Year1()*100;
  $scope.survival2Year = $riscService.computeRisc2Year2()*100;
  $scope.survival5Year = $riscService.computeRisc2Year5()*100;
}])

.controller('riscCalculatorCtrl', ['$scope', '$stateParams', '$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $state) {
  $scope.user_data = {};
  $scope.checkAndContinue = function(){
    if($scope.user_data['email_address'] && $scope.user_data['full_name'] && !$scope.user_data['full_name'].$invalid){
      $state.go("risc1");
    }else{
      alert("Insert your full name and a valid email address to continue, please.");
    }
  }
}]);
