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

  currentID = 3;

  itemsData: Array<IItemsData> = [
    { id: 0, text: 'todo0' },
    { id: 1, text: 'todo1' },
    { id: 2, text: 'todo2' },
  ];

  inputText = '';

  consoleLog(text: string) {
    console.log(text);
  }

  addNewItem() {
    this.itemsData.push({ id: this.currentID, text: this.inputText });
    this.inputText = '';
    this.currentID++;
  }

  deleteItem(id: number) {
    this.itemsData = this.itemsData.filter((item) => item.id !== id);
  }
}
