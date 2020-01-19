import { Component, OnInit } from '@angular/core';
import {CoursesService} from './courses.service';

// Selector Info
// <Sample>                   = selector: 'sample'
// <div class="sample"></div> = selector: '.sample'
// <div id="sample"></div>    = selector: '#sample'
@Component({
  selector: 'courses',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
  // template: '<h2>{{ "Title: " + title  getTitle() }}</h2>'
})
export class CourseComponent implements OnInit {
  title = 'List of courses';
  courses;

  // Initialize an object
  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }

  getTitle() {
    return this.title;
  }

  ngOnInit() {
  }

}
