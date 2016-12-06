//Adding todo item to todo list

function addInputToList (){
//retrieving input text
	var itemToAdd = document.getElementById("todoitem").value;

//retrieving number of li-element within ul-element
	var numberLiElements = document.querySelectorAll("ul.ul-list-container-left > li").length;
	var elementNumber = numberLiElements + 1;
	//console.log(typeof(elementNumber));
	var strElementNumber = elementNumber.toString();
	
//creating li element
	var li = document.createElement("li");
//adding id atribute ti li
	li.setAttribute("id", strElementNumber);	
	
	var element = document.getElementById("list-left");
	element.appendChild(li);
	
	document.getElementById(strElementNumber).innerHTML = itemToAdd + '<span class="remove" id="' + strElementNumber + '"><i class="ion-ios-trash-outline"></i></span><i class="ion-android-more-vertical"></i><span class="changeList" id="' + strElementNumber + '"><i class="ion-arrow-right-c"></i></li>';
	
	
	var spanRemoveEvents = document.getElementsByClassName("remove");
	//console.log(spanRemoveEvents.length);
	for (var i=0; i < spanRemoveEvents.length; i++) {
        spanRemoveEvents[i].addEventListener('click', removeItem);
    };
	
	var spanChangeListEvents = document.getElementsByClassName("changeList");
	for (var j=0; j < spanChangeListEvents.length; j++) {
        spanChangeListEvents[j].addEventListener('click', changeList);
    };
}

function removeItem (){
	var id = this.getAttribute("id");
	
	var targetLi = document.getElementById(id);
	targetLi.parentNode.removeChild(targetLi);

}

function removeItemFromRightList (){
	var id = this.getAttribute("id");
	
	var targetLi = document.getElementById(id);
	targetLi.parentNode.removeChild(targetLi);
}

function changeList (){
	var id = this.getAttribute("id");
	
	//var li = document.getElementById("list-left").childNodes[id];
	var liToMove = document.getElementById(id);
	
	var element = document.getElementById("list-right");
	element.appendChild(liToMove);
	
	
	var strRightSide = document.getElementById(id).innerHTML;
	var strSign = strRightSide.indexOf("<");
	var strNewLi = strRightSide.slice(0, strSign);
	
	document.getElementById(id).innerHTML = strNewLi + '<span class="remove" id="' + id + '"><i class="ion-ios-trash-outline"></i>';
	
	var spanRemoveEvents = document.getElementsByClassName("remove");
	for (var i=0; i < spanRemoveEvents.length; i++) {
        spanRemoveEvents[i].addEventListener('click', removeItemFromRightList);
    };
}

