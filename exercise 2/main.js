let select = document.getElementById("dogBreed")
let img = document.getElementById("img")
select.addEventListener("change",async function getDogList(){
    if(select.value !== 0){
        let breedUrl = `https://dog.ceo/api/breed/${select.value}/images/random`;
        let Response = await fetch(breedUrl);
        let commits = await Response.json();
        let dogImg = commits.message;
        img.src = dogImg;
        console.log(img.src)
       
    }
   else{
    img.src = "";
   }
} )

