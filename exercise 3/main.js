let search = document.getElementById("search")
let btn = document.getElementById("searchBtn")
let tbody = document.getElementById("tbody")
let numFound = document.getElementById("num");
let pageDiv = document.getElementById("pageDiv")
search.addEventListener("input", ()=>{
    console.log('hello');
    document.getElementById("tbody").innerHTML = "  ";
    pageDiv.innerHTML =""
})
btn.addEventListener("click", async function f (){ 
    let searchValue = search.value.split(' ').join("+").toString();
    let bookUrl = `http://openlibrary.org/search.json?q=${searchValue}&page=`;
    let response = await fetch(bookUrl);
    let commits = await response.json(); 
    
    numFound.innerText = commits.numFound + " Result Is Find"
    commits.docs.forEach(commit => {
        if(commit.subject !== undefined){
    tbody.innerHTML = tbody.innerHTML + "<tr>" + '<td>'+ commit.title +'</td>' + '<td>'+ (commit.author_name || "Non Information") +'</td>' + '<td>'+ (commit.first_publish_year || 'Non Information') +'</td>'  + '<td>'+ commit.subject.slice(0,5) +'</td>' + "</tr>"
        }
    else{
        tbody.innerHTML = tbody.innerHTML + "<tr>" + '<td>'+ commit.title +'</td>' + '<td>'+ (commit.author_name || "Non Information") +'</td>' + '<td>'+ (commit.first_publish_year || 'Non Information') +'</td>'  + '<td>'+ "Non Information" +'</td>' + "</tr>"
    }
    });
    if(commits.numFound>100){
        for(let i = 0; i<=commits.numFound/100; i++){
            pageDiv.innerHTML = pageDiv.innerHTML + `<button type="button" value="${i+1}" class="pageBtn">`+ (i+1)  +'</button>'
        }
        let pageBtn = document.querySelectorAll('.pageBtn');
        pageBtn.forEach((item) => {
            
            item.addEventListener("click", async function f(){
                document.getElementById("tbody").innerHTML = " "
                bookUrl = `http://openlibrary.org/search.json?q=${searchValue}&page=${item.value}`;
                response = await fetch(bookUrl);
                commits = await response.json();
                commits.docs.forEach(commit => {
                    if(commit.subject !== undefined){
                tbody.innerHTML = tbody.innerHTML + "<tr>" + '<td>'+ commit.title +'</td>' + '<td>'+ (commit.author_name || "Non Information") +'</td>' + '<td>'+ (commit.first_publish_year || 'Non Information') +'</td>'  + '<td>'+ commit.subject.slice(0,5) +'</td>' + "</tr>"
                    }
                else{
                    document.getElementById("tbody").innerHTML = document.getElementById("tbody").innerHTML + "<tr>" + '<td>'+ commit.title +'</td>' + '<td>'+ (commit.author_name || "Non Information") +'</td>' + '<td>'+ (commit.first_publish_year || 'Non Information') +'</td>'  + '<td>'+ "Non Information" +'</td>' + "</tr>"
                }
                });
            })
        })
    }
   
})
