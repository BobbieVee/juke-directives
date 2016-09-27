'use strict';

juke.controller('SidebarCtrl', function ($scope) {

  // nothing to see here for now… state transitions happening with ui-sref!
  
})

juke.directive('sideBar', function () {
  	return {
	    restrict: 'E', // the 'E' is for 'element'
	    templateUrl: 'js/sidebar/sidebar.template.html'
  	};
 });


