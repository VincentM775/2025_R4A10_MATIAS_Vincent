import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DESTINATIONS, DESCRIPTIONS, PRIX } from '../data/data';
import { VoyageService, Voyage } from '../services/voyage.service';

@Component({
  standalone: true,
  selector: 'app-create-voyage',
  templateUrl: './create-voyage.component.html',
  styleUrls: ['./create-voyage.component.css']
})
export class CreateVoyageComponent {
  voyage!: Voyage;

  constructor(private voyageService: VoyageService, private router: Router) {}

  genererVoyage() {
    const randomDestination = DESTINATIONS[Math.floor(Math.random() * DESTINATIONS.length)];
    const randomDescription = DESCRIPTIONS[Math.floor(Math.random() * DESCRIPTIONS.length)];
    const randomPrix = PRIX[Math.floor(Math.random() * PRIX.length)];

    this.voyage = {
      id: Math.random().toString(36).substring(2, 10),
      destination: randomDestination,
      description: randomDescription,
      prix: randomPrix
    };
  }

  validerVoyage() {
    if (this.voyage) {
      this.voyageService.addVoyage(this.voyage);
      this.router.navigate(['/voyages']);
    }
  }
}
