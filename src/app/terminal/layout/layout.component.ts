import { Component } from '@angular/core';
import { min } from 'rxjs';
import * as data from 'src/assets/projects.json';

const ICON_PATH: string = "assets/icons/";
const ICONS: any = {
  "Angular": "angular-icon-logo-png-transparent-3794980330.png",
  "C++": "C-Logo.png",
  "Unreal Engine": "UnrealEngineIcon.png",
  "Python": "570-5708783_logo-python-python-logo-clipart.png",
  "Django": "topic_icon_django-tutorials_44346a.png",
  "SQLite": "SQLite_Vector_logo.png",
  "TypeScript": "typescript_logo-1229761782.png"
}


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  // Constants
  SPLASH_PATH: string = "assets/splashes/";

  index: number = 0;
  projects: any[] = data;
  currentProject: any = this.projects[0];
  currentTags: string[] = [];

  constructor() {
    this.updateProject();
  }

  onSelect(t: number) {
    var count = (t + this.index);
    if (count < 0) {
      count += this.projects.length;
    }
    this.index = count % this.projects.length;
    this.updateProject()

  }

  updateProject(): void {
    this.currentProject = this.projects[this.index];
    this.currentTags = [];
    for (let toolkit of this.currentProject.toolkits) {
      const icon = ICON_PATH + ICONS[toolkit]
      this.currentTags.push(icon)
    }


  }

}
