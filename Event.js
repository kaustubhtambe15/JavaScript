/**
 * ================== Event Handling ==================
 *
 * 1. Event Registration
 * 2. Event delegation
 * 3. Event phases
 * 4. Event object
 * 5. Different events
 */

let btnVote = document.querySelector("#btn");

btnVote.nodeType = "button";

btnVote.onclick =  function() {
    alert("Vote clicked 1");
};

console.log (btnVote)

btnVote.addEventListener('click' , function(e) {
    alert("Vote clicked event 2 ") 
}
)
//------------------//
// btnVote.stopImmediatePropagation(); /* this is capture phase stopping next event to */

// stopPropagation();

btnVote.addEventListener('click' , function(e) {
    alert("Vote clicked event capture 3 ") 
} , true
)


btnVote.addEventListener('click' , function(e) {
    alert("Vote clicked event capture 4") 
} , true
)


btnVote.addEventListener('click' , handleClick
 , true
)

function handleClick (){
    alert ("From handleClick")
}

let navMenu = document.querySelector("#navMenu");

let home = document.querySelector("#home");
let about = document.querySelector("#about");

/*Capture*/ 
// navMenu.addEventListener("click" ,  function(e){
//     alert("Nav menu clicked ") , true
// })
// stopPropagation()
// home.addEventListener("click" ,  function(e){
//     alert("home clicked ") , true
// })

// about.addEventListener("click" ,  function(e){
//     alert("about clicked ") , true
// })


/* Bubble*/

navMenu.addEventListener("click" ,  function(e){
    alert("Nav menu clicked ") 
})

// stopPropagation()   // this will excute nav menu event 
stopImmediatePropagation()  // this will too 

home.addEventListener("click" ,  function(e){
    alert("home clicked ") 
})

about.addEventListener("click" ,  function(e){
    alert("about clicked ") 
})



// btnVote.removeEventListener('click' , handleClick() )