import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.css']
})
export class TerminalComponent implements AfterViewInit {

  @ViewChild('container') TerminalContainer!: ElementRef;

  heightInterval: number[] = [0, 80];
  widthInterval: number[] = [0, 89];
  topInterval: number[] = [40, 0];

  height: number  = this.heightInterval[0];
  top: number     = this.topInterval[0];

  lerp(start: number, end: number, time: number): number {
    return start * (1.0 - time) + (end * time);
  }

  // Animation Set Up for "Terminal Opening"
  private maxTime: number = 40; // ms
  private timeLeft: number = this.maxTime;
  private interval: any;
  private borderRendered: boolean = false;

  startTimer(repeat: boolean): void {
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        if (repeat) {
          this.timeLeft = this.maxTime;
        } else {
          this.pauseTimer()
          this.borderRendered = true;
        }
        
      }
      var percentDone = this.timeLeft / this.maxTime;

      this.animateBorder(1 - percentDone);

    }, this.maxTime);
  }


  pauseTimer() {
    clearInterval(this.interval);
  }


  ngAfterViewInit(): void {
      this.TerminalContainer.nativeElement.style.height = `${this.heightInterval[0]}%`;
      this.TerminalContainer.nativeElement.style.width  = `${this.widthInterval[0]}%`;
      this.TerminalContainer.nativeElement.style.top    = `${this.topInterval[0]}%`;

      this.startTimer(false);
  }
  
  animateBorder(t: number): void {
    const widthTime = 0.35;
    var widthFactor = t / widthTime;
    widthFactor = Math.min(widthFactor, 1);

    var interpolatedWidth: number  = this.lerp(this.widthInterval[0], this.widthInterval[1], widthFactor);
    this.TerminalContainer.nativeElement.style.width  = `${interpolatedWidth}%`;


    var interpolatedHeight: number = this.lerp(
      this.heightInterval[0], this.heightInterval[1], (t > widthTime ? 1 : 0) * t
    );
    var interpolatedTop: number = this.lerp(
      this.topInterval[0], this.topInterval[1], (t > widthTime ? 1 : 0) * t
    );

    this.TerminalContainer.nativeElement.style.height = `${interpolatedHeight}%`;    
    this.TerminalContainer.nativeElement.style.top    = `${interpolatedTop}%`;
  }

}
