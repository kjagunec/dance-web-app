import { Component } from '@angular/core';
import {NavService} from '../services/nav-service';
import {NgClass} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-nav',
  imports: [
    NgClass,
    RouterLink
  ],
  templateUrl: './nav.html',
  styleUrl: './nav.css',
})
export class Nav {

  currentRoute : string = '';

  constructor(private navService: NavService) { }

  ngOnInit() {
    this.navService.getCurrentRoute().subscribe(route => { this.currentRoute = route;
      console.log(this.currentRoute);});
    this.navService.checkCurrentRoute();
  }

}
