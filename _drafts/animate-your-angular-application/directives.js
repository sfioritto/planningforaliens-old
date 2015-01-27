var app = angular.module('animations', ['ngAnimate']);

app.controller("example", function($scope){
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
                    elem.addClass("hide-add-start");
                    setTimeout(function() {
                        elem.addClass("hide");
                        elem.removeClass("hide-add-start");
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

app.directive("myHideNgAnimate", function($animate){
    return {
        restrict: 'A',
        link: function(scope, elem, attrs){
            scope.$watch(attrs.myHideNgAnimate, function(value){
                if (value) {
                    $animate.addClass(elem, "hide");
                } else {
                    $animate.removeClass(elem, "hide");
                }
            });
        }
    };
});

app.directive("myHideJs", function($animate){
    return {
        restrict: 'A',
        link: function(scope, elem, attrs){
            scope.$watch(attrs.myHideJs, function(value){
                if (value) {
                    $animate.addClass(elem, "hide-js");
                } else {
                    $animate.removeClass(elem, "hide-js");
                }
            });
        }
    };
});


app.animation('.hide-js-animated', function(){
    return {
        addClass: function(element, className){
            TweenMax.to(element, 1, {
                'opacity': 0
                });
        },
        removeClass: function(element, className){
            TweenMax.to(element, 1, {
                'opacity': 1
            });
        }
    }
});
