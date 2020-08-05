import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

interface UserClass {
  login: string;
  bio: string;
  email: string;
}

@Component({
  selector: 'app-http-client2',
  templateUrl: './http-client2.component.html',
  styleUrls: ['./http-client2.component.css']
})
export class HttpClient2Component implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {

    this.http.get<UserClass>('https://api.github.com/users/separse').subscribe(
      post => {
        console.log('Username: ' + post.login);
        console.log('Email: ' + post.email);
        console.log('Biography: ' + post.bio);
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log('Something is wrong in CLIENT-SIDE!!!');
        } else {
          console.log('SERVER has some error...');
        }
      }
    );

    const req = this.http.post('http://jsonplaceholder.typicode.com/posts', {
      title: 'Black Panter',
      body: 'King Of All Africa',
      userId: 1
    }).subscribe(
      res => console.log(res),
      err => console.log('Error Has Occured...')
      );
  }

}
