import {Component, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {ItemService} from "../item.service";

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
    console.log(this.createItemForm.value);
    console.log('submit');
  }
}
