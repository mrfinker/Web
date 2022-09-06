const popOutButton = document.getElementById("button");

const pop_container = document.querySelector(".pop-container");

const exitPop = document.getElementById("pop_container");


popOutButton.addEventListener("click", popOutNow);

document.addEventListener("mouseout", exitPop);



function popOutNow(e) {
    e.preventDefault();
    document.querySelector(".pop-container").style.display = "flex";
}


const cancelPop = document.getElementById("close");
cancelPop.addEventListener("click", cancelPopOut);

function cancelPopOut(e) {
    e.preventDefault();
    pop_container.style.display = "none";
}


