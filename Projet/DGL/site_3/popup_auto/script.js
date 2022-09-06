window.addEventListener("load", function(){
    setTimeout(
        function open(event){
            document.querySelector(".container-pop").style.display= "flex";
        },
        1000
    )
});

document.querySelector("#fermer").addEventListener("click", function(){
    document.querySelector(".container-pop").style.display="none";
});