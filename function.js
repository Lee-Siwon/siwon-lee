function solution(number){
    var Target = "answer"+String(number);
    var x = document.getElementById(Target);
    if(x.style.display !== "block"){
        x.style.display = "block";
    }
    else{
        x.style.display="none";
    }
}