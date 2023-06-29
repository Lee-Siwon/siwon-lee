function solution(){
    var x = document.getElementById("answer");
    console.log("Click!")
    if(x.style.display !== "block"){
        x.style.display = "block";
    }
    else{
        x.style.display="none";
    }
}