/*function getFourth() {
  var x = document.getElementById("thirdView");
  var y = document.getElementById("fourthView");
    x.style.display = "none";
    y.style.display = "block";
}
*/
var SidebarViewController = 
	function(view,model, app) { view.confirmButton.click(function(){
           app.showThird();
       })
}