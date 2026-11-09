import { Component, ChangeDetectionStrategy } from '@angular/core';
import {NavService} from '../services/nav-service';

@Component({
  selector: 'app-dances',
  imports: [],
  templateUrl: './dances.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './dances.css',
})
export class Dances {

  constructor(private navService: NavService) { }

  ngOnInit() {
    this.navService.checkCurrentRoute()
  }

}
