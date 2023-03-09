import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IEditData, IItemsData } from 'src/app/interfaces/IItem';

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

  @Output()
  onEdit = new EventEmitter<number>();

  @Output()
  onCancel = new EventEmitter();

  @Output()
  onEditSubmit = new EventEmitter<IEditData>();
}
