import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IItemsData } from 'src/app/interfaces/IItem';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent {
  @Input()
  item: IItemsData = { id: 0, title: '', editable: false, completed: false };

  @Output()
  onDelete = new EventEmitter();

  @Output()
  onEdit = new EventEmitter();

  @Output()
  onCancel = new EventEmitter();

  @Output()
  onEditSubmit = new EventEmitter();

  @Output()
  toggleDone = new EventEmitter();
}
