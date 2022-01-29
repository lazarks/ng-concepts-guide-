import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Comp1Component } from './components/comp1/comp1.component';
import { Comp2Component } from './components/comp2/comp2.component';

const routes: Routes = [
  { path: '', redirectTo: 'comp1', pathMatch: 'full' },
  { path: 'comp1', component: Comp1Component },
  { path: 'comp2', component: Comp2Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
