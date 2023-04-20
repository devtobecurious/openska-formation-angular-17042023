import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HashtagItem } from '../hashtag/models';

@Component({
  selector: 'saw-list-hashtags',
  templateUrl: './list-hashtags.component.html',
  styleUrls: ['./list-hashtags.component.css']
})
export class ListHashtagsComponent {
  @Input() hashtags: HashtagItem[] = [];
  @Output() searchByHash = new EventEmitter<HashtagItem>();

  clickHashtag(item: HashtagItem): void {
    this.searchByHash.emit(item);
  }
}
