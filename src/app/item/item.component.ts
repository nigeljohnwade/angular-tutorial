import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {SaveItemService} from "../save-item.service";
import {ItemService} from "../item.service";
import {Item} from "../items";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  item: Item | undefined;
  isSavedItem: Boolean;

  constructor(
    private route: ActivatedRoute,
    private savedItemService: SaveItemService,
    private itemService: ItemService,
  ) {
  }

  ngOnInit() {
    this.isSavedItem = false;
    const routeParams = this.route.snapshot.paramMap;
    const itemIdFromRoute = Number(routeParams.get('itemId'));
    this.item = this.itemService.getItems().find(item => item.id === itemIdFromRoute);
    if (this.savedItemService.getSavedItem(this.item.id)) {
      this.isSavedItem = true;
    }
  }

  saveForLater(itemId: Number) {
    this.savedItemService.addSavedItem(itemId);
    this.isSavedItem = true;
  }

  removeFromSaved(itemId: Number){
    this.savedItemService.removeSavedItem(itemId)
    this.isSavedItem = false;
  }
}


