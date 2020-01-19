import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import {CoursesService} from './course/courses.service';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {NavBarService} from './nav-bar.service';
import { FacebookLikesComponent } from './facebook-likes/facebook-likes.component';
import { FacebookLikesDirective } from './facebook-likes/facebook-likes.directive';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    NavBarComponent,
    FacebookLikesComponent,
    FacebookLikesDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    CoursesService,
    NavBarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
