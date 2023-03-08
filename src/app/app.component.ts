import { ItemService } from './services/item.service';
import { Component } from '@angular/core';
import { IItemsData } from './interfaces/IItem';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ToDo_Angular_by801';
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
