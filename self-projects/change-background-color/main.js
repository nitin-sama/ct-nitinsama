// For colors

const btn = document.getElementById('btn')
const setColor = document.getElementById('color-name')

const colorSet = ["Red", "Blue", "Green", "Yellow", "Purple", "Gray", "Violet"]


btn.addEventListener("click", function(){
    var randomNumber = Math.floor((Math.random() * 6));
    setColor.innerText = colorSet[randomNumber]
    document.body.style.backgroundColor = colorSet[randomNumber]
})

// For hex colors


