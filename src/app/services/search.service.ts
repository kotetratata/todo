import { Injectable } from '@angular/core';
import { StorageItem } from '../../storageItem';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  public searchStorage: StorageItem[];
  constructor() {
    this.init();
  }

  init() {
    this.searchStorage =  JSON.parse(localStorage.getItem('todoStorage'));
  }
}
