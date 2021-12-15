function text(x){
    if(x == 0){
        document.getElementById("phone-input").style.display = "none";
        document.getElementById("email-input").style.display = "block";
    }
    else if(x == 1){
        document.getElementById("email-input").style.display = "none";
        document.getElementById("phone-input").style.display = "block";
    }
};