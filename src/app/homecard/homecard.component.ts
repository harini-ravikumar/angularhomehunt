import { Component, Input } from '@angular/core';
import { Home } from '../interface/home';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homecard',
  standalone: false,
  templateUrl: './homecard.component.html',
  styleUrl: './homecard.component.css'
})
export class HomecardComponent {
@Input() home?:Home
constructor(private router:Router){}

explore(){
  this.router.navigate(['/homeview', this.home?.id])
}

}
