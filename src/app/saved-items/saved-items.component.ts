import { Component, OnInit } from '@angular/core';
import {SaveItemService} from "../save-item.service";
import {ItemService} from "../item.service";

@Component({
  selector: 'app-saved-items',
  templateUrl: './saved-items.component.html',
  styleUrls: ['./saved-items.component.css']
})
export class SavedItemsComponent implements OnInit {

  constructor(
    private savedItemService: SaveItemService,
    private itemService: ItemService,
    ) { }

  savedItems = this.itemService.getItems().filter(currentItem => this.savedItemService.getSavedItems().includes(currentItem.id));

  ngOnInit(): void {
  }

}
