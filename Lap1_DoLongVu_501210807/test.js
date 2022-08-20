/// <reference path="angular.min.js"/>
//create the module
var myApp = angular.module('myApp', []);
myApp.controller('myController', function ($scope) {
    var employee = {
        firstName: 'mark',
        LastName: 'John',
        gender: 'male'
    }
    $scope.employee= employee;
});
