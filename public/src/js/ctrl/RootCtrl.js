/**
 * Created by kimxogus on 2016-05-05.
 */

'use strict';
define(['app', 'service/GroupService'], function(app) {
    app.controller('RootCtrl', ['$scope', 'groupService',
        function($scope, groupService) {
            groupService.getGroups()
                .then(function(groups) {
                    $scope.groups = groups;
                });
        }]);
});