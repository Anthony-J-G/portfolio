export var Platform;
(function (Platform) {
    Platform[Platform["DESKTOP"] = 0] = "DESKTOP";
    Platform[Platform["MOBILE"] = 1] = "MOBILE";
    Platform[Platform["TABLET"] = 2] = "TABLET";
})(Platform || (Platform = {}));
export class TitleAnimation {
    currentFrame;
    container;
    titleContent;
    constructor() {
        this.currentFrame = 0;
        this.container = document.createElement("div");
        this.titleContent = document.createElement("div");
        this.container.className = "title-container";
        this.titleContent.id = "title-content";
        this.titleContent.textContent = "Loading...";
        this.container.appendChild(this.titleContent);
    }
    anim_frame() {
        const fruits = ["_", "/", "|", "\\"];
        const ind = 0 % fruits.length;
        const output = `Loading... ${fruits[ind]}`;
        console.log(output);
        this.currentFrame += 1;
    }
    render(format) {
        const rootDiv = document.getElementById("main-content");
        // Attach the container to the HTML root
        rootDiv?.appendChild(this.container);
    }
    delete() {
    }
}
