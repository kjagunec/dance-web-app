import { Component } from '@angular/core';
import {NavService} from '../services/nav-service';
import {Form} from '../form/form';

@Component({
  selector: 'app-courses',
  imports: [
    Form
  ],
  templateUrl: './courses.html',
  styleUrl: './courses.css',
})
export class Courses {

  constructor(private navService: NavService) { }

  ngOnInit() {
    this.navService.checkCurrentRoute()
  }

}
