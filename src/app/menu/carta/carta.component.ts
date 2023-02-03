import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.css']
})
export class CartaComponent {

  constructor(private readonly router: Router) {}
  
  goToPlatillos(): void {
    this.router.navigate(['platillos']);
  }
}
