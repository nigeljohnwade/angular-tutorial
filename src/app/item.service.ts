import { Injectable } from '@angular/core';
import {Item, items} from "./items";

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  items: Item[] = items;
  constructor() { }

  addItem(item: Item){
    this.items.push(item);
    console.log(items);
  }

  getItems(){
    return this.items;
  }

  getItem(itemId: number){
    return this.items.find(currentItem => currentItem.id === itemId);
  }
}
