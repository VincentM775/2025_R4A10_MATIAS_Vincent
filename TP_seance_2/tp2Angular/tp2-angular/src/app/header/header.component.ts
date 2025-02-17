
import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  links = [
    { label: 'Home', href: '#' },
    { label: 'Find a doctor', href: '#' },
    { label: 'Apps', href: '#' },
    { label: 'Testimonials', href: '#' },
    { label: 'About us', href: '#' },
  ];
}
