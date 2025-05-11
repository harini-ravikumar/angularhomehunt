import { Component, Input } from '@angular/core';
import { Home } from '../interface/home';

@Component({
  selector: 'app-homecard',
  standalone: false,
  templateUrl: './homecard.component.html',
  styleUrl: './homecard.component.css'
})
export class HomecardComponent {
@Input() home?:Home
}
