import { Component, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { AlertComponent } from './alert.component';
import { DomSanitizer } from '@angular/platform-browser';
import { WebComponent } from './web/web.component';
import { RouterOutlet } from '@angular/router';
// import { fader } from './router-animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  // animations: [fader]
})
export class AppComponent {
  title = 'ToDo List';
  content = null;

  constructor(injector: Injector, domSanitizer: DomSanitizer) {
    // tslint:disable-next-line:object-literal-shorthand
    const AlertElement = createCustomElement(AlertComponent, {injector: injector});
    customElements.define('my-alert', AlertElement);
    setTimeout(() => {
      this.content = domSanitizer.bypassSecurityTrustHtml('<my-alert message="This is a dynamicly Angular component."></my-alert>');
    }, 1000);

    // tslint:disable-next-line:object-literal-shorthand
    const WebElement = createCustomElement(WebComponent, {injector: injector});
    customElements.define('my-web', WebElement);
    setTimeout(() => {
      this.content = domSanitizer.bypassSecurityTrustHtml('<my-web message = "this is dynamic"></my-web>');
    }, 1000);
  }

  // prepareRoute(outlet: RouterOutlet) {
  //   return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  // }
  }
