//Grap the paragraph element 
const jokes = document.querySelector(".jokes");
//display the jokes everytime when page loads..
document.addEventListener('DOMContentLoaded' , funnyFun());


//fetch the data from the api and display the jokes using .then method..
function funnyFun(){
  fetch("https://api.chucknorris.io/jokes/random")
  .then((response) => response.json())
  .then(Jokes => jokes.innerHTML = Jokes.value);
}

//same process By async and await function... 
// async function funnyFun(){
//   const data = await fetch("https://api.chucknorris.io/jokes/random");
//   const Jokes = await data.json();
//   console.log(Jokes.value);
//   jokes.innerHTML = Jokes.value;
// }