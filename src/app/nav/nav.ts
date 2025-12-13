import { Component } from '@angular/core';
import {NavService} from '../services/nav-service';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-nav',
  imports: [
    NgClass
  ],
  templateUrl: './nav.html',
  styleUrl: './nav.css',
})
export class Nav {

  currentRoute : string = '';

  constructor(private navService: NavService) { }

  ngOnInit() {
    this.navService.getCurrentRoute().subscribe(route => { this.currentRoute = route });
    this.navService.checkCurrentRoute();
  }

}
