import { Component } from '@angular/core';

interface SpecialOffer {
  title: string;
  description: string;
  discount: string;
  date: string;
}

@Component({
  selector: 'app-special-offers',
  templateUrl: './special-offers.component.html',
  styleUrls: ['./special-offers.component.css']
})
export class SpecialOffersComponent {
  specialOffers: SpecialOffer[] = [
    {
      title: 'Weekend Getaway Offer',
      description: 'Enjoy a relaxing weekend stay with a 20% discount on room rates.',
      discount: '20%',
      date: '12 Dec 2023 - 30 Jun 2024'
    },
    {
      title: 'Family Vacation Deal',
      description: 'Plan your family vacation and get 15% off on suites for children under 12.',
      discount: '15%',
      date: '12 Dec 2023 - 30 Jun 2024'
    },
    {
      title: 'Shangri-la Colombo',
      description: 'Luxurious Serviced Apartment Staycation.',
      discount: '15%',
      date: '12 Dec 2023 - 30 Jun 2024',
    },
    {
      title: 'Shangri-la Colombo',
      description: 'Luxurious Serviced Apartment Staycation.',
      discount: '15%',
      date: '12 Dec 2023 - 30 Jun 2024',
    },
    {
      title: 'Jetwing Blue',
      description: 'EARLY BIRD OFFER.',
      discount: 'UP TO 32% OFF',
      date: 'Valid until 30th April 2024',
    },
    {
      title: 'Shangri-la Colombo',
      description: 'Luxurious Serviced Apartment Staycation.',
      discount: '15%',
      date: '12 Dec 2023 - 30 Jun 2024',
    },
    
  ];
}
