import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPlanetsComponent } from './features/planets/list-planets/list-planets.component';

const routes: Routes = [{
  path: 'planets/:id',

  component: ListPlanetsComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
