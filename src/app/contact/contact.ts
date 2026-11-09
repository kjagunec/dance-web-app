import { Component, ChangeDetectionStrategy } from '@angular/core';
import {NavService} from '../services/nav-service';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './contact.css',
})
export class Contact {

  constructor(private navService: NavService) { }

  ngOnInit() {
    this.navService.checkCurrentRoute()
  }

}
