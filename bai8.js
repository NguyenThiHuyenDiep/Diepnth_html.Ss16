let num1=+prompt("moi ban nhap so thu nhat");
let num2=+prompt("moi ban nhap so thu hai");
let num3=+prompt("moi ban nhap so thu ba");
let max;
if(num1>num2){
    max=num1;
}else{
    max=num2;
}
if(max>num3){
    document.write("so lon nhat la" + max);
}else{
    max=num3;
    document.write("so lon nhat la" + max);
}
