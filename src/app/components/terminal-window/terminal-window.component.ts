import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-terminal-window',
  templateUrl: './terminal-window.component.html',
  styleUrls: ['./terminal-window.component.css']
})
export class TerminalWindowComponent {
  private stdOut: Array<string> = [
    "Hello"
  ]
  msg: string = this.stdOut[0];

  constructor() {
    this.alternateMsg()
  }

  alternateMsg() {
    var i = 0;
    setInterval(() => {
      this.msg = this.stdOut[i]

      i+=1
      i = i % this.stdOut.length
      
    }, 1000); // Interval in milliseconds
  }

}
