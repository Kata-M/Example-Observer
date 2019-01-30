var OneController = function(view, model, app) {


	view.plusButton.click(function(){ 
			model.setNumberOfGuests(model.getNumberOfGuests()+1);
			//app.showOne();
	});

	view.testButton.click(function(){ 
			model.setNumberOfGuests(model.getNumberOfGuests()+1);
			//app.showOne();
	});




	console.log("NumberOfGuests : ", model.getNumberOfGuests());
	//view.minusButton.click(function(){ model.setNumberOfGuests(model.getNumberOfGuests()-1)});
	//console.log("NumberOfGuests : ", mode.getNumberOfGuests());
	//view.plusButton.click(function(){ model.setNumberOfGuests(model.getNumberOfGuests()+1)});
	
	//app.showOne();
	//view.oneContainer.show();

	view.getSecond.click(function(){ 
			app.showSecond();
			//app.showOne();
	});




}