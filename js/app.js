
if(confirm("sen butun sertlerle razisan?")===true){
    alert("ICAZE VERIREM GIR")
}
else{
    alert("icaze vermirem gormuyessen")
    document.body.style.display ="none";
}
// task1end
function Avg(){
    var point=prompt("Enter your age","Reqem Daxil Et");
    if(point<18){
         document.getElementById("prom").innerHTML="YaSIN AZDI eHTIYATLI OL";
    }
}
// task2 end
function dlmode(){
    var lamp=document.getElementById("photo");
    if(lamp.style.filter==="grayscale(0.9)"){
        lamp.style.filter="grayscale(0)";
    }
    else{
        lamp.style.filter="grayscale(0.9)"
    }
}
// task3 end
function metod(){


var group = code.value;
if(group>100&&group<200){
    document.body.style.backgroundColor="yellow";
}
else if(group>200&&group<300){
    document.body.style.backgroundColor="red";
}
else if(group>300&&group<400){
    document.body.style.backgroundColor="black";
} 
else{
    document.body.style.display="none";
}   

}