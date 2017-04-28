riseTemperature.controller("pushButton", 
function($scope) {
    $scope.whatTemperature = 10;
    
    $scope.push = function() {
        $scope.whatTemperature += 10;
    }
})
