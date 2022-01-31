import {Injectable} from '@angular/core';
import {Item, items} from "./items";

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  items: Item[] = items;

  constructor() {
  }

  addItem(item: Item) {
    this.items.push(item);
  }

  getItems() {
    return this.items;
  }

  getItem(itemId: number) {
    return this.items.find(currentItem => currentItem.id === itemId);
  }

  replaceItem(item: Item) {
    const newItems = [
      ...this.items.filter((currentItem) => item.id !== currentItem.id),
      item,
    ];
    console.log(newItems);
    this.items = newItems;
  }
}
