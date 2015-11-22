console.log("lololol");
var app=angular.module("homepage" , []);

app.controller("formController" , function($scope){
	this.formText="";
	this.firesquad=false; //true if word is displayed
	console.log("lalalaala");
	this.submitting=function(){
		console.log($scope.fc.formText);
		$scope.fc.firesquad=true;
	};
});
