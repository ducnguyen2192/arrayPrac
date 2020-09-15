
var A = [];
function Add(){
    A[A.length] = parseInt(document.getElementById("inputItem").value);
    document.getElementById("array").innerHTML = A;
}
function Display() {
    let a = "<hr>";
    for(let i =0; i<A.length;i++) {
        a += "Element " + i + " = "  + A[i] + "<br/>";
    }
    document.getElementById("result").innerHTML = a;

}
