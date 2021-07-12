function validate(){
    let x = document.getElementById("mobile")
    if(x.value.length != 10)
     console.log("please enter 10 digits");
     return 0;
}
