import { Injectable } from '@angular/core';
import { IItemsData } from '../interfaces/IItem';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  itemsData: Array<IItemsData> = [
    { id: 0, text: 'todo0' },
    { id: 1, text: 'todo1' },
    { id: 2, text: 'todo2' },
  ];
  currentID = this.itemsData.length;

  // constructor(private HttpClient: HttpClient) {}

  addNewItem(inputText: string) {
    if (inputText !== '') {
      // this.HttpClient.post('/', { id: this.currentID, text: inputText })
      //   .pipe()
      //   .subscribe();
      this.itemsData.push({ id: this.currentID, text: inputText });
      this.currentID++;
    }
  }

  deleteItem(id: number) {
    const index = this.itemsData.findIndex((el) => el.id === id);
    this.itemsData.splice(index, 1);
  }

  deleteAll() {
    this.itemsData.splice(0, this.itemsData.length);
  }
}
