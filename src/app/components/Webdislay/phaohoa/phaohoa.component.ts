import { Component } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
@Component({
  selector: 'app-phaohoa',
  templateUrl: './phaohoa.component.html',
  styleUrls: ['./phaohoa.component.css'],
  animations: [
    trigger('fireworkAnimation', [
      transition('void => *', [
        style({ transform: 'translateY(100%) scale(1)', opacity: 0 }),
        animate('1s ease-out', style({ transform: 'translateY(-1000%) scale(3)', opacity: 0.8 })),
        animate('1s ease-out', style({ transform: 'translateY(-3000%) scale(6)', opacity: 0 })),
      ])
    ])
  ]
})
export class PhaohoaComponent {
  fireworks = [
    { color: 'red' },
    { color: 'blue' },
    { color: 'purple' },
    { color: 'gold' }
  ];
}
