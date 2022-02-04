const tabItems = document.querySelectorAll('.tab-item')
const tabContentItems = document.querySelectorAll('.tab-content-item')

//select tab content
function selectItem(e){
    removeBorder();
    removeShow();
    //add border to current tab
    this.classList.add('tab-border');
    //grab item from dom
    const tabContentItem = document.querySelector(`#${this.id}-content`);
    tabContentItem.classList.add('show');
}

function removeBorder(){
    tabItems.forEach(item=> item.classList.remove('tab-border'));
}

function removeShow(){
    tabContentItems.forEach(item=> item.classList.remove('show'));
    
}

//listen for click
tabItems.forEach(item=> item.addEventListener('click', selectItem));

const button1= document.getElementById("tab-1");
const button2= document.getElementById("tab-2");
const button3= document.getElementById("tab-3");
const arrow1 = document.getElementById('arrow-item1');
const arrow2 = document.getElementById('arrow-item2');
const arrow3 = document.getElementById('arrow-item3');



button1.addEventListener('click', ()=>{
    arrow1.classList.add('show');
    arrow2.classList.remove('show');
    arrow3.classList.remove('show');
    button1.classList.add('tab-border');
    button1.classList.remove('tab-border');
    button1.classList.remove('tab-border');

})

button3.addEventListener('click', ()=>{
    arrow1.classList.remove('show');
    arrow2.classList.add('show');
    arrow3.classList.remove('show');
    
    button1.classList.remove('tab-border');
    button1.classList.add('tab-border');
    button1.classList.remove('tab-border');
})

button2.addEventListener('click', ()=>{
    arrow1.classList.remove('show');
    arrow2.classList.remove('show');
    arrow3.classList.add('show');

    button1.classList.remove('tab-border');
    button1.classList.remove('tab-border');
    button1.classList.add('tab-border');
})