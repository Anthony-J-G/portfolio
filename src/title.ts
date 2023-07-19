export enum Platform {
    DESKTOP = 0 << 0,
    MOBILE  = 1 << 0,
    TABLET  = 1 << 1
}



export class TitleAnimation {
    currentFrame: number
    container: HTMLDivElement
    titleContent: HTMLDivElement


    constructor() {
        this.currentFrame = 0;

        this.container = document.createElement("div");
        this.titleContent = document.createElement("div");
        
        this.container.className = "title-container";

        this.titleContent.id = "title-content"
        this.titleContent.textContent = "Loading...";

        this.container.appendChild(this.titleContent);

    }


    anim_frame() {
        const fruits: Array<string> = ["_", "/", "|", "\\"];
        const ind: number = 0 % fruits.length;
        const output: string = `Loading... ${fruits[ind]}`

        console.log(output)
        this.currentFrame += 1;

    }


    render(format: Platform) {
        const rootDiv = document.getElementById("main-content");
        
        // Attach the container to the HTML root
        rootDiv?.appendChild(this.container); 
    }


    delete() {

    }


}