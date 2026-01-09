import {Component, Input} from '@angular/core';
import {FormModel} from '../models/form-model';

@Component({
  selector: 'app-form',
  imports: [],
  templateUrl: './form.html',
  styleUrl: './form.css',
})
export class Form {

  @Input() form!: FormModel;

}
