import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
})
export class ServicesComponent {
  services = [
    {
      title: 'Search doctor',
      description: 'Choose your doctor from thousands of specialist, general, and trusted hospitals',
      icon: 'assets/images/card/Frame1.png',
    },
    {
      title: 'Online pharmacy',
      description: 'Buy your medicines with our mobile application with a simple delivery system',
      icon: 'assets/images/card/Frame2.png',
    },
    {
      title: 'Consultation',
      description: 'Free consultation with our trusted doctors and get the best recommendations',
      icon: 'assets/images/card/Frame3.png',
    },
    {
      title: 'Details info',
      description: 'Free consultation with our trusted doctors and get the best recommendations',
      icon: 'assets/images/card/Frame4.png',
    },
    {
      title: 'Emergency care',
      description: 'You can get 24/7 urgent care for yourself or your children and your lovely family',
      icon: 'assets/images/card/Frame5.png',
    },
    {
      title: 'Tracking',
      description: 'Track and save your medical history and health data',
      icon: 'assets/images/card/Frame6.png',
    },
  ];
}
