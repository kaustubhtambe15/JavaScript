console.log('DOM');
document.getElementById('header').style.color = 'red';
document.getElementById('header').textContent = 'kaustubh';

var button = document.createElement('button');
button.textContent = 'Click me';

document.body.append(button);

var header = document.getElementById('header');
console.log(header);


/**
 *  class="signin"
 *    class="form"
    *    class="form-control"
    *      class="input"
    *    class="form-control"
    *      class="input"
    *    class="button submit"
 *  var submitButton = document.querySelector('#navbar .signin .form submit')
 * submitButton.disable = true;
 */


var h1Heading = document.querySelector('h1#header');
// returns  first element
console.log(h1Heading);


var allHeadings = document.getElementsByClassName('heading');
// returns htmlcollection
console.log(allHeadings);


var p1Paragraph = document.getElementsByTagName('p');
// returns htmlcollection
console.log(p1Paragraph);

var newButton = document.getElementById('newButton');
// returns element 
console.log(newButton);

var div = document.getElementById("divBtn");

var allElements = document.querySelectorAll('p');
// return NodeList
console.log(allElements);

// ------------------------------//

console.log(document.body.parentNode);

console.log(newButton.parentElement); 

// siblings 
console.log(document.head.nextElemntSibling);
console.log(document.body.previousElementSibling);

console.log(document.body.childNodes);
// console.log(allElements.);
console.log(document.body.childNodes);
 

 
 
 
//  ---------------------------------
/**
 * 1. li having text home
 * 2. li having text Dashboard
 * 3. group of all form controls with css class form-control
 * 4. A submit button with text Login
 * 5. A list of menu items in the top header
 *
 */

 var liHome = document.querySelector('header .menus .menu');
 // console.log(liHome);
 
 var liDashboard = document.querySelector('.side-nav .menus .menu');
 console.log(liDashboard);
 
 var allControls = document.querySelectorAll('.form-control');
 console.log(allControls);
 