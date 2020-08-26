function truncateStr(str,num){
    var Str = document.getElementById('str').value;
    var Num = document.getElementById('num').value;
    var sliced= Str.slice(0,Num);
    var result;
    if(Str.length > Num){
        result = sliced+"...";
    }else{
        result = Str;
    }
    document.getElementById('result').innerHTML = result;
}
