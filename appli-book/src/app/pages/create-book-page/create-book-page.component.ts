import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { BookApiService } from '../../services/book-api.service';
import { Book } from '../../models/book';

@Component({
  selector: 'app-create-book-page',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-book-page.component.html',
  styleUrl: './create-book-page.component.css'
})
export class CreateBookPageComponent {
  @Output() bookCreationEventEmitter = new EventEmitter<Book>();

  successMessage = '';
  errorMessage = '';

  constructor(
    private bookService: BookApiService
  ) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      const newBook: Omit<Book, 'id'> = {
        title: form.value.title,
        author: form.value.author,
        description: form.value.description,
        coverUrl: form.value.coverUrl || 'https://placehold.co/150x200'
      };

      this.bookService.createBook(newBook).subscribe({
        next: (book) => {
          this.successMessage = 'Livre ajouté avec succès !';
          this.bookCreationEventEmitter.emit(book);
          form.resetForm();
        },
        error: () => {
          this.errorMessage = 'Erreur lors de l\'ajout du livre.';
        }
      });
    }
  }
  
}