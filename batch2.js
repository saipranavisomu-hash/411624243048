// console.log("print statement");
// const a=20
// const b=30
// console.log(a+b)

// const str="Pranavi"
// console.log(str)

// const arr=[1,2.3,"String",false]
// console.log(arr)

// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }

// arr[1]=3.5
// console.log(arr[1])

// arr.push("Pranavi")
// console.log(arr)

// arr.pop()
// console.log(arr)

function example(){
    console.log("I am very tired")
}
const shree=document.getElementById("shree")
shree.innerHTML="PRINT STATEMENT"

const input =document.getElementById("input")
const output=document.getElementById("input field")
input.addEventListener("input",()=>{
    output.textContent=input.value
})
// const first =document.createElement("h1")
// first.textContent="Some Text"
// document.body.appendChild(first)

const first =document.createElement("p")
first.textContent="Some Text"
document.body.appendChild(first)
first.remove()

