import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient2Component } from './http-client2/http-client2.component';
import { GithubAuth } from './github-auth';

@NgModule({
   declarations: [
      AppComponent,
      HttpClient2Component
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule
   ],
   providers: [{
      provide: HTTP_INTERCEPTORS,
      useClass: GithubAuth,
      multi: true
   }],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
