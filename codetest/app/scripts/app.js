'use strict';
/* global app:true */
/* exported app */

/**
 * @ngdoc overview
 * @name theNetworkApp
 * @description
 * # theNetworkApp
 *
 * Main module of the application.
 */
var app = angular
    .module('theNetworkApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'firebase',
        'angularModalService'
    ])
    .constant('FIREBASE_URL', 'https://ontra-network.firebaseio.com/')
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/posts.html',
                controller: 'PostsCtrl'
            })
            .when('/home', {
                templateUrl: 'views/posts.html',
                controller: 'PostsCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
