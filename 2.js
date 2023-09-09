let first=parseInt(prompt("Enter first number"));
let second=parseInt(prompt("Enter second number"));

if(Number(first) && Number(second)){
       if(first>second){
              alert("The first number is greater than the second number.");
       }
       else if(first===second){
        alert("first Equal to Second ")
       }
       else{
        alert("The second number is greater than the first number.");
       }
}else{
    alert("Please Enter NUmeric number")
}