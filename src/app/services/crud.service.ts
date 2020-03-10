import { Injectable } from '@angular/core';
import { StorageItem } from '../../storageItem';


@Injectable({
  providedIn: 'root'
})
export class CrudService {
  public todoStorage: StorageItem[];

  constructor() {
    this.init();
  }

  init() {
    const currentStorage = localStorage.getItem('todoStorage');
    this.todoStorage = currentStorage ? JSON.parse(currentStorage) : [];
  }

  createItem(item: StorageItem) {
    this.todoStorage.push(item);
    localStorage.setItem('todoStorage', JSON.stringify(this.todoStorage));
  }

  readItems() {
    this.todoStorage = JSON.parse(localStorage.getItem('todoStorage'));
  }

  updateItem() {
    //
  }

  deleteItem(id: number) {
    this.todoStorage.splice(id,1);
    localStorage.setItem('todoStorage', JSON.stringify(this.todoStorage));
  }
}
