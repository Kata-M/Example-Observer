function getText() {
  var x = document.getElementById("4");
  var y = document.getElementById("button");
    x.style.display = "none";
    y.style.display = "none";

    var node = document.createElement("LI");                 // Create a <li> node
	var textnode = document.createTextNode("You did IT!!");         // Create a text node
	node.appendChild(textnode);                              // Append the text to <li>
	document.getElementById("fourthView").appendChild(node);
}