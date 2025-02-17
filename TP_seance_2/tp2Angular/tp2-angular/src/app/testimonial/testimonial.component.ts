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
      image: 'assets/images/img1.png',
      name: 'Edward Newgate',
      role: 'Founder Circle',
      text: 'Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedious form, long calls, or administrative hassle) and securely.'
    },
    {
      image: 'assets/images/img1.png',
      name: 'John Doe',
      role: 'CEO CompanyX',
      text: 'Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedious form, long calls, or administrative hassle) and securely.'
    }
  ];

  currentIndex = 0;

  prevTestimonial() {
    this.currentIndex = (this.currentIndex - 1 + this.testimonials.length) % this.testimonials.length;
  }

  nextTestimonial() {
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
  }

  goToTestimonial(index: number) {
    this.currentIndex = index;
  }
}
