import { HashtagItem } from './../../hashtags/hashtag/models/index';
import { Component } from '@angular/core';

@Component({
  selector: 'saw-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  onSearchClick(item: string): void {
    console.time('search');
    console.info(item);
    console.timeEnd('search');
  }

  onSearchHash(item: HashtagItem): void {
    console.info(item);
  }
}
