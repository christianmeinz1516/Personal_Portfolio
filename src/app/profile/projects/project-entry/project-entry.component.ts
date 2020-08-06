import { Component, Input } from '@angular/core';

export class ProjectEntry {
  public title: string;
  public skillType: string;
  public skillDescription: string[];
  public description: string;

  public projectUrl: string;
  public imageUrl: string;

  constructor( 
    title: string,  
    skillType: string,
    skillDescription: string[],
    description: string,
    imageUrl: string, 
    projectUrl?: string) { 
      this.title = title;
      this.skillType = skillType;
      this.skillDescription = skillDescription;
      this.description = description;
      this.imageUrl = imageUrl;
      this.projectUrl = projectUrl;
   }
}

@Component({
  selector: 'app-project-entry',
  templateUrl: './project-entry.component.html',
  styleUrls: ['./project-entry.component.css']
})
export class ProjectEntryComponent {
  @Input('app-project-entry') data: ProjectEntry;

}
