let content = document.querySelector("#content");

/* old way for using api*/
// fetch("http://universities.hipolabs.com/search?country=United+States")
//     .then((response)=>{
//         return response.json()
//     })
//     .then((data)=>{
//         console.log(data);
//     })

/* new way for using api*/
async function get() {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  console.log(data);
  data.forEach((product) => {
    content.innerHTML += `
      <div class="card shadow" style="width: 18rem;">
        <img class="card-img-top" src="${product.image}" style="height:300px" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title" style="overflow:hidden ;
            height: 50px;">${product.title}</h5>
            <p class="card-text" style="overflow:hidden ;
            height: 90px;">${product.description}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
      </div>
        `;
  });
}

get();


// async function get() {
//   const response = await fetch("https://fakestoreapi.com/products");
//   const data = await response.json();
//   console.log(data);
//   for(var i = 0; i < data.length; i++) {
//         content.innerHTML += `
//       <div class="card shadow" style="width: 18rem;">
//         <img class="card-img-top" src="${data[i].image}" style="height:300px" alt="Card image cap">
//           <div class="card-body">
//             <h5 class="card-title" style="overflow:hidden ;
//             height: 50px;">${data[i].title}</h5>
//             <p class="card-text" style="overflow:hidden ;
//             height: 90px;">${data[i].description}</p>
//             <a href="#" class="btn btn-primary">Go somewhere</a>
//           </div>
//       </div>
//         `;
//   }
// }


// async function get() {
//   const response = await fetch("https://fakestoreapi.com/products");
//   const data = await response.json();
//   console.log(data);
//   for(var i in data) {
//         content.innerHTML += `
//       <div class="card shadow" style="width: 18rem;">
//         <img class="card-img-top" src="${data[i].image}" style="height:300px" alt="Card image cap">
//           <div class="card-body">
//             <h5 class="card-title" style="overflow:hidden ;
//             height: 50px;">${data[i].title}</h5>
//             <p class="card-text" style="overflow:hidden ;
//             height: 90px;">${data[i].description}</p>
//             <a href="#" class="btn btn-primary">Go somewhere</a>
//           </div>
//       </div>
//         `;
//   }
// }