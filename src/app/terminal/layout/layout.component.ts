import { Component } from '@angular/core';
import * as data from 'src/assets/projects.json';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  // Constants
  SPLASH_PATH: string = "assets/splashes/"

  count: number = 0;
  projects: any[] = data;
  currentProject: any = this.projects[0];

  onSelect(t: number) {
    var index = (t + this.count) % this.projects.length;
    this.count = index;
    this.updateProject()

  }

  updateProject(): void {
    this.currentProject = this.projects[this.count];

  }

}
