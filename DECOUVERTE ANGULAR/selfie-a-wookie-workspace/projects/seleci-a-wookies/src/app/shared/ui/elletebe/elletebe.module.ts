import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LtbComponent } from './ltb/ltb.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LtbComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    LtbComponent
  ]
})
export class ElletebeModule { }
