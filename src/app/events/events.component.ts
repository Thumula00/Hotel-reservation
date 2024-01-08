import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
    selector: 'app-events',
    templateUrl: './events.component.html',
    styleUrls: ['./events.component.css'],
    animations: [
        trigger('fadeInOut', [
            transition(':enter', [
                style({ opacity: 0, transform: 'translateY(20px)' }),
                animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
            ]),
        ]),
    ],
})
export class EventsComponent implements OnInit {
  events = [
    {
      name: 'Gastronomic Gala',
      date: '2024-01-08',
      description: 'A Culinary Extravaganza',
      imagePath: 'https://ik.imgkit.net/3vlqs5axxjf/external/http://media.iceportal.com/94959/photos/60038010_XL.jpg?tr=w-922%2Ch-519%2Cfo-auto',
    },
    {
      name: 'Elegance & Opulence',
      date: '2024-01-10',
      description: 'A Black-Tie Charity Ball',
      imagePath: 'https://www.hoteleventi.com/images/1700-960/eventi-social-events-2-d8afeca9.jpg', // Image path for Event 2
    },
    {
      name: 'Global Business Summit',
      date: '2024-01-08',
      description: 'Bridging Borders',
      imagePath: 'https://www.manila-hotel.com.ph/wp-content/uploads/2020/08/WEB-FIESTA-CONFERENCE-SET-UP-scaled-1.jpg', // Image path for Event 1
    },
    {
      name: 'Artisanal Craft Fair',
      date: '2024-01-10',
      description: 'Celebrating Local Talent',
      imagePath: 'https://image-tc.galaxy.tf/wijpeg-2ppx59g93axopjrwq7du0zaad/meeting-dinner-function-paradox.jpg?width=560', // Image path for Event 2
    },
    {
      name: 'Wellness Retreat',
      date: '2024-01-08',
      description: 'Mind, Body & Soul Revival',
      imagePath: 'https://www.hotelnassaubreda.nl/application/files/6615/7200/7504/20181228_RGB_Breda_MaxKneefel_36836.jpg', // Image path for Event 1
    },
    {
      name: 'Tech Innovators Forum',
      date: '2024-01-10',
      description: 'Shaping the Future',
      imagePath: 'https://www.hotelshipsholland.com/wp-content/uploads/2016/12/Business-Party.png', // Image path for Event 2
    },
    {
      name: 'Fashion Fiesta',
      date: '2024-01-08',
      description: 'Runway Showcase & Networking',
      imagePath: 'https://k6c4b3s3.stackpathcdn.com/optimized_img/meetings/kiddie_parties.jpg', // Image path for Event 1
    },
    {
      name: 'Luxury Wedding Showcase',
      date: '2024-01-10',
      description: ' Trends & Inspiration',
      imagePath: 'https://media.istockphoto.com/id/1411971240/photo/wine-and-champain-glass-in-luxury-weddings-and-events.jpg?s=612x612&w=0&k=20&c=YVSlq0UuN0rpB252gO77eKcqc5DI0aNRQZI8lTSAZhY=', // Image path for Event 2
    },
    {
      name: 'Cultural Fusion Night',
      date: '2024-01-08',
      description: 'Celebrating Diversity',
      imagePath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNGN_KCy6PY4y8MIHzQLrqZgv8NE9iQ5JkgA&usqp=CAU', // Image path for Event 1
    },
    {
      name: 'Corporate Leadership Workshop',
      date: '2024-01-10',
      description: 'Strategy & Vision',
      imagePath: 'https://assets.langhamhotels.com/is/image/langhamhotelsstage/tlchi-events:Medium?wid=675&hei=380', // Image path for Event 2
    },
    {
      name: 'Environmental Sustainability Conferenc',
      date: '2024-04-10',
      description: 'Creating Change',
      imagePath: 'https://www.hotelvanoranje.com/media/2-2-poolparty-wide-5.jpg?cropX=0&cropY=0&cropW=0&cropH=0', // Image path for Event 1
    },
    {
      name: 'Music & Mixology Soirée',
      date: '2024-02-25',
      description: 'Harmonies & Cocktails',
      imagePath: 'https://www.bhotelqc.com/wp-content/uploads/2022/05/grandballroom-4.jpg', // Image path for Event 2
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  animateEvent(event: any) {
    const animations = ['bounce', 'rotate', 'shake', 'pulse']; // Example animation names
    const randomAnimation = animations[Math.floor(Math.random() * animations.length)];

    event.target.closest('.event-item').classList.add(randomAnimation);
    setTimeout(() => {
        event.target.closest('.event-item').classList.remove(randomAnimation);
    }, 1000); // Duration for the animation to play, adjust as needed
}
}
