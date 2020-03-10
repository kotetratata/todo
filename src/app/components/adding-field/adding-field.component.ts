import {Component, OnInit} from '@angular/core';
import {addTask} from './addTask';
import {CrudService} from '../../services/crud.service';
import {StorageItem} from "../../../storageItem";




@Component({
  selector: 'app-adding-field',
  templateUrl: './adding-field.component.html',
  styleUrls: ['./adding-field.component.css']
})
export class AddingFieldComponent implements OnInit, addTask {

  status = 'startValue';
  cat = 'default';
  date = String(new Date());
  name: string;
  storageInfo: string;

  constructor( public CrudService: CrudService) { }

  ngOnInit(): void {

  }

  getName(name: string): void {
    if (name.length < 4) { return; }
    this.name = name;
    this.status = 'named';
  }


  getDate(date: string): void {
    this.date = date;
    this.status = 'dated';
  }

  getCategory(cat: string): void {
    this.cat = cat;
    this.status = 'startValue';
    this.postTask();
  }


  postTask() {
    const storageItem: StorageItem = {
      name : this.name,
      status : false,
      category : this.cat,
      startDate : new Date(),
      endingDate : new Date((this.date))
    }

    this.CrudService.createItem(storageItem)
  }


}
