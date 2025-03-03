import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { Voyage } from '../../models/voyage.type';
import { Router } from '@angular/router';
import { ConfirmModalComponent } from '../confirm-modal/confirm-modal.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [ConfirmModalComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input({ required: true }) voyage!: Voyage;
  @Output() delete = new EventEmitter<string>();

  showModal = signal(false);

  constructor(private router: Router) {}

  confirmDelete() {
    this.showModal.set(true);
  }

  onConfirm() {
    this.delete.emit(this.voyage.id); 
    this.showModal.set(false);
  }

  onCancel() {
    this.showModal.set(false);
  }

  exploreVoyage() {
    this.router.navigate(['/voyages', this.voyage.id]);
  }
}
