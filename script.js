let employees = [
    {
        image: "./img/customer-0.jpg",
        name: "SANDY",
        rating: "A",
        comment: "aaaaaaaaaaaaaaaaaaaaaaaaa",
    },
    {
        image: "./img/customer-1.jpg",
        name: "AMY",
        rating: "B",
        comment: "bbbbbbbbbbbbbbbbbbbbb",
    },
    {
        image: "./img/customer-2.jpg",
        name: "TYREL",
        rating: "C",
        comment: "ccccccccccccccccccccc",
    },
    {
        image: "./img/customer-3.jpg",
        name: "WANDA",
        rating: "D",
        comment: "ddddddddddddddddddddd",
    },
    {
        image: "./img/customer-4.jpg",
        name: "JOHN",
        rating: "E",
        comment: "eeeeeeeeeeeeeeeeeeeee",
    },
]


let img = document.getElementById("img");
let name = document.getElementById("name");
let rating = document.getElementById("rating");
let comment = document.getElementById("comment");
let span = document.getElementById("span");
let btn = document.querySelector("btn");

let i = 0;
img.src = employees[i].image;
name.innerHTML = employees[i].name;
rating.innerHTML = employees[i].rating;
comment.innerHTML = employees[i].comment;

btn.addEventListener("click", control);

function control(e) {

    img.style.opacity = 0;
    name.style.opacity = 0;
    rating.style.opacity = 0;
    comment.style.opacity = 0;

    setTimeout(() => {
        i = i + e;
        if (i == employees.length) {
            i = 0;
        }
        else if (i < 0) {
            i = employees.length - 1;
        }

        img.src = employees[i].image;
        name.innerHTML = employees[i].name;
        rating.innerHTML = employees[i].rating;
        comment.innerHTML = employees[i].comment;
        img.style.opacity = 1;
        name.style.opacity = 1;
        rating.style.opacity = 1;
        comment.style.opacity = 1;
    }, 500);



}
