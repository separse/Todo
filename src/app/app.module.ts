import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient2Component } from './http-client2/http-client2.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodosComponent } from './todos/todos.component';
import { HeaderComponent } from './header/header.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { AboutComponent } from './about/about.component';
import { UserComponent } from './user/user.component';


@NgModule({
   declarations: [
      AppComponent,
      HttpClient2Component,
      TodosComponent,
      TodoItemComponent,
      TodosComponent,
      HeaderComponent,
      AddTodoComponent,
      AboutComponent,
      UserComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
