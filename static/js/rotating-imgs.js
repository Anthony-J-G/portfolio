
// Grab Page Elements
const IMG_CONTAINER = document.getElementById("img-slider-container"); 
const IMG_TRACK     = document.getElementById("im-track");
const IMGS          = IMG_TRACK.querySelectorAll("img");
const IMG_TEST      = document.querySelector('.image'); // Used to reference the default image styling



const NUM_IMGS      = IMGS.length;

const DELAY_PERIOD  = 2*1000; // ms;


// Hyperparameters calculated based off of the width of the viewport
let widthAttrs = {
    W_VIEW      : document.documentElement.clientWidth,
    W_IMG       : parseFloat(getComputedStyle(IMG_TEST).getPropertyValue('width')),
    M_L         : parseFloat(getComputedStyle(IMG_TEST).getPropertyValue('margin-left')),
    M_R         : parseFloat(getComputedStyle(IMG_TEST).getPropertyValue('margin-right')),
    W_OBJ       : 0
}
// Calculate Macros
widthAttrs.W_OBJ = widthAttrs.M_L + widthAttrs.W_IMG + widthAttrs.M_R;

// Object that monitors the state of the slider
let state = {
    imgs_index  : 0,
    active_img  : null,
    is_idle     : true,
}


function windowWasResized() {
    widthAttrs.W_VIEW        = document.documentElement.clientWidth;
    widthAttrs.W_IMG         = parseFloat(getComputedStyle(IMG_TEST).getPropertyValue('width'));
    widthAttrs.M_L           = parseFloat(getComputedStyle(IMG_TEST).getPropertyValue('margin-left'));
    widthAttrs.M_R           = parseFloat(getComputedStyle(IMG_TEST).getPropertyValue('margin-right'));

    // Unsused Macros Defined for exhaustivity
    widthAttrs.W_OBJ         = widthAttrs.W_IMG + widthAttrs.M_L + widthAttrs.M_R;

    // Reset the slider state
    if (state.active_img != null) { state.active_img.classList.remove("active")}
    state.is_idle       = true;
    state.imgs_index    = 0;
    state.active_img    = null;

}

window.addEventListener('resize', windowWasResized)



// Cycle through images
setInterval(function() {
    // If the mouse ISN'T idle -> return early
    if (!state.is_idle) { return; }

    if (state.active_img != null) { state.active_img.classList.remove("active")}
    state.active_img = IMGS[state.imgs_index];

    // Run animation for slider panning
    X = calcTranslate(state.imgs_index)

    // Run animation for slider panning
    IMG_TRACK.animate(
        { transform: `translate(${X}px, -50%)` },
        { duration: 800, fill: "forwards" }
    );

    state.active_img.classList.add("active")

    state.imgs_index = (state.imgs_index + 1) % NUM_IMGS;
    
}, DELAY_PERIOD); // Interval time in milliseconds (1000ms = 1 second)


var calcTranslate = function (img_index) {
    var midpoint = widthAttrs.W_VIEW / 2;

    var x = (img_index * -(widthAttrs.W_OBJ)) + midpoint;
    console.log(`viewport width -> ${widthAttrs.W_VIEW}`)
    console.log(`(${img_index} * (${widthAttrs.W_OBJ}) + ${midpoint} = ${x}`)

    return x;

}
