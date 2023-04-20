import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'saw-ltb',
  templateUrl: './ltb.component.html',
  styleUrls: ['./ltb.component.css']
})
export class LtbComponent implements OnChanges {
  @Input() label = '';
  @Output() click = new EventEmitter<string>();

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  onClick(): void {
    this.click.emit('Recherche en cours ...');
  }
}
