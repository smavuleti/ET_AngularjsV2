var app = angular.module('dateApp',[]);
alert("sruthi")
app.directive("datepicker", function(){
   alert("in date app directive");
    return {
        restrict: "A",
        require:"ngModel",
        link: function(scope, elem, attrs,ngModelCtrl){
            var updateModel = function(dateText){
                alert("in date update model");
                scope.$apply(function(){
                    ngModelCtrl.$setViewValue(dateText);
                });
            };
            var options = {
                dateFormat: "dd/mm/yy",
                onSelect: function(dateText){
                    updateModel(dateText);
                }
            };
            elem.datepicker(options);
        }
    }
});