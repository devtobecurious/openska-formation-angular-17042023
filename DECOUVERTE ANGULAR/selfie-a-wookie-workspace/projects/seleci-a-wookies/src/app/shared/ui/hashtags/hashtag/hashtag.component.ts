import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HashtagItem } from './models';

@Component({
  selector: 'saw-hashtag',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hashtag.component.html',
  styleUrls: ['./hashtag.component.css']
})
export class HashtagComponent {
  @Input() label = '';
  @Output() click = new EventEmitter<HashtagItem>();

  onClick(): void {
    this.click.emit({ id: 1, label: this.label });
  }
}
