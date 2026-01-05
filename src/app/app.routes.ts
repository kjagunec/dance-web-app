import { Routes } from '@angular/router';
import {Main} from './main/main';
import {Dances} from './dances/dances';
import {About} from './about/about';

export const routes: Routes = [
  { path: '', component: Main },
  { path: 'plesovi', component: Dances},
  { path: 'o-nama', component: About}
];
