const hex = [0,1,2,3,4,5,6,7,8,9, "A", "B", "C", "D", "E", "F"]

const btn2 = document.getElementById('hex-btn')
const setColor2 = document.getElementById('hex-color')


document.body.style.backgroundColor ="#f1f5f8"

btn2.addEventListener("click", function(){
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    setColor2.innerText = '#' + randomColor
    document.body.style.backgroundColor = '#' + randomColor
})