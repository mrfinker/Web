window.addEventListener("load", function(){
    setTimeout(
        function open(event){
            document.querySelector(".container").style.display= "flex";
        },
        3000
    )
});

document.querySelector("#fermer").addEventListener("click", function(){
    document.querySelector(".container").style.display="none";
});