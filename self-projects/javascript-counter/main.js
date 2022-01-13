var value = document.getElementById('value')
var buttons = document.querySelectorAll('.btn')
var counter = 0


buttons.forEach(function(btn) {
    btn.addEventListener('click', function(e){
        var classes = e.currentTarget.classList
        
        if(classes.contains('increase')){
            ++counter
            value.innerText = counter
        }
        else if(classes.contains('decrease')){
            --counter
            value.innerText = counter

        }
        else{
            counter=0
            value.innerText = counter
        }
        if(counter>0){
            value.style.color= 'green'
        }
        if(counter<0){
            value.style.color= 'red'
        }
    })
})
