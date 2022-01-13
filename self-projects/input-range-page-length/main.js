var slider = document.getElementById("myRange")
var body = document.body,
    html = document.documentElement;

    let scrollHeight = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
      );
      
slider.max = scrollHeight - document.documentElement.clientHeight

window.addEventListener("scroll", function(event){   
    scrollPosition = document.body.scrollTop || document.documentElement.scrollTop
    console.log(scrollPosition)
    slider.value = scrollPosition
})