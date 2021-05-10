let select = document.getElementById("select"),
    arr = ["1", "2", "3", "Here We END"];

for (let i = 0; i < arr.length; i++) {
    let option = document.createElement("option"),
        txt = document.createTextNode(arr[i]);
    option.appendChild(txt);
    option.setAttribute("value", arr[i]);
    select.insertBefore(option, select.lastChild);
}