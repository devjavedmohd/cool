import { Component } from '@angular/core';


@Component({
  selector: 'app-pm',
  template: `
    <div>
      <h1>{{pageTitle}}</h1>
      <app-pm-products></app-pm-products>
    </div>
  `
})

export class AppComponent {
  pageTitle: string = 'Acme Product Management';
}
