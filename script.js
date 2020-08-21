let document_body = document.body

let container = document.createElement("div")
container.setAttribute("class","container")

let header_div = document.createElement("div")
header_div.setAttribute("class","container")
header_div.setAttribute("style","text-align:center;")

let header = document.createElement("h1")
header.setAttribute("style","color:black;font-family:times-new-roman;margin-top:20px;font-size:50px;")
header.innerText = "THE PERTINENT TIMES";
header_div.appendChild(header)

let nav_bar = document.createElement("nav")
nav_bar.setAttribute("class","navbar navbar-expand-lg navbar-light bg-light")
nav_bar.setAttribute("style","border-top:1px solid black;border-bottom:1px solid black;")

let navbar_button = document.createElement("button")
navbar_button.setAttribute("class","navbar-toggler")
navbar_button.setAttribute("type","button")
navbar_button.setAttribute("data-toggle","collapse")
navbar_button.setAttribute("data-target","#navbar")
navbar_button.setAttribute("aria-controls","navbar")
nav_bar.appendChild(navbar_button)

let navbar_button_span1 = document.createElement("span")
navbar_button_span1.setAttribute("class","navbar-toggler-icon") 
navbar_button.appendChild(navbar_button_span1)

let nav_bar_div = document.createElement("div")
nav_bar_div.setAttribute("class","collapse navbar-collapse justify-content-center")
nav_bar_div.setAttribute("id","navbar")

let nav_ul = document.createElement("ul")
nav_ul.setAttribute("class","navbar-nav")

let list1 = document.createElement("li")
list1.setAttribute("class","nav-item")
let a1 = document.createElement("a")
a1.setAttribute("class","nav-link btn")
a1.setAttribute("style","color:black;")
a1.innerText = "HOME"
a1.setAttribute("id","home")
a1.addEventListener("click",function(){
    processData("home")
})
list1.appendChild(a1)
nav_ul.appendChild(list1)

let list2 = document.createElement("li")
list2.setAttribute("class","nav-item")
let a2 = document.createElement("a")
a2.setAttribute("class","nav-link btn")
a2.setAttribute("style","color:black;")
a2.innerText = "WORLD"
a2.setAttribute("id","world")
a2.addEventListener("click",function(){
    processData("world")
})
list2.appendChild(a2)
nav_ul.appendChild(list2)

let list3 = document.createElement("li")
list3.setAttribute("class","nav-item")
let a3 = document.createElement("a")
a3.setAttribute("class","nav-link btn")
a3.setAttribute("style","color:black;")
a3.innerText = "POLITICS"
a3.setAttribute("id","politics")
a3.addEventListener("click",function(){
    processData("politics")
})
list3.appendChild(a3)
nav_ul.appendChild(list3)

let list4 = document.createElement("li")
list4.setAttribute("class","nav-item")
let a4 = document.createElement("a")
a4.setAttribute("class","nav-link btn")
a4.setAttribute("style","color:black;")
a4.innerText = "MAGAZINE"
a4.setAttribute("id","politics")
a4.addEventListener("click",function(){
    processData("magazine")
})
list4.appendChild(a4)
nav_ul.appendChild(list4)

let list5 = document.createElement("li")
list5.setAttribute("class","nav-item")
let a5 = document.createElement("a")
a5.setAttribute("class","nav-link btn")
a5.setAttribute("style","color:black;")
a5.innerText = "TECHNOLOGY"
a5.setAttribute("id","technology")
a5.addEventListener("click",function(){
    processData("technology")
})
list5.appendChild(a5)
nav_ul.appendChild(list5)

let list6 = document.createElement("li")
list6.setAttribute("class","nav-item")
let a6 = document.createElement("a")
a6.setAttribute("class","nav-link btn")
a6.setAttribute("style","color:black;")
a6.innerText = "SCIENCE"
a6.setAttribute("id","science")
a6.addEventListener("click",function(){
    processData("science")
})
list6.appendChild(a6)
nav_ul.appendChild(list6)

let list7 = document.createElement("li")
list7.setAttribute("class","nav-item")
let a7 = document.createElement("a")
a7.setAttribute("class","nav-link btn")
a7.setAttribute("style","color:black;")
a7.innerText = "HEALTH"
a7.setAttribute("id","health")
a7.addEventListener("click",function(){
    processData("health")
})
list7.appendChild(a7)
nav_ul.appendChild(list7)

