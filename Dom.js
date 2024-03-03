var lblName = document.createTextNode('Name');
var lblPassword = document.createTextNode(' Password');


var txtName = document.createElement('input');
var txtPassword = document.createElement('input');


var btnSignup = document.createElement('button');
var btnText =document.createTextNode('Click Me');


var brtag = document.createElement('br');

btnSignup.appendChild(btnText);

const fragment = new DocumentFragment();


fragment.append(lblName);
fragment.append(txtName);
fragment.append(lblPassword);
fragment.append(txtPassword);
fragment.append(brtag);
fragment.append(btnSignup);

document.body.append(fragment);

console.log(document.body.childNodes);
console.log(document.body.children);

