import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPlanetsComponent } from './list-planets/list-planets.component';
import { ResumePlanetsComponent } from './resume-planets/resume-planets.component';



@NgModule({
  declarations: [
    ListPlanetsComponent,
    ResumePlanetsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListPlanetsComponent
  ]
})
export class PlanetsModule { }
