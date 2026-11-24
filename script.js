let text;

document.getElementById("submit").onclick = function(){
    text = document.getElementById("text").value;
    document.getElementById("output").textContent = text;
}
