import { Component, AfterViewInit, ViewChild, ViewContainerRef, ElementRef } from '@angular/core';
import { LayoutComponent } from './layout/layout.component';


@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.css']
})
export class TerminalComponent implements AfterViewInit {
  @ViewChild('terminalBorder') TerminalContainer!: ElementRef;
  terminalOpen: boolean = true;

  lerp(start: number, end: number, time: number): number {
    return start * (1.0 - time) + (end * time);
  }

  // Animation Set Up for "Terminal Opening"
  // Used for Border Animation
  heightRange: number[] = [0, 80];
  widthRange: number[] = [0, 89];
  topRange: number[] = [40, 0];

  // Current Height and Top positioning
  height: number  = this.heightRange[0];
  top: number     = this.topRange[0];

  // Animation Timings
  private bootTimeMax: number = 40; // ms
  private bootTimeLeft: number = this.bootTimeMax;
  private bootInterval: any;

  // Layout Settings
  private layoutTimeReset: number = 250;
  private layoutTimeLeft: number = this.layoutTimeReset;
  private layoutCheckInterval: any;

  @ViewChild('container', { read: ViewContainerRef })
  layoutContainer!: ViewContainerRef;
  

  constructor(public viewContainerRef: ViewContainerRef) {}


  ngAfterViewInit(): void {
    /* 
      Parts of the terminal that need to run:
          - Terminal Opening
          - Idle Screen
          - Type Content Title Onto the Screen
          - Load Project Browser
    */

    // On Initial Page load, should the Terminal Opening Animation Load?
    if (!this.terminalOpen) {
      this.TerminalContainer.nativeElement.style.height = `${this.heightRange[0]}%`;
      this.TerminalContainer.nativeElement.style.width  = `${this.widthRange[0]}%`;
      this.TerminalContainer.nativeElement.style.top    = `${this.topRange[0]}%`;

      this.terminalBoot(false); // Start animation timer
    }

    this.mountLayout();
  }


  // Check if the Terminal has finished booting every 'checkDelta' seconds
  private mountLayout(): void {
    this.layoutCheckInterval = setInterval(() => {
      if (ViewContainerRef == null) {
        console.error("View Container Not Found");
        clearInterval(this.layoutCheckInterval);
      }
      // If the terminal is finished opening...
      if (this.terminalOpen) {
        // End this interval and load content
        clearInterval(this.layoutCheckInterval);
        const layout = new LayoutComponent();
        this.layoutContainer.clear();
        const componentRef = this.layoutContainer.createComponent<LayoutComponent>(LayoutComponent);
        console.log("Terminal Loaded, Packing Content");
      }
      // If time has run out and terminal is closed...
      if (this.layoutTimeLeft == 0) {
        // Reset Clock
        this.layoutTimeLeft = this.layoutTimeReset;
      } else { // Otherwise...
        // Decrement Timer
        this.layoutTimeLeft--;
      }


    }, this.layoutTimeReset);
    
  }


  terminalBoot(repeat: boolean): void {
    // Animation Timing Clock
    this.bootInterval = setInterval(() => {
      // When clock ends, end timer and clean up
      if (this.bootTimeLeft == 0 && !repeat) { 
        clearInterval(this.bootInterval);
        this.terminalOpen = true;
        
        return;
      }
      // ... unless repeat is set to true
      if (this.bootTimeLeft == 0 && repeat) {
        this.bootTimeLeft = this.bootTimeMax
      }
      
      // Handle Animation Frame
      var percentDone = this.bootTimeLeft / this.bootTimeMax;
      
      this.terminalBootFrame(1 - percentDone);
      this.bootTimeLeft--;

    }, this.bootTimeMax);
  }
  
  terminalBootFrame(t: number): void {
    // Controls each frame of the terminal as it "loads"
    const widthTime = 0.75;
    var widthFactor = t / widthTime;
    widthFactor = Math.min(widthFactor, 1);

    var interpolatedWidth: number  = this.lerp(this.widthRange[0], this.widthRange[1], widthFactor);
    this.TerminalContainer.nativeElement.style.width  = `${interpolatedWidth}%`;

    var interpolatedHeight: number = this.lerp(
      this.heightRange[0], this.heightRange[1], (t > widthTime ? 1 : 0) * t
    );
    var interpolatedTop: number = this.lerp(
      this.topRange[0], this.topRange[1], (t > widthTime ? 1 : 0) * t
    );

    this.TerminalContainer.nativeElement.style.height = `${interpolatedHeight}%`;    
    this.TerminalContainer.nativeElement.style.top    = `${interpolatedTop}%`;
  }

}
