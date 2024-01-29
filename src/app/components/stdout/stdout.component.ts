import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stdout',
  templateUrl: './stdout.component.html',
  styleUrls: ['./stdout.component.css']
})
export class StdoutComponent {

  @Input() text: string = "";
  @Input() animSpeed: number = 0;
  digest: string = "";
  cursor: string = "|";
  private isComplete = false;

  constructor() {
    if (this.text == undefined) {
      this.text = "";
    }

    this.typeDigest()
    this.alternateCursor()
  }


  typeDigest() {
    var i = 0;
    setInterval(() => {
      this.isComplete = this.digest === this.text
      if (this.isComplete) {
        return
      }

      this.digest = this.digest.concat(this.text[i])
      i+=1
      
    }, 50); // Interval in milliseconds

  }

  restart() {
    this.digest = "";
    this.isComplete = false
  }

  alternateCursor() {
    var i = 0;
    setInterval(() => {
      // Function to run on each interval
      if ((i % 2) == 0) {
        this.cursor = "|"
      } else {
        this.cursor = " "
      }
      i += 1;
      
    }, 500); // Interval in milliseconds
  }



}
