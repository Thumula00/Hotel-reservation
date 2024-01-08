import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent {
  faqList = [
    {
      question: 'How can I make a hotel reservation?',
      answer: 'You can make a reservation by visiting our website and using the booking form. Alternatively, you can call our reservation desk.'
    },
    {
      question: 'What are the check-in and check-out times?',
      answer: 'Check-in time is typically after 2:00 PM, and check-out time is before 12:00 PM. Please check with the specific hotel for their policies.'
    },
    {
      question: 'What information do I need to provide when making a reservation?',
      answer: 'When making a reservation, please provide your full name, contact details, preferred dates of stay, number of guests, and any special requests you may have.'
    },
    {
      question: 'Is it possible to modify or cancel a reservation?',
      answer: 'Yes, you can modify or cancel your reservation based on the hotels cancellation policy. Please refer to your booking confirmation or contact our reservation desk for assistance.'
    },
    {
      question: 'What are the accepted payment methods for reservations?',
      answer: 'We accept various payment methods, including credit/debit cards (Visa, Mastercard, American Express), bank transfers, and cash upon check-in.'
    },
    {
      question: 'Do you offer special rates for group bookings or long-term stays?',
      answer: 'Yes, we provide special rates for group bookings and extended stays. Please contact our reservation desk for inquiries regarding group rates or long-term accommodation options.'
    },
    {
      question: 'What amenities are included in the room reservation?',
      answer: 'Our room reservations typically include access to standard hotel amenities such as Wi-Fi, complimentary breakfast, gym facilities, and more. Specific amenities may vary based on the room type and hotel location.'
    },
  ];
}
