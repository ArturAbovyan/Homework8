async function get(){
let url = 'https://ghibliapi.herokuapp.com/films';
let response = await fetch(url);

let commits = await response.json(); 
commits.forEach(commit => {
    console.log(commit)
});
console.log(commits);
let filmObj = Object.values(commits[0])
console.log(commits[0].title);

}
get()