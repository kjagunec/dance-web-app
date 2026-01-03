import { Routes } from '@angular/router';
import {Main} from './main/main';
import {Dances} from './dances/dances';

export const routes: Routes = [
  { path: '', component: Main },
  { path: 'plesovi', component: Dances},
];
