import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
  <div class="col-12">
      <app-cabeza></app-cabeza>
    <app-pie></app-pie>
  </div>
  `,   // este viene bien para usar las comillas francesas
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
