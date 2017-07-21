var ngTodo = angular.module("ngTodo",[]);
ngTodo.controller("mainController",function($scope){
	
	$scope.todos=[
		{
			title:"complete",
			details:"complete project till 27 july"
		},
		{
			title:"gym",
			details:"hey there"
		},
		{
			title:"fun",
			details:"gym at 5 am"
		},
		{
			title:"routine",
			details:"brush teeth after meal"
		},
		{
			title:"github",
			details:"push project to github"
		}
	];
	
	
	$scope.addWorkTodo=function(title,work){
		
		var obj={};
		obj.title=title;
		obj.details=work;
		$scope.todos.push(obj);
		console.log(obj);
	}
	$scope.deleteWorkTodo=function(work){
		var index= $scope.todos.indexOf(work);
		$scope.todos.splice(index,1);
	}
	
});