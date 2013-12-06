
'use strict';

angular.module('opd.conceptSet.services')
    .factory('ConceptSetService', ['$http', function ($http) {
        var getConceptSetMembers = function (conceptSetName) {
            return $http.get(Bahmni.Common.Constants.conceptUrl+'?name='+conceptSetName+'&v=fullchildren');
        };
        return {
            getConceptSetMembers: getConceptSetMembers
        };

    }]);

