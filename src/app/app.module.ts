import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from "@angular/router";

import {AppComponent} from './app.component';
import {ItemListComponent} from './item-list/item-list.component';
import { ItemComponent } from './item/item.component';
import { SavedItemsComponent } from './saved-items/saved-items.component';
import { NavComponentComponent } from './nav-component/nav-component.component';
import { CreateItemComponent } from './create-item/create-item.component';
import {ReactiveFormsModule} from "@angular/forms";
import { EditItemComponent } from './edit-item/edit-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent,
    ItemComponent,
    SavedItemsComponent,
    NavComponentComponent,
    CreateItemComponent,
    EditItemComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component: ItemListComponent},
      {path: 'items/saved', component: SavedItemsComponent},
      {path: 'items/create', component: CreateItemComponent},
      {path: 'items/edit/:itemId', component: EditItemComponent},
      {path: 'items/:itemId', component: ItemComponent},
    ]),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
