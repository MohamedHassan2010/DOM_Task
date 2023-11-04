
function newElement() {
    let txt = document.getElementById("myInput").value;
    let x = document.createElement("h1");
    let error = "Input still Empty";
    if (txt.length === 0) {
        x.innerHTML = error;
        document.getElementById("add").appendChild(x);
    } else {
        x.innerHTML = txt;
        document.getElementById("add").appendChild(x);
    }
}

function GFG_Fun() {
    let up = document.getElementById('GFG_UP');
    let down = document.getElementById('GFG_DOWN');
    let div = document.getElementById('GFG_DIV');
    up.innerHTML = "Click on button to remove the element.";
    div.parentNode.removeChild(div);
    down.innerHTML = "Element is removed.";
}

function editElement() {
    let txt = document.getElementById("myInput1").value;
    let x = document.createElement("h1");
    let error = "Input still Empty";
    let down1 = document.getElementById('GFG_DOWN1');
    if (txt.length === 0) {
        x.innerHTML = error;
        document.getElementById("last").appendChild(x);
    } else {
        document.getElementById("label").innerHTML = txt;
        down1.innerHTML = "Element is Edited.";
    }
}

function saveElement() {
    let output = document.getElementById("output");
    let key = "RowHTML";
    let HTMLcontent = document.getElementById("myInput2").value;
    let z = document.createElement("h1");
    let error = "Input still Empty";
    // store content to local storage
    let x = localStorage.setItem(key, HTMLcontent);
    // get item from local storage
    let result = localStorage.getItem(key);
    if (HTMLcontent.length === 0) {
        z.innerHTML = error;
        document.getElementById("output").appendChild(z);
    } else {
        output.innerHTML = "The saved HTML content: " + result;
    }
}
