import { Component, signal } from '@angular/core';
import { GreetingComponent } from '../components/greeting/greeting.component';

@Component({
  selector: 'app-home',
  imports: [GreetingComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
 message = signal('Welcome to the home page!');
 keyUpHnadler(event: KeyboardEvent) {
   console.log(`Key ${event.key} event was triggered`);
 }
}
