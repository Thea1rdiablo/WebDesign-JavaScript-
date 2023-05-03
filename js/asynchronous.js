
function welcomeMessage(name){
  console.log(`Welcome, $(name)`)
}
let firstName = "Dany"
welcomeMessage(firstName)
// process synchronous

let row = document.querySelector(".row")
// fetch api: fetch()
let ProductAPI = 'https://api.escuelajs.co/api/v1/products'
function getAllProducts(){
  fetch(ProductAPI, {
    method: "Get"
  })
  .then(resp => resp.json())
  .then(Response => Response.map(res => row.innerHTML += `
      <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
        <div class="card border-0 shadow-sm h-100">
          <img src="${res.images[0]}" class="card-img-top" alt="...">
          <div class="card-body">
            <p class="card-text">${res.title}</p>
          </div>
        </div>
      </div>
  `))
}
// getAllProducts()

let basePath = 'https://image.tmdb.org/t/p/w440_and_h660_face/'
let moviesAPI = 'https://api.themoviedb.org/3/movie/popular?api_key=4113f3ad734e747a5b463cde8c55de42&language=en-US&page=1'
function getPopularMovies(){
  fetch(moviesAPI, {
    method: "Get"
  })
  .then(resp => resp.json())
  .then(Response=> Response.results.map(res=>row.innerHTML +=`
      <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
        <div class="card border-0 shadow-sm h-100">
          <img src="${basePath +res.backdrop_path}" class="card-img-top" alt="...">
          <div class="card-body">
            <p class="card-text">${res.title}</p>
          </div>
        </div>
      </div>
  `))
}
getPopularMovies()


const fetchUser = async () => {
  const resp = await fetch ("https://api.escuelajs.co/api/v1/products")
  return resp.json()
}
fetchUser()
