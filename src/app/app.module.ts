import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { AlertComponent } from './alert.component';
import { WebComponent } from './web/web.component';
import { HomePageComponent } from './covid/home-page/home-page.component';
import { NavbarComponent } from './covid/navbar/navbar.component';
import { CountriesComponent } from './covid/countries/countries.component';
import { DashboardComponent } from './covid/dashboard/dashboard.component';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';

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
      UserComponent,
      AlertComponent,
      WebComponent,
      HomePageComponent,
      NavbarComponent,
      CountriesComponent,
      DashboardComponent
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule,
      Ng2GoogleChartsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ],
   entryComponents: [AlertComponent]
})
export class AppModule { }
