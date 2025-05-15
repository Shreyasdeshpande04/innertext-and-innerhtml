function validate(){
    var name = document.getElementById("Uname").value;
    let msg="";
    if(name.length>4){
        msg="correct";
    }
    else{
        msg="poor";
    }

    document.getElementById("error").innerHTML=msg;
}