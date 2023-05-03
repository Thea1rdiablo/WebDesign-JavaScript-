// Assignment Operator

let firstName = "John"
let num1 = 50
num1 += 50 // num1 = num1 + 50
let num2 = 110
num2 -= 10 // num2 = num2 - 10
console.log(num1, num2)

// String Operator
let fullName = "Sorn"
fullName += firstName
console.log(fullName)

// Array--- can store multiple variable in single name
let student1 = {
  fullName: "Seyha",
  age: 20,
  favorite: "Play Card",
  profile: "https://cdn.pixabay.com/photo/2022/08/12/12/36/golden-eagle-7381674_960_720.jpg",
}
let student2 = {
  fullName: "Dany",
  age: 20,
  favorite: "Play Card",
  profile: "https://cdn.pixabay.com/photo/2022/08/12/12/36/golden-eagle-7381674_960_720.jpg",
}
let student3 = {
  fullName: "Ream",
  age: 20,
  favorite: "Play Card",
  profile: "https://cdn.pixabay.com/photo/2022/08/12/12/36/golden-eagle-7381674_960_720.jpg",
}
let student = {
  fullName: "Minea",
  age: 20,
  favorite: "Play Card",
  profile: "https://cdn.pixabay.com/photo/2022/08/12/12/36/golden-eagle-7381674_960_720.jpg",
}

let products = [student1, student2, student3, student]

let ROW = document.querySelector(".row")

// loop to iterate
// products.map(product => ROW.innerHTML += `
// <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
// <div class="card" style="width: 18rem;">
//   <img src="${product.profile}" class="card-img-top" alt="...">
//   <div class="card-body">
//     <p class="card-text">${product.favorite}</p>
//   </div>
// </div>
// </div>
// `)

// Arithmetic Operator----- (+, -, *, /, %, ++, --, **)
console.clear()
let age = 25
let myFriendAge = ++age // increase value 1 more then assign to myFriendAge
console.log(`myFriendAge: ${myFriendAge}, and me:${age}`)

let result = 3**3 // 3^3
console.log(result)
document.write(`
  <h1>let result = 3**2 is equal to 3 <sup> 2</h1>
`)

// Comparison Operator ( ==, !=, >, <, >=, <=, ===)

let a = 50;
let b = 50;

if (a == b){
  alert("yes, a equals b")
}else{
  alert("No, it doesn't equal b")
}

// Logical Operator
const x = 5, y = 3
// (x > 6) || (y < 5) //True
console.log((x > 6) || (y < 5))

// Ternary Operator
// Condition ? express_1 : expression_2
let AgE = 18

let output = AgE >= 18 ? "You are legal to vote": "You are not legal to vote"
console.log(output)

// use case for ternary operator

let loading = true 
let noData = document.querySelector(".no-data")
let hasData = document.querySelector(".data")

let feedback = prompt ("Do you want to see data?")
console.log(feedback)

feedback != "yes" ? noData.innerHTML += `
  <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
    <div class="card" aria-hidden="true">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png" class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class="card-title placeholder-glow">
      <span class="placeholder col-6"></span>
    </h5>
    <p class="card-text placeholder-glow">
      <span class="placeholder col-7"></span>
      <span class="placeholder col-4"></span>
      <span class="placeholder col-4"></span>
      <span class="placeholder col-6"></span>
      <span class="placeholder col-8"></span>
    </p>
    <a class="btn btn-primary disabled placeholder col-6"></a>
    </div>
    </div>
  </div>
`
:
products.map(product => ROW.innerHTML += `
<div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
<div class="card" style="width: 18rem;">
  <img src="${product.profile}" class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text">${product.favorite}</p>
  </div>
</div>
</div>
`)
