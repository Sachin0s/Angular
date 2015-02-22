angularFormsApp.controller('efController',
    function efController($scope, $window, $routeParams, $modalInstance ,DataService) {

        if ($routeParams.id)
            $scope.employee = DataService.get_employee($routeParams.id);
        else
            $scope.employee = { id: 0 };

        //$scope.employee = DataService.employee;

        $scope.editableEmployee = $scope.employee;

        $scope.departments = [
            "Engineering",
                    "Management",
                    "Finance",
                    "IT"
        ];
        
        $scope.submitForm = function () {
            if ($scope.editableEmployee.id = 0) {
                DataService.insertEmployee($scope.editableEmployee);
            }
            else {
                DataService.updateEmployee($scope.editableEmployee);
            }


            $scope.employee = angular.copy($scope.editableEmployee);
            //$window.history.back();
            $modalInstance.close();

        };

        $scope.cancelForm = function () {
            //$window.history.back();
            alert($modalInstance);
            $modalInstance.dismiss();

        };
       
    });