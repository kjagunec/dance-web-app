import { Routes } from '@angular/router';
import {Main} from './main/main';
import {Dances} from './dances/dances';
import {About} from './about/about';
import {Courses} from './courses/courses';
import {Contact} from './contact/contact';

export const routes: Routes = [
  { path: '', component: Main },
  { path: 'plesovi', component: Dances},
  { path: 'o-nama', component: About},
  { path: 'tecajevi', component: Courses},
  { path: 'kontakt', component: Contact}
];
