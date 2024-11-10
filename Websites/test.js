//window.alert(`WELCOME TO THE !@$&*#*(!#$)`)
//Vscripting taught me some languages you may use lower and upper casing.
//GSC/Vscripting/C++ has taught me how to use variables and arrays, and conditions.
//BRO CODE has taught me how fricking cool backticks are with the ${}
let x
let X
x = 255
X = `bob`
let apple = `apple`

let y = [ 0, 5, 23, 37 ]
//document.getElementById( "testpara" ).textContent=`This is a test paragraph #1 ${X} ${x}`
console.log( `This is an array ${y}` )
console.log(`This is an array with index 2: ${y[2]}`)
console.log(`This is an apple: ${apple}`)
console.log(`This is an apple with index 3: ${apple[3]}`)

//let ruhroh = window.prompt("What is it that you enjoy doing?")
//document.getElementById( "testpara" ).textContent=`For some reason, this dumb bastard likes: ${ruhroh}`
let bro = "h";
document.getElementById("mysubmit").onclick = function()
{
    bro = document.getElementById("mytext").value;
    //window.alert(`${bro}`)
    //console.log(`${bro}`)
    document.getElementById( "testlabel" ).textContent=`${bro}`
}