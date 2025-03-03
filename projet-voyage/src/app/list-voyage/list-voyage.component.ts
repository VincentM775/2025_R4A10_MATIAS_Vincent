import { Component, ChangeDetectorRef } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { Voyage } from '../../models/voyage.type';
import { VoyageService } from '../services/voyage.service';

@Component({
  selector: 'app-list-voyage',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './list-voyage.component.html',
  styleUrl: './list-voyage.component.css'
})
export class ListVoyageComponent {
  voyages: Voyage[] = [];
  currentPage = 1;
  voyagesPerPage = 20;

  constructor(private voyageService: VoyageService) {
    this.voyageService.voyages$.subscribe(updatedVoyages => {
      this.voyages = updatedVoyages;
    });
  }

  onDelete(id: string) {
    this.voyageService.deleteVoyage(id);
  }

  get displayedVoyages(): Voyage[] {
    const start = (this.currentPage - 1) * this.voyagesPerPage;
    return this.voyages.slice(start, start + this.voyagesPerPage);
  }

  goToNextPage() {
    if ((this.currentPage * this.voyagesPerPage) < this.voyages.length) {
      this.currentPage++;
    }
  }
  
  totalPages(): number[] {
    return Array.from({ length: Math.ceil(this.voyages.length / this.voyagesPerPage) || 1 }, (_, i) => i + 1);
  }
  
  goToPreviousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  goToPage(page: number) {
    this.currentPage = page;
  }
}
