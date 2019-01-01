app.controller('myCtrl',function($scope) {
  $scope.gpa=3.55;
  $scope.name="John";
  $scope.pLangList=[{name:'Java', prof:'high'}, {name:'Python', prof:'High'}, {name:'Ruby', prof:'High'}];
  $scope.myName="Click Me!"
  $scope.changeName= function() {
    $scope.myName="Yesu Carter"
  };
  $scope.functionOut= function() {
    return $scope.name + " was born in " + $scope.year + " (I came from a function!)";
  };

});
