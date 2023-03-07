import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss'],
})
export class ItemListComponent {
  @Input()
  items: Array<string> = [];

  @Output()
  onDelete = new EventEmitter();
  // onEdit = new EventEmitter<string>();
}
