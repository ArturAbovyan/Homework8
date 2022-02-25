let body = document.getElementById("body");
let desk = document.getElementById("description")
console.log(desk);
async function i(){
let imgUrl = "https://ghibliapi.herokuapp.com/films/2baf70d1-42bb-4437-b551-e5fed5a87abe";
let response = await fetch(imgUrl);
let commits = await response.json(); 
console.log(commits);
body.style.backgroundImage = `url(${commits.image})`
body.innerHTML = body.innerHTML +  `<div><h1>${commits.title}</h1></div>` + `<div><img src="${commits.movie_banner}" id="image" ></div>`  +  `<div id="description">Producer is ${commits.producer}. The film has been released in  ${commits.release_date}. Director was ${commits.director}.</br>${commits.description}</br>Original title was   ${commits.original_title}, Its translate in Romanised is ${commits.original_title_romanised}</div>` 

console.log(desk);
}

i();

