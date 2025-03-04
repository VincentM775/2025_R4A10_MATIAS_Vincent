import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book';
import { ActivatedRoute, Router } from '@angular/router';
import { BookApiService } from '../../services/book-api.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-single-book-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './single-book-page.component.html',
  styleUrl: './single-book-page.component.css',
})
export class SingleBookPageComponent implements OnInit {
  book?: Book;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly bookService: BookApiService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    if (!isNaN(id)) {
      this.bookService.getBookById(id).subscribe({
        next: (book) => (this.book = book),
        error: (err) => console.error('Erreur lors du chargement du livre :', err),
      });
    }
  }

  deleteBook(): void {
    if (!this.book) return;

    this.bookService.deleteBook(this.book.id).subscribe({
      next: () => {
        console.log('Livre supprimé avec succès');
        this.router.navigate(['/']);
      },
      error: (err) => console.error('Erreur lors de la suppression du livre :', err),
    });
  }
}
