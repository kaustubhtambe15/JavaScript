// -------------------------------------------------------------//

const POSITIONS = {
  BEFOREBEGIN : "beforebegin"

}

let sp1 = document.createElement("span")

let sp2 = document.getElementById("coffee")

let parentDiv = sp2.parentNode

parentDiv.insertBefore(sp1, sp2)


// -------------------------------------------------------------//
// Element.prepend() - this will add element as a first element
let div =  document.createElement("div");
let p = document.createElement("p");
let span = document.createElement("span");
div.append(p);
div.prepend(span);

div.append("World");
div.prepend("Hello :) ");
document.body.append(div);
console.log("Div childnodes " + div.childNodes);
console.log("div text = "+ div.textContent); 


// -------------------------------------------------------------//
/*
<!-- beforebegin -->
<p>
  <!-- afterbegin -->
  foo
  <!-- beforeend -->
</p>
<!-- afterend -->*/

let btnNew = document.createElement("button");
btnNew.innerText = "New";

let btnNew2 = document.createElement("button");
btnNew2.innerText = "New 2"

let beforebtn = document.getElementById("before")
let afterbtn = document.getElementById("after");
beforebtn.insertAdjacentElement('beforebegin',btnNew );


afterbtn.insertAdjacentElement('afterend',btnNew2 );

afterbtn.insertAdjacentElement(  POSITIONS.BEFOREBEGIN ,  btnNew2 );

// -------------------------------------------------------------//
// insertAdjacentHTML()

const insert = document.querySelector('#insert');
insert.addEventListener('click', () => {
  const subject = document.querySelector('#subject');
  const positionSelect = document.querySelector('#position');
  subject.insertAdjacentHTML(positionSelect.value, '<strong>inserted text</strong>');
});

const reset = document.querySelector('#reset');
reset.addEventListener('click', () => {
  document.location.reload();
});





// -------------------------------------------------------------//
let li = document.createElement('li');
li.textContent = 'Services';

// insert a new node after the last list item
// insertAfter(parentDiv.lastElementChild , li);

