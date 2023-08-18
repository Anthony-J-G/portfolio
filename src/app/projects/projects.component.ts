import { Component } from '@angular/core';


class Project {

  prj_name: string;

  constructor(project_name: string) {
    this.prj_name = project_name;
  }

}


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  items: string[] = ["1", "2"];


}
