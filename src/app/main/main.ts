import { Component, ChangeDetectionStrategy } from '@angular/core';
import {NavService} from '../services/nav-service';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-main',
  imports: [
    RouterLink
  ],
  templateUrl: './main.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './main.css',
})
export class Main {

  constructor(private navService: NavService) { }

  ngOnInit() {
    this.navService.checkCurrentRoute()
  }

}
