window.onresize = screen;
window.onload = screen;

function screen() {
    myWidth = window.innerWidth;

    document.getElementById("size").innerHTML = "Width : " + myWidth + "px";
}