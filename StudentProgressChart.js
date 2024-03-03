arr = ["English" ,"Science" ,"Maths"];

let select = document.getElementById("selectTag")
for (let i = 0; i < arr.length; i++) {
    let opt = document.createElement("option");
    opt.value = arr[i];
    opt.text = arr[i]
    select.add(opt)
}