import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

interface UserInterface {
  login: string;
  id: number;
  bio: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'http-client';
  constructor(private http: HttpClient){}
  ngOnInit(): void {
    this.http.get<UserInterface>('https://api.github.com/users/separse').subscribe(
      data => {
      console.log(data.login);
      console.log(data.id);
      console.log(data.bio);
    },
    (err: HttpErrorResponse) => {
      if (err.error instanceof Error) {
        console.log('An CLIENT_SIDE Error Has Been Occured...');
      } else {
        console.log('An SERVER_Error Has Been Occured...');
      }
    });

    const req = this.http.post('http://jsonplaceholder.typicode.com/posts', {
      title: 'Thanos',
      body: 'The Last Giant',
      userId: 1000 }).subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log('Error Occured');
        }
      );
    }
  }
