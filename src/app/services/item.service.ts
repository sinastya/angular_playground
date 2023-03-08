import { Injectable } from '@angular/core';
import { IItemsData } from '../interfaces/IItem';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  itemsData: Array<IItemsData> = [
    { id: 0, text: 'todo0' },
    { id: 1, text: 'todo1' },
    { id: 2, text: 'todo2' },
  ];
  currentID = this.itemsData.length - 1;

  addNewItem(inputText: string) {
    if (inputText !== '') {
      this.itemsData.push({ id: this.currentID, text: inputText });
      this.currentID++;
    }
  }

  deleteItem(id: number) {
    this.itemsData = this.itemsData.filter((item) => item.id !== id);
  }

  deleteAll() {
    this.itemsData = [];
  }
}
