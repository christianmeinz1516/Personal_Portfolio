import { Component, OnInit } from '@angular/core';
import { ProjectEntryComponent, ProjectEntry } from './project-entry/project-entry.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: ProjectEntry[];

  constructor() {
    this.projects = [new ProjectEntry('TestProject', 'Technology', ['Fun', 'Excitement'], 'This is a test to see if projects are working.', 'assets/images/intro_blue.jpg', ''),
                    new ProjectEntry('TestProject2', 'Joke', ['Bad', 'Inappropriate'], 'This is a test to see if projects are working... again.', '', '')];
   }

  ngOnInit(): void {
  }

}
