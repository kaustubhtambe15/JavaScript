//   html collection    
const itemsByClassName = document.getElementsByClassName('item');

// for loop
var i = 0 
for (i=0; i <= itemsByClassName.length ; i++){
    console.log(itemsByClassName[i]);
}

// while
while( i <=  itemsByClassName.length  ){
    console.log(itemsByClassName[i]);
    i++;
}


//
const itemsByQuerySelector = document.querySelectorAll('.item');    

// for loop
var j = 0 
for (j=0; j <= itemsByQuerySelector.length ; j++){
    console.log(itemsByQuerySelector[j]);
}

// while
while( j <=  itemsByQuerySelector.length  ){
    console.log(itemsByQuerySelector[j]);
    j++;
}

// ----------------------------------
for (let x of itemsByQuerySelector ) {
    console.log(" for in query" +  itemsByQuerySelector[x]);
}


for (let x of itemsByClassName ) {
    console.log("for off class" + itemsByClassName[x]);
}


// itemsByClassName.forEach(function() {
//     console.log("for each" + itemsByClassName);
// });

itemsByQuerySelector.forEach(function() {
    console.log("for each" + itemsByQuerySelector[i]);
});