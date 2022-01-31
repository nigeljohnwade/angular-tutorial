import { Injectable } from '@angular/core';
import {Item} from "./items";

@Injectable({
  providedIn: 'root'
})
export class SaveItemService {
  savedItems: Item[] = [];
  constructor() { }
  addSavedItem(item: Item){
    if(Boolean(this.savedItems.find(currentItem => currentItem.id === item.id))){
      alert('Already saved');
    }else{
      this.savedItems.push(item);
    }
  }
  removeSavedItem(item: Item) {
    this.savedItems = this.savedItems.filter(currentItem => item.id !== currentItem.id);
    return this.savedItems;
  }
  clearSavedItems(){
    this.savedItems = [];
    return this.savedItems;
  }
  getSavedItems(){
    return this.savedItems;
  }
  getSavedItem(itemId: number){
    return this.savedItems.find(currentItem => currentItem.id === itemId);
  }

}
