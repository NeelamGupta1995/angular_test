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
	
	
	$scope.add_work_todo=function(title,work){
		$scope.todos.push("todos{title:"+title+"}");
		$scope.todos.push("todos{details:"+work+"}");
	}
	$scope.delete_work_todo=function(work){
		var index= $scope.todos.indexOf(work);
		$scope.todos.splice(index,1);
	}
	
});