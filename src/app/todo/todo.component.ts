import { Component } from '@angular/core';
import { IItemsData } from '../interfaces/IItem';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent {
  subTitle2 = 'ToDo';

  inputText = '';

  itemsData: Array<IItemsData>;

  constructor(private itemService: ItemService) {
    this.itemService = itemService;
    this.itemsData = this.itemService.itemsData;
  }

  addNewItem() {
    if (this.inputText !== '') {
      this.itemService.addNewItem(this.inputText);
      this.inputText = '';
    }
  }

  deleteItem(id: number) {
    this.itemService.deleteItem(id);
  }

  deleteAll() {
    this.itemService.deleteAll();
  }
}
