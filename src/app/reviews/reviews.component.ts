import { Component, OnInit } from '@angular/core';

interface Review {
  userName: string;
  userAvatar: string;
  rating: number;
  comment: string;
}

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  reviews: Review[] = [
    {
      userName: 'Will Smith',
      userAvatar: 'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg&ga=GA1.1.1412446893.1704585600&semt=ais',
      rating: 4.5,
      comment: 'My stay at the Metropolitan Hotel was wonderful! The room was modern and luxurious, with beautiful city views. The hotels central location made it easy to explore nearby attractions. The staff was attentive and provided excellent service. Overall, a fantastic experience that I would highly recommend to anyone visiting the city'
    },
    {
      userName: 'Oliver Brown',
      userAvatar: 'https://images.pexels.com/photos/2128807/pexels-photo-2128807.jpeg?cs=srgb&dl=pexels-david-garrison-2128807.jpg&fm=jpg',
      rating: 4.5,
      comment: 'My experience at the Hilltop Lodge was disappointing. The room was not as clean as I expected, and the service was lackluster. The noise from neighboring rooms was also bothersome. Definitely not worth the price'
    },
    {
      userName: 'Sophia Williams',
      userAvatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      rating: 4.5,
      comment: 'I recently stayed at the Riverfront Inn, and it exceeded my expectations. The room was cozy, and the staff was incredibly helpful. The highlight was definitely the stunning view of the river from my window. I would definitely return here on my next visit.'
    },
    {
      userName: 'Ava Davis',
      userAvatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?cs=srgb&dl=pexels-italo-melo-2379005.jpg&fm=jpg',
      rating: 4.5,
      comment: 'I absolutely loved my stay at the Oasis Retreat! The resort had a serene atmosphere, and the facilities were top-notch. The pools were amazing, and the dining options were diverse. The staff was friendly and made me feel welcomed throughout my entire stay'
    },
    {
      userName: 'Benjamin Taylor',
      userAvatar: 'https://s.yimg.com/ny/api/res/1.2/MhRKX8zJrvtP2.Cm3cU_2g--/YXBwaWQ9aGlnaGxhbmRlcjtoPTY2Ng--/https://s.yimg.com/cd/resizer/2.0/original/ASFf_TDCi8LrE9b4tZ5kE_1beOM',
      rating: 4.5,
      comment: 'I had an outstanding time at the Mountain View Lodge! The location was breathtaking, nestled in the heart of the mountains. The room was cozy with rustic charm, and the staff was incredibly attentive. The hiking trails nearby were a bonus, offering spectacular views. I woud highly recommend this lodge to nature lovers seeking a peaceful retreat'
    },
    {
      userName: 'Emily Johnson',
      userAvatar: 'https://imageio.forbes.com/specials-images/imageserve/5f6a779460548326baf6d730//960x0.jpg?format=jpg&width=960',
      rating: 4.5,
      comment: 'My stay at the Grand View Hotel was incredible! The staff was exceptionally friendly and accommodating. The room was clean, spacious, and had a breathtaking view of the city skyline. I highly recommend this hotel to anyone visiting.'
    },
  ];

  newReview: Review = {
    userName: '',
    userAvatar: '',
    rating: 0,
    comment: ''
  };

  constructor() { }

  ngOnInit(): void {
    // Initialization logic if needed
  }

  addReview(): void {
    if (
      this.newReview.userName &&
      this.newReview.userAvatar &&
      this.newReview.rating !== null &&
      this.newReview.comment
    ) {
      this.reviews.unshift(this.newReview);
      this.newReview = {
        userName: '',
        userAvatar: '',
        rating: 0,
        comment: ''
      };
    }
  }
}
