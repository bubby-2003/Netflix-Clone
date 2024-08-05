// Define the AngularJS application
angular.module('netflixApp', [])
    .controller('SignInController', ['$scope', '$timeout', '$window', function($scope, $timeout, $window) {
        // Initialize user object
        $scope.user = {};
        
        // Initialize message
        $scope.message = '';

        // Function to handle form submission
        $scope.submitForm = function() {
            if ($scope.signInForm.$valid) {
                // Display a success message
                $scope.message = 'Login Successful';
                
                // Redirect to video.html after a short delay
                $timeout(function() {
                    $window.location.href = 'video.html';
                }, 2000); // 2-second delay
            }
        };

        // Function to handle forgot password (dummy function for now)
        $scope.forgotPassword = function() {
            $window.location.href = 'https://www.netflix.com/in/LoginHelp';
        };
    }]);
