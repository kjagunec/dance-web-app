import { Component, ChangeDetectionStrategy } from '@angular/core';
import {NavService} from '../services/nav-service';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './about.css',
})
export class About {

  constructor(private navService: NavService) { }

  ngOnInit() {
    this.navService.checkCurrentRoute()
  }

}
