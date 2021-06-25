import { Component } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem, CdkDrag} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Game';
  numbers:any = [];
  values:any;
  myCollection:any;
  dropcards:any = [];
  constructor(){}
  cards:any = ['Apple','Ball','Cat','Doll'];
  drop(event: CdkDragDrop<string[]>) {
    debugger;
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
  go(){
    debugger;
    this.myCollection = Array(parseInt(this.values)).fill('cards').map((x,i) => i);
  }
  Predicate(item: CdkDrag<string>){
    return item;
  }
  noReturnPredicate(){
    return false;
  }
}
