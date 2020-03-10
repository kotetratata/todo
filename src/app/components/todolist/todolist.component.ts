import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../services/crud.service';
import { SearchService } from '../../services/search.service';


@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  searchType: string = 'id';
  searchDirection: string = ' ASC';
  typeTable = ['id', 'name', 'status', 'category', 'time left'];
  // @ts-ignore
  public todoStorage: Array;
  // @ts-ignore
  public searchStorage: Array;

  constructor( public CrudService: CrudService, public SearchService: SearchService) { }

  ngOnInit(): void {
    this.todoStorage = this.CrudService.todoStorage;

    this.searchStorage = this.SearchService.searchStorage;
  }

  changeSearch(event){
    if (this.searchType === event.target.textContent){
      this.searchDirection === ' ASC' ? this.searchDirection = ' DESC' : this.searchDirection = ' ASC';
    } else {
      if (this.typeTable.lastIndexOf(event.target.textContent) > -1) {
        this.searchType = event.target.textContent;
      }
    }
    //sortList()
  }

  changeStatus(event) {
    const index = event.target.offsetParent.querySelector('p').textContent - 1;
    this.CrudService.todoStorage[index].status ?
      this.CrudService.todoStorage[index].status = false :
      this.CrudService.todoStorage[index].status = true;
    this.CrudService.updateItem();
  }

  deleteTask(event) {
    const index = event.target.offsetParent.querySelector('p').textContent - 1;

    this.CrudService.deleteItem(index);
  }

}
