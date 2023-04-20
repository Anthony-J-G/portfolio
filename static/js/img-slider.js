const track = document.getElementById("im-track");
const container = document.getElementById("img-slider-container")
const body = document.getElementsByTagName("body");

const min_slide = 500;
const max_slide = -1800;
const slide_speed = -700;

var is_down = false;

// Add event listeners for both touch and mouse events
container.addEventListener('mousedown', handleBeginInteract);
container.addEventListener('touchstart', handleBeginInteract);

container.addEventListener('mouseup', handleEndInteract);
container.addEventListener('touchstart', handleEndInteract);


// Define the event handler function
// Mouse/Tap Down Event
function handleBeginInteract(event) {
  // Prevent the default behavior for the event
  event.preventDefault();

  // Determine the type of event (touch or mouse)
  var event_type = event.type == 'touchstart' ? 'touch' : 'mouse';

  // Get the position of the event relative to the element
  var x_pos = event_type == 'touch' ? event.touches[0].clientX : event.clientX;

  is_down = true;
  container.style.cursor = "grabbing"
  track.dataset.mouseDownAt = x_pos
  console.log(x_pos)
}


// Mouse/Tap Down Event
function handleEndInteract(event) {
  // Prevent the default behavior for the event
  event.preventDefault();

  // Determine the type of event (touch or mouse)
  var event_type = event.type == 'touchstart' ? 'touch' : 'mouse';

  is_down = false;
  track.dataset.mouseDownAt = "0";
  track.dataset.prevPercentage = track.dataset.percentage;
  container.style.cursor = "grab"
}



// Mouse Up Event
window.onmouseup = e => {

}

// Mouse Move Event
window.onmousemove = e => {
    if(!is_down) return; // If mouse isn't clicked then exit early

    // Calculate the distance the mouse has moved since being clicked
    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX;
    const maxDelta = (window.innerWidth) / 2;

    const percentage = (mouseDelta / maxDelta) * slide_speed;

    // Calculate how much total distance the cursor should have moved
    var nextPercentage = parseFloat(track.dataset.prevPercentage) + percentage;

    // Clamp from 0 to -100
    nextPercentage = Math.min(nextPercentage, min_slide);
    nextPercentage = Math.max(nextPercentage, max_slide);

    track.dataset.percentage = nextPercentage;
    
    // Run animation for slider panning
    track.animate(
        { transform: `translate(${nextPercentage}%, -50%)` },
        { duration: 1200, fill: "forwards" }
    );
    

}
