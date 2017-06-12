var appModule = angular.module("hubstaff");
// card-box
appModule.directive("cardBox",function(){
    var cardBoxDirective = {
        restrict:'E',
        template:'<div class="row">'+
                            '<div class="col-md-10 cardGeneric cardGenericExtra card">'+
                                '<div class="row">'+
                                    '<div class="col-md-2">'+
                                        '<div class="imgParentDiv">'+
                                            '<img src="img/user_pic.png" alt="user">'+
                                        '</div>'+
                                    '</div>'+
                                    '<div class="col-md-6">'+
                                        '{{task.task}}'+
                                    '</div>'+
                                    '<div class="col-md-4">'+
                                       '<div style="cursor:pointer;">'+
                                        '<span ng-click="task.updateStatus(status[3])" ng-show="task.status===status[0]"><span class="glyphicon glyphicon-play" style="color:green;"></span></span>'+
                                        '<span ng-click="task.updateStatus(status[4])" ng-show="task.status===status[2]"><span class="glyphicon glyphicon-thumbs-up"  style="color:green;"></span></span>'+
                                        '<span ng-click="task.updateStatus(status[0])" ng-show="task.status===status[3]"><span class="glyphicon glyphicon-pause"  style="color:blue;"></span></span>'+
                                        '<span ng-click="task.updateStatus(status[2])" ng-show="task.status===status[4]"><span class="glyphicon glyphicon-ok"  style="color:orange;"></span></span>'+    
                                    '</div>'+
                                '</div>'+
                            '</div>'+
                        '</div>'
    };
    return cardBoxDirective;
});

