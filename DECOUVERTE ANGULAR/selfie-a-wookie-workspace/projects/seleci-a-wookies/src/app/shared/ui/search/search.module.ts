import { HashtagsModule } from './../hashtags/hashtags.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { ElletebeModule } from '../elletebe/elletebe.module';



@NgModule({
  declarations: [
    SearchComponent
  ],
  imports: [
    CommonModule,
    ElletebeModule,
    HashtagsModule
  ],
  exports: [
    SearchComponent
  ]
})
export class SearchModule { }
