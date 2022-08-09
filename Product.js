const form = document.getElementById('prodForm');
let prodTable = document.getElementsByTagName('table')[0];
const list = document.getElementById('prodList');
form.addEventListener('submit',submitFunc);
let rowCount = 0;

//function that gets triggered when we submit the product form
function submitFunc(event) {

    event.preventDefault();
    rowCount = rowCount + 1;
    //collect form data
    let image = document.getElementById("prodImage").value;
    let name = document.getElementById("prodName").value;
    let description = document.getElementById("prodDescription").value;
    let price = document.getElementById("price").value;
    let unit = document.getElementById("unitMeasure").value;
    
    let newRow = prodTable.insertRow(rowCount);
    let icell = newRow.insertCell(0);
    let ncell = newRow.insertCell(1);
    let dcell = newRow.insertCell(2);
    let pcell = newRow.insertCell(3);
    let ucell = newRow.insertCell(4);

    icell.innerHTML += '<img src=../"'+image+'" />';
    ncell.innerHTML = name;
    dcell.innerHTML = description;
    pcell.innerHTML = price;
    ucell.innerHTML = unit;
    form.reset();
}

//function that gets triggered when we want to view product list
function viewListFunc() {
    event.preventDefault();
    form.style.display= 'none';
    list.style.display ='block';
}

//function that gets triggered when we want to add more products
function addProdFunc() {
    list.style.display = 'none';
    form.style.display = 'block';
}

