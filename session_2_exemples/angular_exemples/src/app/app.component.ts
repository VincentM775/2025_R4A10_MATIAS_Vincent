import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { CardListComponent } from './card-list/card-list.component';
import { UpperCasePipe } from '@angular/common';
import { ButtonComponent } from './button/button.component';

export type ListItem = {
  id: number;
  title: string;
  description: string;
};

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, CardListComponent, UpperCasePipe, ButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular_exemples';

  showList = true;

  list: ListItem[] = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    title: `Titre de la carte ${i + 1}`,
    description: 'Description un peu plus longue',
  }));

  private readonly PAGE_SIZE = 6;
  private offset = 0;
  private limit = this.PAGE_SIZE;

  slicedList = this.list.slice(this.offset, this.limit);

  toggleShowList() {
    this.showList = !this.showList;
  }

  onPageChange(value: number) {
    if (value < 0) {
      this.offset = Math.max(0, this.offset - this.PAGE_SIZE);
      this.limit = this.offset + this.PAGE_SIZE;
    }

    if (value > 0) {
      this.offset = Math.min(this.list.length, this.offset + this.PAGE_SIZE); // Histoire que vous ne partiez pas trop loin
      this.limit = this.offset + this.PAGE_SIZE;
    }

    this.slicedList = this.list.slice(this.offset, this.limit); // Il faut faire le calcul ici pour que ça change à nouveau
  }
}
