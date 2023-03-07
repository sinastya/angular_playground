import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IItemsData } from 'src/app/interfaces/IItem';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent {
  @Input()
  item: IItemsData = { id: 0, text: '' };

  @Output()
  onDelete = new EventEmitter();
  // onEdit = new EventEmitter<string>();
}
