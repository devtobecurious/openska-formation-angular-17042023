import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HashtagComponent } from './hashtag/hashtag.component';
import { ListHashtagsComponent } from './list-hashtags/list-hashtags.component';


@NgModule({
  declarations: [
    ListHashtagsComponent
  ],
  imports: [
    CommonModule,
    HashtagComponent
  ],
  exports: [
    ListHashtagsComponent
  ]
})
export class HashtagsModule { }
