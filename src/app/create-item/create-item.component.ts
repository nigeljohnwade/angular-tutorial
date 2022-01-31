import {Component, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {ItemService} from "../item.service";
import {Item} from "../items";

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.css']
})
export class CreateItemComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private itemService: ItemService,
  ) {
  }

  createItemForm = this.formBuilder.group({
    name: '',
    description: '',
    longDescription: '',
  });

  ngOnInit(): void {
  }

  onSubmit(){
    const maxId = this.itemService.getItems().reduce((a: number, b: Item) => {
      return Math.max(a, b.id);
    }, 0);
    this.itemService.addItem({
      id: maxId + 1,
      ...this.createItemForm.value
    });
  }
}
