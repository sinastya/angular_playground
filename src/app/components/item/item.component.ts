import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent {
  @Input()
  itemText: string = '';

  @Output()
  onDelete = new EventEmitter();
  // onEdit = new EventEmitter<string>();
}
