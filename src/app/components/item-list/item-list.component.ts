import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IItemsData } from 'src/app/interfaces/IItem';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss'],
})
export class ItemListComponent {
  @Input()
  items: Array<IItemsData> = [];

  @Output()
  onDelete = new EventEmitter<number>();
  // onEdit = new EventEmitter<string>();
}
