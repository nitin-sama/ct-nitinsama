const reviewItem = document.querySelectorAll('.review-item')
const individualComment = document.querySelectorAll('.reviews__site__individual-comment')
var click = 0;
var active = 0;

function selectItem(e){
    this.classList.toggle('active')
    const tabContentItem = document.querySelector(`#${this.id}-content`)
    
    // When nothing is selected in the beginning
     if(click == 0){
        individualComment.forEach(item=> item.classList.add('hide'))
        tabContentItem.classList.remove('hide')
        click++;
    }
    // Checking which class has active so its correspnding content can be shown
    else if(this.classList[1] == 'active'){
        tabContentItem.classList.remove('hide')
        active++;
    }
    else{
        tabContentItem.classList.add('hide')
        active--;
        // When every tab is disabled after once clicking it
        if(active === -1){
            individualComment.forEach(item=> item.classList.remove('hide'))
            active++;
            click--;
        }
    }
}

//listen for click
reviewItem.forEach(item=> item.addEventListener('click', selectItem))