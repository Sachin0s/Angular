angularFormsApp.factory('DataService',
    function () {
        var get_employee = function (id) {
            if (id == 123) {
                return {
                    id: 123,
                    fullname: 'Sachin Bhatnagar',
                    notes: 'An Ideal employee',
                    department: 'IT',
                    perkCar: true,
                    perkStock: false,
                    payrollType: 'payW2'
                };
            }
            return undefined;
        };
        var insertEmployee = function (newEmployee) {
            return true

        };

        var updateEmployee = function (employee) {

        };

        return {
            insertEmployee: insertEmployee,
            updateEmployee: updateEmployee,
            get_employee: get_employee
        };

    });

