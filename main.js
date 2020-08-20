document.getElementById("add").onclick= addNumber
document.getElementById("subtract").onclick= subtractNumber
document.getElementById("multiply").onclick= multiplyNumber
document.getElementById("divide").onclick= divideNumber


function addNumber(){
  var x=parseFloat(document.getElementById("numOne").value);
  var y=parseFloat(document.getElementById("numTwo").value);
  var sum=x+y
  document.getElementById("result").innerHTML= sum
}

function subtractNumber(){
  var x=parseFloat(document.getElementById("numOne").value);
  var y=parseFloat(document.getElementById("numTwo").value);
  var sum=x-y
  document.getElementById("result").innerHTML= sum
}

function multiplyNumber(){
  var x=parseFloat(document.getElementById("numOne").value);
  var y=parseFloat(document.getElementById("numTwo").value);
  var sum=x*y
  document.getElementById("result").innerHTML= sum
}
function divideNumber(){
  var x=parseFloat(document.getElementById("numOne").value);
  var y=parseFloat(document.getElementById("numTwo").value);
  var sum=x/y
  document.getElementById("result").innerHTML= sum
}
