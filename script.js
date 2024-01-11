var target=document.getElementById("no");
target.addEventListener("mouseover",myFunction);
function myFunction(e){
    var x = e.offsetX;
    var y = e.offsetY;
target.style.top=x+1 + "%";
target.style.left=x+1 + "%";
}

document.getElementById("yes").onclick = clicked;
function clicked(){
    alert("Lets Go....");
}
