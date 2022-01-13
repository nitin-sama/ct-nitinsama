const reviews = [
    {
        id : 1,
        img : "./img/girl-avatar.png",
        name: "Nitika",
        title : "Graphic Designer",
        about : "Lorem ipsum dolor sit amet consectetur adipisicing elit lorem ipsum dolor sit amet consectetur adipisicing elit. "
    },
    {
        id : 2,
        img : "./img/boy-avatar.png",
        name: "Akshay",
        title : "SEO Analyst",
        about : "Lorem ipsum dolor sit amet consectetur adipisicing  consectetur adipisicing consectetur adipisicing consectetur adipisicing elit."
    },
    {
        id : 3,
        img : "./img/girl-avatar.png",
        name: "Akansha",
        title : "Copy Righter",
        about : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        id : 4,
        img : "./img/boy-avatar.png",
        name: "Nitin Thakur",
        title : "Front-End Developer",
        about : "Lorem ipsum dolor sit amet consectetur ipsum dolor sit adipisicing elit."
    }
]

const img = document.getElementById('image')
const personName = document.getElementById('name')
const title = document.getElementById('title')
const about = document.getElementById('about')

const previousButton = document.querySelector('.prev-button')
const nextButton = document.querySelector('.next-button')

var counter = 0

// Review on first load
window.addEventListener("DOMContentLoaded", function(){
    userChanger(counter)
})

//previous button logic
previousButton.addEventListener('click', function(){
    counter--
    if(counter < 0){
        counter = reviews.length-1
    }
    userChanger(counter)
})

//net button logic
nextButton.addEventListener('click', function(){
    counter++
    if(counter > reviews.length-1){
        counter = 0
    }
    userChanger(counter)
})

// increment or decrement according to the counter passed by the next or previous function
function userChanger(counter){
    item = reviews[counter]
    img.src = item.img
    personName.textContent = item.name
    title.textContent = item.title
    about.textContent = item.about
}