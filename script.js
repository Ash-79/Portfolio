// Smooth Scroll Animation
var navmenu = document.querySelectorAll('.h-list a');

for(var i=1;i<navmenu.length;i++){
    navmenu[i].addEventListener('click', function(event){
        event.preventDefault();
        var targetElementId = this.textContent.trim().toLowerCase();
        var targetElement = document.getElementById(targetElementId);
        var scroll = setInterval(function(){
            var targetPosition = targetElement.getBoundingClientRect().top;
            if(targetPosition <= 0){
                clearInterval(scroll);
                return;
            }
            window.scrollBy(0, 50);
        }, 50);
        console.log(targetElement);
    })
}

// Skills-Bar Animation
var progressBars = document.getElementsByClassName("inner-skills-div");



function initialiseBar(bar) {
    bar.setAttribute("data-visited", false);
    bar.style.width = 0 + '%';
}

for (var bar of progressBars) {
    initialiseBar(bar);
}



function fillBar(bar) {

    var currentWidth = 0;
    var targetWidth = bar.getAttribute("data-width");
    var interval = setInterval(function () {
        if (currentWidth >= targetWidth) {
            clearInterval(interval);
            return;
        }
        currentWidth++;
        bar.style.width = currentWidth + '%';
    }, 5);

}



// This function uses a for loop for individual progress bars.
function checkScroll() {

    for (let bar of progressBars) {
        var barCoordinates = bar.getBoundingClientRect();
        if ((bar.getAttribute("data-visited") == "false") &&
            (barCoordinates.top <= (window.innerHeight - barCoordinates.height))) {
            bar.setAttribute("data-visited", true);
            fillBar(bar);
        } else if (barCoordinates.top > window.innerHeight) {
            bar.setAttribute("data-visited", false);
            initialiseBar(bar);
        }

    }
}



window.addEventListener("scroll", checkScroll);

// This event fills the progress bars if they are displayed on the screen when the page is loaded.
//window.addEventListener("load", checkScroll);