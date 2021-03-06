import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-fundamentos';
  contents = [
    { label: 'Home', router: 'home' },
    { label: 'Comunicação entre componentes', router: 'communication' }
  ]
}
