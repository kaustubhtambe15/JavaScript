var arr = ["h1", "h2", "h3", "h4", "h6", "button", "input", "label"];

let tagSelect = document.getElementById("tags")
for (let i = 0; i < arr.length; i++) {
    let opt = document.createElement("option");
    opt.value = arr[i];
    opt.text = arr[i]
    tagSelect.add(opt)
}

let btnGenerate = document.getElementById("generate");

btnGenerate.addEventListener("click", function () {

    let div = document.getElementById("div1");
    let selectedElementType = document.getElementById("selectTag").value
    let numberOfElments = document.getElementById("number").value
    console.log(selectVal, numberOfElments)

    if (numberOfElments < 1 || numberOfElments > 5) {
        alert("Enter number between 1 to 5")
        numberOfElments.value = 1
    } else {
        const fragment = new DocumentFragment();
        for (let i = 1; i <= numberOfElments; i++) {
            let element = document.createElement(selectedElementType);
            element.textContent = "Hello World.."
            fragment.appendChild(element);
        }
        div.appendChild(fragment)
    }
})

let btnClear = document.getElementById("clear");

btnClear.addEventListener("click", function () {
    let div = document.getElementById("div1");
    removeAllChildNodes(div);
    document.getElementById("number").value = 1
})
