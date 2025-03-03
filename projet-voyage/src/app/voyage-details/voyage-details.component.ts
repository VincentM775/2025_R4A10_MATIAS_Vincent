import { Component, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { VoyageService } from '../services/voyage.service';
import { Voyage } from '../../models/voyage.type';
import { ConfirmModalComponent } from '../confirm-modal/confirm-modal.component';

@Component({
  selector: 'app-voyage-details',
  standalone: true,
  imports: [CommonModule, ConfirmModalComponent],
  templateUrl: './voyage-details.component.html',
  styleUrl: './voyage-details.component.css'
})
export class VoyageDetailsComponent {
  voyage!: Voyage | undefined;
  showModal = signal(false);

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private voyageService: VoyageService
  ) {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.voyage = this.voyageService.getVoyageById(id);
    }
  }

  retourListe() {
    this.router.navigate(['/voyages']);
  }

  confirmDelete() {
    this.showModal.set(true);
  }

  onConfirm() {
    if (this.voyage) {
      this.voyageService.deleteVoyage(this.voyage.id);
      this.showModal.set(false);
      this.router.navigate(['/voyages']);
    }
  }

  onCancel() {
    this.showModal.set(false);
  }
}
