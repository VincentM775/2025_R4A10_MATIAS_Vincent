import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})

export class FooterComponent {
  sections = [
    {
      title: 'Company',
      links: [
        { label: 'About', href: '#' },
        { label: 'Testimonials', href: '#' },
        { label: 'Find a doctor', href: '#' },
        { label: 'Apps', href: '#' },
      ],
    },
    {
      title: 'Region',
      links: [
        { label: 'Indonesia', href: '#' },
        { label: 'Singapore', href: '#' },
        { label: 'Hongkong', href: '#' },
        { label: 'Canada', href: '#' },
      ],
    },
    {
      title: 'Help',
      links: [
        { label: 'Help center', href: '#' },
        { label: 'Contact support', href: '#' },
        { label: 'Instructions', href: '#' },
        { label: 'How it works', href: '#' },
      ],
    },
  ];
}
