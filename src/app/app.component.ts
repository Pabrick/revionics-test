import { Component } from '@angular/core';
import { list } from './mocks/list.mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'revionics-test';
  public optionList = list;
  public selectedIndex = 3;

  constructor() {}

  public onSelectSelection(optionId: string) {
    console.log('Emmited value', optionId);
  }

  public increaseIndex() {
    this.selectedIndex = this.selectedIndex + 1;
  }

  public decreaseIndex() {
    this.selectedIndex = this.selectedIndex - 1;
  }
}