let list8 = document.createElement("li")
list8.setAttribute("class","nav-item")
let a8 = document.createElement("a")
a8.setAttribute("class","nav-link btn")
a8.setAttribute("style","color:black;")
a8.innerText = "SPORTS"
a8.setAttribute("id","sports")
a8.addEventListener("click",function(){
    processData("sports")
})
list8.appendChild(a8)
nav_ul.appendChild(list8)

let list9 = document.createElement("li")
list9.setAttribute("class","nav-item")
let a9 = document.createElement("a")
a9.setAttribute("class","nav-link btn")
a9.setAttribute("style","color:black;")
a9.innerText = "ARTS"
a9.setAttribute("id","arts")
a9.addEventListener("click",function(){
    processData("arts")
})
list9.appendChild(a9)
nav_ul.appendChild(list9)

let list10 = document.createElement("li")
list10.setAttribute("class","nav-item")
let a10 = document.createElement("a")
a10.setAttribute("class","nav-link btn")
a10.setAttribute("style","color:black;")
a10.innerText = "FASHION"
a10.setAttribute("id","fashion")
a10.addEventListener("click",function(){
    processData("fashion")
})
list10.appendChild(a10)
nav_ul.appendChild(list10)

let list11 = document.createElement("li")
list11.setAttribute("class","nav-item")
let a11 = document.createElement("a")
a11.setAttribute("class","nav-link btn")
a11.setAttribute("style","color:black;")
a11.innerText = "FOOD"
a11.setAttribute("id","food")
a11.addEventListener("click",function(){
    processData("food")
})
list11.appendChild(a11)
nav_ul.appendChild(list11)

let list12 = document.createElement("li")
list12.setAttribute("class","nav-item")
let a12 = document.createElement("a")
a12.setAttribute("class","nav-link btn")
a12.setAttribute("style","color:black;")
a12.innerText = "TRAVEL"
a12.setAttribute("id","travel")
a12.addEventListener("click",function(){
    processData("travel")
})
list12.appendChild(a12)
nav_ul.appendChild(list12)

nav_bar_div.appendChild(nav_ul)

let main_div = document.createElement("div")
main_div.setAttribute("class","container")


nav_bar.appendChild(nav_bar_div)
container.appendChild(header_div)
container.appendChild(nav_bar)
document_body.appendChild(container)
document_body.appendChild(main_div)

let api_key = "lqaRp5eCPuLhF1uPzGGkFe9VrsF04pUm"

async function getData(url){
    let data = await fetch(url)
    let arr = await data.json()
    return arr
}

async function processData(section){
	main_div.innerHTML = ""
    let arr = await getData(`https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${api_key}`)
    data = arr["results"]
    for(i of data){
        var container = document.createElement("div");
        container.setAttribute("class","container");
        container.setAttribute("style","margin-top:30px;width:100%;")

        var row = document.createElement("div");
        row.setAttribute("class","row");

        var card = document.createElement("div");
        card.setAttribute("class","card");
        card.setAttribute("style","width:100%;")

        var left = document.createElement("div");
        left.setAttribute("class","col-md-8 col-md-pull-4");

        var sec_card = document.createElement("div");
        sec_card.setAttribute("class","sectioncard");
        sec_card.innerHTML = section.toUpperCase();

        var titlecard = document.createElement("div");
        titlecard.setAttribute("class","titlecard");
        titlecard.innerHTML = i["title"]

        var datecard = document.createElement("div");
        datecard.setAttribute("class","datecard");
        datecard.innerHTML = i["published_date"]

        var abstractcard = document.createElement("div");
        abstractcard.setAttribute("class","abstractcard");
        abstractcard.innerHTML = i["abstract"];

        var continuereading = document.createElement("a");
        continuereading.setAttribute("class","continuereading");
        continuereading.setAttribute("href",`${i["url"]}`)
        continuereading.innerHTML = "Continue reading";

        //append all the elements in the left
        left.append(sec_card,titlecard, datecard, abstractcard, continuereading);

        var right = document.createElement("div");
        right.setAttribute("class","col-md-4 col-md-push-4");
        right.setAttribute("style","text-align:right");

        var thumb_image = document.createElement("img");
        thumb_image.setAttribute("class","img-thumbnail");
        thumb_image.setAttribute("src",`${i["multimedia"][2]["url"]}`);
        console.log(i["multimedia"][1]["url"])

        //append the image in the right
        right.append(thumb_image);

        var innerrow = document.createElement("div");
        innerrow .setAttribute("class","row card-body");

        innerrow.append(left,right)
        card.append(innerrow);
        row.append(card);
        container.append(row);

        main_div.append(container);
    }

}

 document.addEventListener("DOMContentLoaded", function(event) {
   document.getElementById("home").click()
  });


