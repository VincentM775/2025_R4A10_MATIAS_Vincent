import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  links = Array.from({ length: 4 }, (_, i) => ({
    label: `Page${i + 1}`,
    href: '#',
  }));
}
