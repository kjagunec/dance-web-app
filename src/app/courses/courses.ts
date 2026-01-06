import { Component } from '@angular/core';
import {NavService} from '../services/nav-service';

@Component({
  selector: 'app-courses',
  imports: [],
  templateUrl: './courses.html',
  styleUrl: './courses.css',
})
export class Courses {

  constructor(private navService: NavService) { }

  ngOnInit() {
    this.navService.checkCurrentRoute()
  }

}
