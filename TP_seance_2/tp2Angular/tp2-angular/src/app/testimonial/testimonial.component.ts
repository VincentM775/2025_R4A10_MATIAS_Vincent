import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrl: './testimonial.component.css',
})
export class TestimonialComponent {
  testimonials = [
    {
      image: 'assets/user1.jpg',
      name: 'Edward Newgate',
      role: 'Founder Circle',
      text: 'Our dedicated patient engagement app and web portal allow you to access information instantly...'
    },
    {
      image: 'assets/user2.jpg',
      name: 'John Doe',
      role: 'CEO CompanyX',
      text: 'Great service! I love how easy it is to access my medical history...'
    }
  ];

  currentIndex = 0;

  prevTestimonial() {
    this.currentIndex = (this.currentIndex - 1 + this.testimonials.length) % this.testimonials.length;
  }

  nextTestimonial() {
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
  }
}
