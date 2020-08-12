import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodosComponent } from './todos/todos.component';
import { AboutComponent } from './about/about.component';
import { HomePageComponent } from './covid/home-page/home-page.component';
import { CountriesComponent } from './covid/countries/countries.component';


const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'countries', component: CountriesComponent}
  // {path: '', component: TodosComponent, data: {animation: 'isRight'}},
  // {path: 'about', component: AboutComponent, data: {animation: 'isLeft'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
