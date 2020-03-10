import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddingFieldComponent } from './components/adding-field/adding-field.component';
import { TodolistComponent } from './components/todolist/todolist.component';
import { TodoitemComponent } from './components/todoitem/todoitem.component';

@NgModule({
  declarations: [
    AppComponent,
    AddingFieldComponent,
    TodolistComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
