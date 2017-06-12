var appModule = angular.module("hubstaff");

appModule.controller("MainController",function($scope){
    
    $scope.tasks = [];
    
    $scope.priorities = ["low","medium","high"];
    
    $scope.status = ["start","stop","complete","in progress","approve","disapprove"];

    $scope.taskText = '';

    function Task(text,priority,status){
        this.task = text;
        this.priority = priority;
        this.status = status;
    }

    Task.prototype.updateStatus=function(status){
        this.status =status;
    }

    Task.prototype.updatePriority=function(priority){
        this.priority = priority;
    }

    $scope.addTask = function(){
        var addTask = new Task($scope.taskText,$scope.priorities[0],$scope.status[0]);
        $scope.tasks.push(addTask);
    }

    /*
    Adding dummy data to the list..
     */
    var task1 = new Task("Complete Angular Pending task",$scope.priorities[0],$scope.status[0]);
    $scope.tasks.push(task1);

    var task2 = new Task("Complete Assignment by end of the day",$scope.priorities[0],$scope.status[0]);
    $scope.tasks.push(task2);

    var task3 = new Task("Complete Pending tasks",$scope.priorities[0],$scope.status[2]);
    $scope.tasks.push(task3);

     var task4 = new Task("Designing of an application",$scope.priorities[0],$scope.status[2]);
    $scope.tasks.push(task4);

    var task5 = new Task("Add new features",$scope.priorities[0],$scope.status[3]);
    $scope.tasks.push(task5);

    var task6 = new Task("Remove last identified bugs",$scope.priorities[0],$scope.status[3]);
    $scope.tasks.push(task6);

    var task7 = new Task("Hurry up",$scope.priorities[0],$scope.status[2]);
    $scope.tasks.push(task7);

    var task8 = new Task("ABC",$scope.priorities[0],$scope.status[3]);
    $scope.tasks.push(task8);

    var task9 = new Task("XYZ",$scope.priorities[0],$scope.status[3]);
    $scope.tasks.push(task9);

    var task10 = new Task("XYZzz",$scope.priorities[0],$scope.status[4]);
    $scope.tasks.push(task10);

    var task11 = new Task("XYZzzzzz",$scope.priorities[0],$scope.status[4]);
    $scope.tasks.push(task11);


});