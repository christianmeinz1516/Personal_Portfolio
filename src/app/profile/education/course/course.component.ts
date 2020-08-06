import { Component, Input } from '@angular/core';

export class Course {
  public title: string;
  public courseNumber: string;
  public skills: string[];
  public description: string;
  public grade: string;

  public classUrl: string;
  public imageUrl: string;

  constructor( 
    title: string,  
    courseNumber: string,
    skills: string[],
    description: string,
    imageUrl: string,
    grade?: string,
    classUrl?: string) { 
      this.title = title;
      this.courseNumber = courseNumber;
      this.skills = skills;
      this.description = description;
      this.grade = grade;
      
      this.classUrl = classUrl;
      this.imageUrl = imageUrl;
   }
}


@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {
  @Input('app-course') data: Course;

}
