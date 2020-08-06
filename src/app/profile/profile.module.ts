import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { FormsModule } from '@angular/forms';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import { ProfileComponent } from './profile.component';
import { NgxSpinnerModule } from "ngx-spinner";

import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { EducationComponent } from './education/education.component';
import { CourseComponent } from './education/course/course.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectEntryComponent } from './projects/project-entry/project-entry.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SnotifyModule,
    NgxSpinnerModule,
    BrowserAnimationsModule
  ],

  declarations: [
    ProfileComponent,
    SidebarComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    EducationComponent,
    ProjectsComponent,
    ProjectEntryComponent,
    WelcomeComponent,
    CourseComponent,
  ],

  providers: [
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults},
    SnotifyService,
  ]
})
export class ProfileModule { }
