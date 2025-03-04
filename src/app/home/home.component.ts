import { Component, signal } from '@angular/core';
import { GreetingComponent } from '../components/greeting/greeting.component';
import { CounterComponent } from '../components/counter/counter.component';
import { FooterComponent } from '../components/footer/footer.component';

@Component({
  selector: 'app-home',
  imports: [GreetingComponent, CounterComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
 message = signal('Welcome to the home page!');

 content = signal('This is the content of the home page');

 keyUpHnadler(event: KeyboardEvent) {
   console.log(`Key ${event.key} event was triggered`);
 }
}
