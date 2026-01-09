import { Component } from '@angular/core';
import {NavService} from '../services/nav-service';
import {Form} from '../form/form';
import {FormModel} from '../models/form-model';

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

  begginerCourse: FormModel = new FormModel("Početni tečaj ponedjeljkom", "begginerForm");
  advancedCourse: FormModel = new FormModel("Napredni tečaj srijedom", "advancedForm");
  privateLesson: FormModel = new FormModel("Privatni tečaj", "privateForm");

  ngOnInit() {
    this.navService.checkCurrentRoute()
  }

}
