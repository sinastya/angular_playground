import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ToDo_Angular_by801';
  subTitle2 = 'ToDo';

  itemsData: Array<string> = ['todo1', 'todo2', 'todo3'];

  inputText = '';

  consoleLog(text: string) {
    console.log(text);
  }

  addNewItem() {
    this.itemsData.push(this.inputText);
    this.inputText = '';
  }

  deleteItem(text: string) {
    this.itemsData = this.itemsData.filter((item) => item !== text);
  }
}
