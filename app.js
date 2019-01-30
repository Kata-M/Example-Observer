$(function(){

  // jQuery methods go here...
  var model = new DinnerModel();
  console.log(model);
  //var sidebarView = new SidebarView($('#firstView', model))
  //var sidebarViewController = new SidebarViewController(sidebarView, model, this)

  var oneContainer = $("#firstView");
  console.log(oneContainer);
  var oneView = new One(oneContainer,model);
  var oneViewController = new OneController(oneView, model, this);



/*
  var hideAllViews = function(){
	  		$("#firstView").hide();
	  		$("#secondView").hide();
	  		$("#thirdView").hide();
			$("#fourthView").hide();

	  }

	  this.showThird = function(){
	  	hideAllViews();
	  	$("#thirdView").show();

	  }
*/



  this.showOne = function(){
  	console.log("HEYYYY");
  	$("#firstView").show();
  	console.log($("#firstView"));
  }

  this.showSecond = function(){
  	$("#secondView").show();
  }
});



