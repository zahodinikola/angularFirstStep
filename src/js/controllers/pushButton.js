riseTemperature.controller("pushButton", ['$scope',
function($scope) {
    $scope.whatTemperature = 10;
    
    $scope.push = function() {
        $scope.whatTemperature += 10;
    }
}])


// app.controller("ctrlStudents", ['$scope',
//     function($scope) {
//         $scope.students_counter = 144;

//         $scope.sessiyaPrishla = function() {
//             if ($scope.students_counter > 20) {
//                 $scope.students_counter -= 10;
//             }
//         }
//     }
// ])