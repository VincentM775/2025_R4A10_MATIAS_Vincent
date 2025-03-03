import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Voyage {
  id: string;
  destination: string;
  description: string;
  prix: number;
}

@Injectable({
  providedIn: 'root'
})
export class VoyageService {
  private localStorageKey = 'voyages';
  private voyages: Voyage[] = [];

  private voyagesSubject = new BehaviorSubject<Voyage[]>([]);
  voyages$ = this.voyagesSubject.asObservable();

  constructor() {
    this.chargerVoyages();
  }

  private generateId(): string {
    return Math.random().toString(36).substring(2, 15);
  }

  private sauvegarderVoyages(): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.voyages));
    this.voyagesSubject.next([...this.voyages]);
  }

  private chargerVoyages(): void {
    const data = localStorage.getItem(this.localStorageKey);
    if (data) {
      this.voyages = JSON.parse(data);
    } else {
      this.initialiserVoyages();
    }
    this.voyagesSubject.next([...this.voyages]);
  }

  private initialiserVoyages(): void {
    this.voyages = [
      { id: this.generateId(), destination: 'Bali, Indonésie', description: 'Découvrez une destination inoubliable où aventure et détente se mêlent harmonieusement.', prix: 799 },
      { id: this.generateId(), destination: 'Kyoto, Japon', description: "Laissez-vous séduire par les paysages à couper le souffle et l'hospitalité locale.", prix: 899 },
      { id: this.generateId(), destination: 'Santorin, Grèce', description: 'Une expérience unique entre culture ancestrale et modernité vibrante.', prix: 999 },
      { id: this.generateId(), destination: 'Reykjavik, Islande', description: 'Plongez dans une ambiance magique et laissez-vous surprendre par chaque recoin de cette ville fascinante.', prix: 1099 },
      { id: this.generateId(), destination: 'Marrakech, Maroc', description: 'Entre traditions et innovations, cette destination vous réserve bien des surprises.', prix: 1199 },
      { id: this.generateId(), destination: 'Venise, Italie', description: 'Savourez la cuisine locale, explorez les lieux emblématiques et créez des souvenirs mémorables.', prix: 1299 },
      { id: this.generateId(), destination: 'Rio de Janeiro, Brésil', description: "Un havre de paix où la nature et l'architecture forment une harmonie parfaite.", prix: 1399 },
      { id: this.generateId(), destination: 'Phuket, Thaïlande', description: 'Vivez une immersion totale dans une ville aux mille contrastes et aux paysages enchanteurs.', prix: 1499 },
      { id: this.generateId(), destination: 'New York, États-Unis', description: "Profitez de plages paradisiaques, d'activités inoubliables et d'une culture envoûtante.", prix: 1599 },
      { id: this.generateId(), destination: 'Le Cap, Afrique du Sud', description: 'Admirez les merveilles naturelles et architecturales qui font la renommée de cette destination.', prix: 1699 }
    ];
    this.sauvegarderVoyages();
  }

  getVoyages(): Voyage[] {
    return [...this.voyages];
  }

  addVoyage(voyage: Voyage): void {
    this.voyages.push(voyage);
    this.sauvegarderVoyages();
  }

  deleteVoyage(id: string): void {
    this.voyages = this.voyages.filter(v => v.id !== id);
    this.sauvegarderVoyages();
  }

  getVoyageById(id: string): Voyage | undefined {
    return this.voyages.find(v => v.id === id);
  }

  resetVoyages(): void {
    localStorage.removeItem(this.localStorageKey);
    this.initialiserVoyages();
  }
}
