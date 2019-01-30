var DinnerModel = function() {
 
 	console.log("Hello Javascript KATA");
	//TODO Lab 1 implement the data structure that will hold number of guest
	// and selected dishes for the dinner menu

	var numberOfGuests = 2; //type int
	var menu = [{
		'id':1,
		'name':'French toast',
		'type':'test',
		'image':'toast.jpg',
		'description':"In a large mixing bowl, beat the eggs. Add the milk, brown sugar and nutmeg; stir well to combine. Soak bread slices in the egg mixture until saturated. Heat a lightly oiled griddle or frying pan over medium high heat. Brown slices on both sides, sprinkle with cinnamon and serve hot.",
		'ingredients':[{ 
			'name':'eggs',
			'quantity':0.5,
			'unit':'',
			'price':10
			},{
			'name':'milk',
			'quantity':30,
			'unit':'ml',
			'price':6
			},{
			'name':'brown sugar',
			'quantity':7,
			'unit':'g',
			'price':1
			},{
			'name':'ground nutmeg',
			'quantity':0.5,
			'unit':'g',
			'price':12
			},{
			'name':'white bread',
			'quantity':2,
			'unit':'slices',
			'price':2
			}]
		}]; //type array/queue
	var allTypes = [];

	//OBSERVER STUFF ----->
	//FUNCTION NOTIFY
	var observers=[];
    this.addObserver=function(observer){ observers.push(observer); }
   
    this.notifyObservers=function(){ 
        for(var i=0; i<observers.length; i++)
             observers[i](this); // we assume that observers[i] is a function, so we call it like observers[i](parameters)
    }

    this.removeObserver=function(observer){  /* remove observer from array */}
   


	//OBSERVER STUFF <-----

	this.setNumberOfGuests = function(num) {
		//DONE Lab 1
		console.log("set number of guests to: ", num);
		numberOfGuests = num;

		//NOTIFY
		this.notifyObservers();
		
	}
	
	this.getNumberOfGuests = function() {
		//DONE Lab 1
		console.log("get number of guests ");
		return numberOfGuests;

	}
}