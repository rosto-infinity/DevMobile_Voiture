import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  voiture = {
    immatriculation: '',
    proprietaire: '',
    modele: '',
    dateValidite: '',
    telephone: '',
  };

  constructor(private router: Router) {}

  validerForm() {
    this.router.navigate(['/details'], { state: { voiture: this.voiture } });
  }
}
