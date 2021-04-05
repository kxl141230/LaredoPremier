import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { CoachespageComponent } from './coachespage/coachespage.component';

const routes: Routes = [
  { path: 'coachespage-component', component: CoachespageComponent },
  { path: 'homepage-component', component: HomepageComponent },
  { path: '', redirectTo: 'homepage-component', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
