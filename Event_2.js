

let div1 = document.createElement("div");
div1.style = "margin-left : 150px ;  margin-top:70px ; padding:40px ; border: 2px solid red ;height:200px ;Width:150px"


let divKeyEvent = document.createElement("div");
divKeyEvent.style = "margin-left : 150px ;  margin-top:70px ; padding:40px ; border: 2px solid red ;height:200px ;Width:150px"

let btnSignup = document.createElement("button");
btnSignup.innerText = "Sign Up"
btnSignup.className = "btngroup"
btnSignup.id = "btnSignup"

let btnLogIN = document.createElement("button")
btnLogIN.innerText = "Log In"
btnLogIN.className = "btngroup"
btnLogIN.id = "btnLogIn"


let btnForgotPass = document.createElement("button");
btnForgotPass.innerText = "Forgot password"
btnForgotPass.className = "btngroup"
btnForgotPass.id = "btnForgotPass"


let inputText = document.createElement("input");
inputText.className = "textgroup"
inputText.id = "input1"


let div2 = document.createElement("div");
div2.style = "padding:10px";

let div3 = document.createElement("div");
div3.style = "padding:10px";

let div4 = document.createElement("div");
div4.style = "padding:10px";



div1.appendChild(btnSignup)
div1.appendChild(div2)
div1.appendChild(btnLogIN)
div1.appendChild(div3)
div1.appendChild(btnForgotPass)

console.log(div1)

//divKeyEvent
divKeyEvent.appendChild(btnSignup)
divKeyEvent.appendChild(div2)
divKeyEvent.appendChild(btnLogIN)
divKeyEvent.appendChild(div3)
divKeyEvent.appendChild(btnForgotPass)
divKeyEvent.appendChild(div4)
divKeyEvent.appendChild(inputText)



const fragment = new DocumentFragment();

fragment.appendChild(div1);
fragment.appendChild(divKeyEvent)

document.body.append(fragment)

//--------------//

div1.addEventListener(

    "click", function (e) {
        const target = e.target;
        if (target.id === "btnSignup") {
            alert("Sign Up ")
        }
        if (target.id === "btnLogIn") {
            alert("Log In ")
        }
        if (target.id === "btnForgotPass") {
            alert("Forgot password clicked..!!! ")
        }

    }
)


// mouseup 
//mousedown
// mousemove
div1.addEventListener(

    "mouseup", function (e) {
        const target = e.target;
        if (target.id === "btnSignup") {
            alert("Sign Up mouseup")
            btnSignup.innerText = "Mouseup"
        }
        if (target.id === "btnLogIn") {
            alert("Log In  mouseup")
        }
        if (target.id === "btnForgotPass") {
            alert("Forgot password mouseup..!!! ")
        }

    }
)

div1.addEventListener(
    "mousedown", function (e) {
        const target = e.target;
        if (target.id === "btnSignup") {
            alert("Sign Up mousedown ")
            // btnSignup.innerText = "Mouseup"
        }
        if (target.id === "btnLogIn") {
            alert("Log In mousedown")
        }
        if (target.id === "btnForgotPass") {
            alert("Forgot password mousedown..!!! ")
        }

    }
)

div1.addEventListener(

    "mousemove", function (e) {
        const target = e.target;
        if (target.id === "btnSignup") {
            // alert("Sign Up mouse Move ")
            // btnSignup.innerText = "Mouseup"
        }
        if (target.id === "btnLogIn") {
            // alert("<b>Log In mouse Move</b> ")
        }
        if (target.id === "btnForgotPass") {
            // alert("Forgot password mouse Move ")
        }
    }
)

div1.addEventListener(

    "click", function (e) {
        const target = e.target;
            console.log(target)
    }
)


/*Keyboard events */



divKeyEvent.addEventListener(

    "keyup", function (e) {
        const target = e.target;
        if (target.id === "btnSignup") {
            console.log("Sign Up KeyUp")
            // btnSignup.innerText = "Mouseup"
        }
        if (target.id === "btnLogIn") {
            console.log("Log In  KeyUp")
        }
        if (target.id === "input1") {
            // console.log("inputText KeyUp..!!! ")
            // console.log("")
        }

    }
)
console.log(document.getElementById("input1"))
divKeyEvent.addEventListener(
    "keypress", function (e) {
        const target = e.target;
        if (target.id === "btnSignup") {
            console.log("Sign Up keypress ")
            
            
            // btnSignup.innerText = "Mouseup"
        }
        if (target.id === "btnLogIn") {
            console.log("Log In keypress")
        }
        if (target.id === "input1") {
            // console.log("inputText keypress..!!! ")
        }

    }
)

// divKeyEvent.addEventListener(
//     "keydown", function (e) {
//         const target = e.target;
//         if (target.id === "btnSignup") {
//             alert("Sign Up keydown ")
//             // btnSignup.innerText = "Mouseup"
//         }
//         if (target.id === "btnLogIn") {
//             alert("Log In keydown")
//         }
//         if (target.id === "input1") {
//             alert("inputText keydown..!!! ")
//         }

//     }
// )


divKeyEvent.addEventListener(
    "input", function (e) {
        const target = e.target;
        if (target.id === "btnSignup") {
            console.log("Sign Up input ")
            // btnSignup.innerText = "Mouseup"
        }
        if (target.id === "btnLogIn") {
            console.log("Log In input")
        }
        if (target.id === "input1") {
            console.log("inputText input..!!! ")
            // console.log(e)
        }

    }
)