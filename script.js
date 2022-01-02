var a;
function toggle(){
    if(a==1){
        document.getElementById("table").style.display="inline";
        return a=0;
    }
    else
    {
        document.getElementById("table").style.display="none";
        return a=1;
    }
}