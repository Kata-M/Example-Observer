var One = function (oneContainer, model) {

        var numGuests = model.getNumberOfGuests();
  	document.getElementById("guests").innerHTML = numGuests; 
   //UPDATE{}
this.update=function(model, changeDetails){
     // redraw just the portion affected by the changeDetails
     // or remove all graphics in the view, read the whole model and redraw 
    // oneContainer.hide();
     var numGuests = model.getNumberOfGuests();
  	document.getElementById("guests").innerHTML = numGuests;
  

} 

  var numberOfGuests = oneContainer.find("#guests");
  //document.numberOfGuests.innerHTML = numGuests;
  //console.log(document.getElementById("guests").innerHTML);


  this.getSecond = oneContainer.find("#getSecond");
  //var minusButton = document.getElementById("minus");
  this.numberOfGuests = oneContainer.find("#guests");
  this.plusButton = oneContainer.find("#plus");
  this.testButton = oneContainer.find("#testButton");
  /*var plusGuests = function(){
        model.setNumberOfGuests(mode.getNumberOfGuests()+1);
        console.log("In plus button modifying model");
    }*/

//MODEL:ADDOBSERVER(THIS)

model.addObserver(this.update);



}






