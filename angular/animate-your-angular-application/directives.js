var app = angular.module('animations', []);

app.controller("example1", function($scope){
    $scope.awesome = false;
});

app.directive("myHide", function(){
    return {
        restrict: 'A',
        link: function(scope, elem, attrs){
            scope.$watch(attrs.myHide, function(value){
                if (value) {
                    elem.addClass("hide");
                } else {
                    elem.removeClass("hide");
                }
            });
        }
    };
});

app.directive("myHideAnimated", function(){
    return {
        restrict: 'A',
        link: function(scope, elem, attrs){
            scope.$watch(attrs.myHideAnimated, function(value){
                if (value) {
                    elem.addClass("hide-add");
                    setTimeout(function() {
                        elem.addClass("hide");
                        elem.removeClass("hide-add");
                    }, 1000);
                } else {
                    elem.addClass("hide-remove");
                    elem.removeClass("hide");
                    //cause a reflow
                    elem[0].offsetHeight;
                    elem.addClass("hide-remove-active");
                    setTimeout(function(){
                        elem.removeClass("hide-remove");
                        elem.removeClass("hide-remove-active");
                    }, 1000);
                }
            });
        }
    };
});
