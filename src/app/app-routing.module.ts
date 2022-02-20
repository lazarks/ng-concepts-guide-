import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Comp1Component } from './components/comp1/comp1.component';
import { Comp2Component } from './components/comp2/comp2.component';
import { NestedRoutesComponent } from './components/nested-routes/nested-routes.component';
import { Ruta1Component } from './components/nested-routes/ruta1/ruta1.component';
import { Ruta2Component } from './components/nested-routes/ruta2/ruta2.component';
import { ParentChildComponent } from './components/parent-child/parent-child.component';

const routes: Routes = [
  { path: '', redirectTo: 'comp1', pathMatch: 'full' },
  { path: 'comp1', component: Comp1Component },
  { path: 'comp2', component: Comp2Component },
  { path: 'parentChild', component: ParentChildComponent },
  {
    path: 'nestedRoutes',
    component: NestedRoutesComponent,
    children: [
      { path: 'ruta1', component: Ruta1Component },
      { path: 'ruta2', component: Ruta2Component },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
