import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from "@angular/router";

import {AppComponent} from './app.component';
import {ItemListComponent} from './item-list/item-list.component';
import { ItemComponent } from './item/item.component';
import { SavedItemsComponent } from './saved-items/saved-items.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent,
    ItemComponent,
    SavedItemsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component: ItemListComponent},
      {path: 'items/saved', component: SavedItemsComponent},
      {path: 'items/:itemId', component: ItemComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
