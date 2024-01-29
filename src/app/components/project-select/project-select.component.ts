import { Component } from '@angular/core';

import * as data from 'src/assets/projects.json';

const ICON_PATH: string = "assets/icons/";
const ICONS: any = {
  "Angular": "Angular.png",
  "C++": "Cpp.png",
  "Unreal Engine": "Unreal Engine.png",
  "Python": "Python.png",
  "Django": "django.png",
  "SQLite": "SQLite.png",
  "TypeScript": "TypeScript.png",
  "HTML/CSS": "HTML-CSS.png"
}


@Component({
  selector: 'app-project-select',
  templateUrl: './project-select.component.html',
  styleUrls: ['./project-select.component.css']
})
export class ProjectSelectComponent {
   // Constants
   SPLASH_PATH: string = "assets/splashes/";

   index: number = 0;
   projects: any[] = data;
   currentProject: any = this.projects[0];
   currentTags: string[] = [];
   
   private isHovered: boolean = false;
 
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

  onClick(): void {
    this.isHovered = false
  }

  onMouseEnter(): void {
    this.isHovered = true;
  }

  onMouseLeave(): void {
    this.isHovered = false;
  }

  getHovered(): boolean {
    return this.isHovered;
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
