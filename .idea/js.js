let btn = document.getElementById("btn");
let list = document.getElementById("list");

list.style.display = "none";
btn.addEventListener("click",(event) =>{
    if (list.style.display == "none"){
        list.style.display = "block";
    } else {list.style.display = "none"}
})