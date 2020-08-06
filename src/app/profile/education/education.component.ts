import { Component, OnInit } from '@angular/core';
import { CourseComponent, Course } from './course/course.component';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  courses: Course[];

  constructor() { 
    this.courses = [
      new Course("Data Structures and Algorithm Analysis", "CSSE 230", ["Java"], "This course reinforces and extends students’ ability to independently design, develop, and debug object-oriented software that uses correct, clear, and efficient algorithms and data structures. Students study and implement classical data structures such as list, stack, queue, tree, priority queue, hash table, graph, set, and dictionary. Formal efficiency analysis is used to evaluate the complexity of algorithms for these data structures. Students gain proficiency in writing recursive methods. Students design and implement software individually, in small groups, and in a challenging multi-week team project.several basic topics regarding simple cyber security techniques.", "assets/images/intro_green.jpg", "B", "https://www.rose-hulman.edu/academics/course-catalog/current/programs/Computer%20Science/csse-230.html"),
      new Course("Machine Learning", "MA 415 / CSSE 490", ["Python, Jupyter Notebook"], " An introduction to machine learning. Topics include: error metrics, accuracy vs interpretability trade-off, feature selection, feature engineering, bias-variance trade-off, under-fitting vs. overfitting, regularization, cross-validation, the bootstrap method, the curse of dimensionality and dimensionality reduction using the singular value decomposition. Both parametric and nonparametric methods are covered including: k-nearest neighbors, linear and logistic regression, decision trees and random forests, and support vector machines.", "assets/images/intro_green.jpg", "B+", "https://www.rose-hulman.edu/academics/course-catalog/current/programs/Mathematics/ma-415.html"),
      new Course("Deterministic Models in Operations Research", "MA 444", ["Python, Algorithms, Gurobi"], "Formulation of various deterministic problems as mathematical optimization models and the derivation of algorithms to solve them. Optimization models studied include linear programs, integer programs, and various network models. The course will emphasize modeling, algorithm design, and the associated mathematical theory, e.g. polyhedral, duality, convex analysis. Some computer programming is expected.", "assets/images/intro_green.jpg", "B+", "https://www.rose-hulman.edu/academics/course-catalog/current/programs/Mathematics/ma-444.html"),
      new Course("Operating Systems", "CSSE 332", ["C, Shell"], "Students learn fundamental concepts of modern operating systems by studying how and why operating systems have evolved. Topics include CPU scheduling, process synchronization, memory management, file systems, I/O systems, privacy and security, and performance evaluation. Students implement parts of an operating system as a means of exploring the details of some of these topics.", "assets/images/intro_green.jpg", "A", "https://www.rose-hulman.edu/academics/course-catalog/current/programs/Computer%20Science/csse-332.html")
    ];
  }

  ngOnInit(): void {
  }

}
