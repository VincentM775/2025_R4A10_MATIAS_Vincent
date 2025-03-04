import { Component, inject, OnInit } from '@angular/core';
import { Book } from '../../models/book';
import { BookApiService } from '../../services/book-api.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-book-list-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './book-list-page.component.html',
  styleUrl: './book-list-page.component.css',
})
export class BookListPageComponent implements OnInit {
  private readonly bookService = inject(BookApiService);
  books: Book[] = [];

  ngOnInit() {
    this.bookService.getAllBooks().subscribe({
      next: (books) => (this.books = books),
      error: (err) => console.error('Erreur lors du chargement des livres :', err),
    });
  }

}
