import {Component, Input, ChangeDetectionStrategy} from '@angular/core';
import {FormModel} from '../models/form-model';

@Component({
  selector: 'app-form',
  imports: [],
  templateUrl: './form.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './form.css',
})
export class Form {

  @Input() form!: FormModel;

}
