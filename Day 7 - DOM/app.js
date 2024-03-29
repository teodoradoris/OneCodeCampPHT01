//Accessing Element using ID
var ElementwithID = document.getElementById('student1');
ElementwithID.textContent = 'student1 - Anna'

//Accessing Element using class
var ElementwithClass = document.getElementsByClassName('section-A');
//Modifying class 
for (var i = 0; i < ElementwithClass.length; i++  ) {
    var element = ElementwithClass[i];
    element.textContent += 'Enrolled!'
}

//Accessing Element by TagName
var styleElement = document.getElementsByTagName ('span')[0];
styleElement.style.backgroundColor = 'lightblue';

//Accessing the first element
const firstElementChild = document.getElementById('parent').firstElementChild;
firstElementChild.textContent = 'Modified first child!'

//Accessing the last element
const lastElementChild = document.getElementById('parent').lastElementChild;
lastElementChild.textContent = 'Modified last child!'

//Previous
var child3 = document.getElementById('child3');
var previousSibling = child3.previousElementSibling;
previousSibling.style.backgroundColor = 'Lightblue';

//Next Sibling
var child3 = document.getElementById('child3');
var nextSibling = child3.nextElementSibling;
nextSibling.style.backgroundColor = 'lightblue';

//Adding event Listener
var button = document.getElementById('button');
button.addEventListener('click', function() {
    var buttonDiv = document.getElementById('buttonDiv');
    buttonDiv.textContent = 'Hello World!'
    alert("Button clicked!");
});

//shortcut 
// button.onclick = function(){
//     var buttonDiv = document.getElementById("buttonDiv");
//     buttonDiv.textContent = `Hello World`;
//     alert("Button Clicked");
// }


//MOdifying element content
var modifyElementWithID = document.getElementById('modify');
modifyElementWithID.textContent = 'MODIFIED';

//Appending new elements
var append = document.getElementById("append");
var newElement = document.createElement('div');
newElement.textContent = "Newly appended Element"
append.appendChild(newElement);

//Removing Elements
const removeThis = document.getElementById('remove');
removeThis.remove();

//Updating element attribute
const image = document.getElementById('image');
image.setAttribute('src', 'https://cdn-icons-png.flaticon.com/512/3688/3688129.png');

//Manipulating element styles
const style = document.getElementById('style');
style.style.backgroundColor = 'black';
style.style.color = 'white';
const mode = document.getElementById('mode');
mode.textContent = 'Dark mode';

var button1 = document.getElementById('button1');
button1.addEventListener('click', function() {
    var buttonDiv1 = document.getElementById('buttonDiv1');
    buttonDiv1.textContent = 'Hello Yeng!'
    alert("Button clicked!");
});