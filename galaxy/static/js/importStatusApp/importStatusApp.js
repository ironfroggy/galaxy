/*
 * importStatusApp.js
 *
 * (c) 2012-2015, Ansible, Inc.
 *
 */


'use strict';

(function(angular) {
  
    var app = angular.module('importStatusApp', [
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngCookies',
        'ui.bootstrap',
        'galaxyUtilities',
        'dotDotDotDirective',
        'currentUserService',
        'importStatusController',
        'importService',
        'angulartics', 
        'angulartics.google.analytics'
    ]);

    app.config(['$routeProvider', '$logProvider', '$resourceProvider', _config]);
    
    function _config($routeProvider, $logProvider, $resourceProvider) {
        var debug = (GLOBAL_DEBUG === 'on') ? true : false;
        $logProvider.debugEnabled(debug);
        $resourceProvider.defaults.stripTrailingSlashes = false;
        $routeProvider.
            when('/', {
                templateUrl: '/static/partials/import_status.html',
                controller: 'ImportStatusCtrl',
                resolve: {
                    imports: ['importService', 'currentUserService', _getImports]
                }
            }).
            otherwise({
                redirectTo: '/'
            });
    }

    function _getImports(importService,currentUserService) {
        return importService.imports.get({owner_id: currentUserService.id}).then(function(data){ return data });
    }

})(angular);
