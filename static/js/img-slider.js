// DEBUG STUFF **REMOVE ME WHEN FUNCTIONAL**



const track = document.getElementById("im-track");
const body = document.getElementsByTagName("body");
var is_down = false;

// Mouse Down Event
window.onmousedown = e => {
    is_down = true;
    track.dataset.mouseDownAt = e.clientX;
}

// Mouse Up Event
window.onmouseup = e => {
    is_down = false;
    track.dataset.mouseDownAt = "0";
    track.dataset.prevPercentage = track.dataset.percentage;

}

// Mouse Move Event
window.onmousemove = e => {
    if(!is_down) return; // If mouse isn't clicked then exit early

    // Calculate the distance the mouse has moved since being clicked
    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX;
    const maxDelta = window.innerWidth / 2;

    const percentage = (mouseDelta / maxDelta) * -100;

    // Calculate how much total distance the cursor should have moved
    var nextPercentage = parseFloat(track.dataset.prevPercentage) + percentage;

    // Clamp from 0 to -100
    nextPercentage = Math.min(nextPercentage, 0);
    nextPercentage = Math.max(nextPercentage, -100);

    track.dataset.percentage = nextPercentage;

    // Run animation for slider panning
    track.animate(
        { transform: `translate(${nextPercentage}%, -50%)` },
        { duration: 1200, fill: "forwards" }
    );
    
    // Run animations for image parallaxes
    for(const image of track.getElementsByClassName("image")) {
        image.animate(
            { objectPosition: `${100 + nextPercentage}% center` },
            { duration: 1200, fill: "forwards" } 
        )
    }
}