import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class GithubAuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authReq = req.clone({
      headers: req.headers.set('Authorization', 'token fefd276bfb7a21e696a95e8d4a9f6a1fecf17771')
    });
    return next.handle(authReq);
  }
}
