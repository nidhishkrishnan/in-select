'use strict';

angular.module('IndentationSelect', [])

.run(function($templateCache) {

        var selectHtml = "<select ng-model='model' ng-change='optionsChange()'><option ng-hide='true' ng-value='{{optionValue.value}}'>{{optionValue.value}}</option><option ng-repeat='(key, value) in selectList' value='{{value}}' style='font-weight: bold'>{{value | space}}</option></select>";

        $templateCache.put("select.html", selectHtml);
    })
    .filter('space', function() {
        return function(text) {
            if (text.mainId === undefined) {
                return text.value;
            } else {
                return '\u00A0\u00A0' + text.value;
            }
        };
    })
    .directive('inSelect', function() {
        return {
            restrict: 'E',
            scope: {
                ngModel: '=',
                selectList: '='
            },
            templateUrl: 'select.html',
            link: function(scope, element, attrs) {
                scope.optionsChange = function() {
                    scope.optionStyle = {
                        'font-weight': 'normal'
                    }
                    scope.optionValue = JSON.parse(scope.model);
                    scope.model = scope.optionValue.value;
                    scope.ngModel = scope.optionValue;
                };
            }
        };
    });
