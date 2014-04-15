Application.$controller("MainPageController", ['$scope', '$rootScope', 'Widgets', 'Variables', 'ViewService',
    function($scope, $rootScope, Widgets, Variables, ViewService) {
        "use strict";

        /* perform any action with the variables inside this block(on-page-load) */
        $scope.onPageVariablesReady = function() {
            /*
             * variables can be accessed through 'Variables' service here
             * e.g. Variables.staticVariable1.getData()
             */
        };

        $scope.launchDashBoardClick = function($data, $event) {
            ViewService.showView('graphView');
        };

        $scope.returnToTeamSelectionClick = function($data, $event) {
            ViewService.showView('gridView');
        }


        $scope.gameYearsonBeforeUpdate = function(variable, data) {
            return filterDBdata(data, 'name');
        };


        $scope.venuesListonBeforeUpdate = function(variable, data) {
            return filterDBdata(data, 'arena');
        };


        $scope.teamsListonBeforeUpdate = function(variable, data) {
            return filterDBdata(data, 'name');
        };


        $scope.gameTypeonBeforeUpdate = function(variable, data) {
            return filterDBdata(data, 'name');
        };

        function filterDBdata(data, key1, key2) {
            var d = [];
            WM.forEach(data, function(obj) {
                d.push({
                    'dataValue': obj[key1][key2] || obj[key1]
                });
            });
            return d;
        }


        $scope.resetClick = function($data, $event) {
            Widgets.gamequarter.datavalue = null;
            Widgets.gameyear.datavalue = null;
            Widgets.gameteam.datavalue = null;
            Widgets.gamecountry.datavalue = null;
        };


        $scope.quarterlyRevenueonBeforeUpdate = function(variable, data) {
            data.push({
                'quarter': 3,
                'revenue': 0
            });
            data.sort(function(a, b) {
                return a.quarter > b.quarter;
            });
            return data;
        };


    }
]);

Application.$controller("grid1Controller", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
    }
]);