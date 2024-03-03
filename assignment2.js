let divForm = document.createElement("div");


let parentDiv = document.createElement("div");
// divAllRecords.id = "divAllRecords"

let divAllRecords = document.createElement("div");
divAllRecords.id = "divAllRecords"

let lblFirstName = document.createElement("label");
lblFirstName.innerText = "First Name"

let lblLastName = document.createElement("label");
lblLastName.innerText = "Last Name"

let textFirstName = document.createElement("input");
textFirstName.type = "text"

let txtLastName = document.createElement("input");
txtLastName.type = "text"

let divRecord = document.createElement("div")


let lblRecords = document.createElement("label");
lblRecords.innerText = "Records"

let selectbox = document.createElement("select")

let optEng = document.createElement("option");
optEng.value = "English"
optEng.text = "English"

let optSci = document.createElement("option");
optSci.value = "Science"
optSci.text = "Science"

let optMaths = document.createElement("option");
optMaths.value = "Maths"
optMaths.text = "Maths"
selectbox.add(optEng)
selectbox.add(optSci)
selectbox.add(optMaths)

let textMarks = document.createElement("input");
textMarks.type = "text"

let btnDelete = document.createElement("button");
btnDelete.innerText = "Delete"
btnDelete.className = "Delete"

divRecord.appendChild(selectbox)
divRecord.appendChild(textMarks)
divRecord.appendChild(btnDelete)
divRecord.appendChild(document.createElement("div"));


let btnAdd = document.createElement("button");
btnAdd.innerText = "Add Row"

let btnSave = document.createElement("button");
btnSave.innerText = "Save"


divAllRecords.appendChild(divRecord)
parentDiv.appendChild(lblRecords)
parentDiv.appendChild(divAllRecords)

divForm.appendChild(lblFirstName);
divForm.appendChild(textFirstName);
divForm.appendChild(document.createElement("div"));
divForm.appendChild(lblLastName);
divForm.appendChild(txtLastName);
divForm.appendChild(document.createElement("div"));
divForm.appendChild(parentDiv);
// divForm.appendChild(divRecord);
divForm.appendChild(document.createElement("div"));
divForm.appendChild(btnAdd);
divForm.appendChild(document.createElement("div"));
divForm.appendChild(btnSave);



const fragment = new DocumentFragment();
fragment.appendChild(divForm);

// ---------------------------------------//
let arrSub = [];
function onAdd() {



    let divData = document.getElementById("divAllRecords")


    let lastElement = divData.lastElementChild
    sub = lastElement.firstElementChild.value

    if (arrSub.length === 2) {
        alert("Only 3 Entry allowed")
        return
    }

    for (i = 0; i <= arrSub.length; i++) {
        if (sub == arrSub[i]) {
            alert("Select diffrent subject")
            return
        }
    }
    arrSub.push(sub);
    console.log(arrSub)


    let divRecord = document.createElement("div");

    let lblRecords = document.createElement("label");
    lblRecords.innerText = "Records"

    let selectbox = document.createElement("select")

    let optEng = document.createElement("option");
    optEng.value = "English"
    optEng.text = "English"

    let optSci = document.createElement("option");
    optSci.value = "Science"
    optSci.text = "Science"

    let optMaths = document.createElement("option");
    optMaths.value = "Maths"
    optMaths.text = "Maths"
    selectbox.add(optEng)
    selectbox.add(optSci)
    selectbox.add(optMaths)

    let textMarks = document.createElement("input");
    textMarks.type = "text"

    let btnDelete = document.createElement("button");
    btnDelete.innerText = "Delete"
    btnDelete.className = "Delete"

    divRecord.appendChild(selectbox)
    divRecord.appendChild(textMarks)
    divRecord.appendChild(btnDelete)
    divRecord.appendChild(document.createElement("div"));
    divAllRecords.appendChild(divRecord)
}

// const mybody = document.getElementsByTagName("body")[0];

const mytable = document.createElement("table");
const mytablebody = document.createElement("tbody");

const mytablHead = document.createElement("thead");

const thId = document.createElement("th");
currenttext1 = document.createTextNode("Id");
thId.appendChild(currenttext1);

const thName = document.createElement("th");
currenttext2 = document.createTextNode("Name");
thName.appendChild(currenttext2);

const thMaths = document.createElement("th");
currenttext3 = document.createTextNode("Maths");
thMaths.appendChild(currenttext3);

const thSci = document.createElement("th");
currenttext4 = document.createTextNode("Science");
thSci.appendChild(currenttext4);

const thEng = document.createElement("th");
currenttext5 = document.createTextNode("English");
thEng.appendChild(currenttext5);

const thTotal = document.createElement("th");
currenttext6 = document.createTextNode("Total");
thTotal.appendChild(currenttext6);

mytablHead.appendChild(thId)
mytablHead.appendChild(thName)
mytablHead.appendChild(thMaths)
mytablHead.appendChild(thSci)
mytablHead.appendChild(thEng)
mytablHead.appendChild(thTotal)
// mytablHead.appendChild()


let count = 0;
let arr = [];
function onSave() {
    count++;
    let divData = document.getElementById("divAllRecords")
    console.log(divData);
    let r1 = divData.firstElementChild
    let subject1 = "-"
    let sub1Marks = 0
    let r2
    if (r1) {
        subject1 = r1.firstElementChild
        sub1Marks = subject1.nextSibling.value
        // console.log(sub1Marks)
        subject1 = r1.firstElementChild.value
        r2 = r1.nextSibling;
    }

    let subject2 = "-"
    let sub2marks = 0
    let r3
    if (r2) {
        subject2 = r2.firstElementChild
        sub2marks = subject2.nextSibling.value
        subject2 = r2.firstElementChild.value
        r3 = r2.nextSibling
    }

    let subject3 = "-"
    let sub3marks = 0
    if (r3) {
        subject3 = r3.firstElementChild
        sub3marks = subject3.nextSibling.value
        subject3 = r3.firstElementChild.value
    }

    let name = textFirstName.value + " " + txtLastName.value

    // console.log(name, sub1Marks , sub2marks , sub3marks );
    let total = Number(sub1Marks) + Number(sub2marks) + Number(sub3marks)
    arr = [count, name, sub1Marks, sub2marks, sub3marks, total]
    console.log(arr)

    const mycurrent_row = document.createElement("tr");
    for (let i = 0; i < 6; i++) {

        const mycurrent_cell = document.createElement("td");

        currenttext = document.createTextNode(arr[i]);
        mycurrent_cell.appendChild(currenttext);
        mycurrent_row.appendChild(mycurrent_cell)
        mytablebody.appendChild(mycurrent_row);
    }

    mytable.appendChild(mytablHead)
    mytable.appendChild(mytablebody);
    mytable.setAttribute("border", "2");
    fragment.appendChild(mytable)
    document.body.appendChild(fragment);
}



btnSave.addEventListener("click", onSave)

btnAdd.addEventListener("click", onAdd)

// console.log(divRecord)

// console.log(divAllRecords)

divAllRecords.addEventListener("click", function (e) {
    const target = e.target;
    if (target.className === "Delete") {
        // alert("Delete  mousedown ")
        let div1 = target.parentElement
        let selectValue = div1.firstElementChild.value
        arrSub.pop(selectValue)
        let mainDiv = div1.parentElement
        console.log(mainDiv)
        mainDiv.removeChild(div1)
    }
}
)

document.body.appendChild(fragment);

