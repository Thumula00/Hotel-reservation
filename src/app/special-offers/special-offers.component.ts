import { Component } from '@angular/core';

interface SpecialOffer {
  title: string;
  description: string;
  discount: string;
  date: string;
  image: string;
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
      date: '12 Dec 2023 - 30 Jun 2024',
      image: 'https://www.ugaescapes.com/ugabay/wp-content/uploads/sites/4/2018/10/530x320-4.jpg'
    },
    {
      title: 'Family Vacation Deal',
      description: 'Plan your family vacation and get 15% off on suites for children under 12.',
      discount: '15%',
      date: '12 Dec 2023 - 30 Jun 2024',
      image: 'https://i.pinimg.com/736x/9d/cb/a4/9dcba448eef8a40eaeb5f7cdd461238a.jpg'
    },
    {
      title: 'Shangri-la Colombo',
      description: 'Luxurious Serviced Apartment Staycation.',
      discount: '15%',
      date: '12 Dec 2023 - 30 Jun 2024',
      image: 'https://i0.wp.com/www.hoteloffer.lk/wp-content/uploads/2022/02/Seagates-Hotel-Day-Outing.jpg?fit=1024%2C1024&ssl=1'
    },
    {
      title: 'Shangri-la Colombo',
      description: 'Luxurious Serviced Apartment Staycation.',
      discount: '15%',
      date: '12 Dec 2023 - 30 Jun 2024',
      image: 'https://www.ugaescapes.com/ugabay/wp-content/uploads/sites/4/2017/08/530x320-7.jpg'
    },
    {
      title: 'Jetwing Blue',
      description: 'EARLY BIRD OFFER.',
      discount: 'UP TO 32% OFF',
      date: 'Valid until 30th April 2024',
      image: 'https://www.excellenthoteldeals.com/blog-data/uploads/2021/09/Untitled-design-1.jpg'
    },
    {
      title: 'Shangri-la Colombo',
      description: 'Luxurious Serviced Apartment Staycation.',
      discount: '15%',
      date: '12 Dec 2023 - 30 Jun 2024',
      image: 'https://www.jetwinghotels.com/jetwingviluyana/wp-content/uploads/sites/2/2023/04/Conde-Nast-Jetwing-Vil-Uyana.jpg'
    },
    
  ];
}
