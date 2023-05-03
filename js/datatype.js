// data type
// 1. string
let firstName = "Panha"
let lastName = "Long"
let favorite ='Researching and Gaming'
let selfIntroduction = `Hi, greeting from Cambodia. I,
 ${lastName} ${firstName}, my favorite is 
 ${favorite}`
console.log(selfIntroduction)
console.log(typeof(firstName))
let numberOfApple = "90"

//  2. number
let myApples = 90
let result = numberOfApple / myApples
// let result = numberOfApple * myApples
// let result = numberOfApple - myApples
// let result = numberOfApple % myApples
console.log('total apples', typeof(result), result)

// backtick (``)

let HEADER = `
  <h1>Welcome, Developer Cambodia</h1>
`
document.querySelector('#heading').innerHTML = HEADER

// 2. Number
let num1 = 40
let num2 = "0"
let num3 = 5e5 // 5 x 10^5
let output = num1 / num2
console.clear()
console.log(output)

// BigInt

// Boolean ( true, false ) - condition
let loading = true
loading = false 

if (loading){
  // show skeleton 
}
else{
  // show real data
}

// undefined
let age
console.log(age)

// null - empty object

// object
let student = {
  fullName: "Seyha",
  age: 20,
  favorite: "Play Card",
  profile: "https://cdn.pixabay.com/photo/2022/08/12/12/36/golden-eagle-7381674_960_720.jpg",
}
console.log(student.fullName, student.age, student.favorite)
// student = null
console.log(student)

document.querySelector('.row').innerHTML = `
  <div class="col-12 col-sm-6 col-md-4 col-lg-3>
    <div class="card border-0 h-100 shadow">
    <img src="${student.profile}" class="card-img-top" alt="...">
    <div class="card-body">
      <p class="card-text">${student.fullName}</p>
    </div>
    </div>
  </div>
  <div class="col-12 col-sm-6 col-md-4 col-lg-3>
    <div class="card border-0 h-100 shadow">
    <img src="${student.profile}" class="card-img-top" alt="...">
    <div class="card-body">
      <p class="card-text">${student.fullName}</p>
    </div>
    </div>
  </div>
  <div class="col-12 col-sm-6 col-md-4 col-lg-3>
    <div class="card border-0 h-100 shadow">
    <img src="${student.profile}" class="card-img-top" alt="...">
    <div class="card-body">
      <p class="card-text">${student.fullName}</p>
    </div>
    </div>
  </div>
`