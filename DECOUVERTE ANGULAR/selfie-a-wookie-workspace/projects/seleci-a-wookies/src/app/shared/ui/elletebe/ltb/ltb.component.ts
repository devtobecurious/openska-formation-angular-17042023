import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

export type SearchType = {
  valeur: string
}

@Component({
  selector: 'saw-ltb',
  templateUrl: './ltb.component.html',
  styleUrls: ['./ltb.component.css']
})
export class LtbComponent implements OnChanges {
  @Input() label = '';
  @Output() click = new EventEmitter<string>();

  searchItem: SearchType = { valeur: '' };

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  onClick(): void {
    this.click.emit(this.searchItem.valeur);
  }
}
