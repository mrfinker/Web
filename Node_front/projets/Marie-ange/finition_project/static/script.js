function toggle(){
    var blur=document.getElementById("blur");
    blur.classList.toggle("active");
    var popuplogin = document.getElementById("popuplogin");
    popuplogin.classList.toggle("active")
    togglle.exit()
}

function togglle(){
    var blur=document.getElementById("blur");
    blur.classList.toggle("active");
    var popupregister = document.getElementById("popupregister")
    popupregister.classList.toggle("active")
    toggle().exit()
}
