var ngTodo = angular.module("ngTodo",[]);
ngTodo.controller("mainController",function($scope){
	$scope.todos=["gym at 5 am","hey there","brush teeth after meal","push project to github","complete project till 27 july"];
	$scope.add_work_todo=function(work){
		$scope.todos.push(work);
	}
	$scope.delete_work_todo=function(work){
		var index= $scope.todos.indexOf(work);
		$scope.todos.splice(index,1);
	}
	
});