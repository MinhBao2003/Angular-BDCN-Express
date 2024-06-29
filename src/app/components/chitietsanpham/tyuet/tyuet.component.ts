//import { animate, stagger, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate, style, query, stagger } from '@angular/animations';
interface Snowflake {
  left: number;
  speed: number;
  size: string;
}
@Component({
  selector: 'app-tyuet',
  templateUrl: './tyuet.component.html',
  styleUrls: ['./tyuet.component.css'],
  animations: [
    trigger('snowfallAnimation', [
      transition(':enter', [
        query('.snowflake', [
          style({ transform: 'translateY(-100vh)' }),
          stagger(100, [
            animate('2s', style({ transform: 'translateY(100vh)' }))
          ])
        ])
      ])
    ])
  ]
})
export class TyuetComponent implements OnInit{
  snowflakes: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.generateSnowflakes();
  }

  private generateSnowflakes() {
    for (let i = 0; i < 50; i++) {
      this.snowflakes.push({
        left: Math.random() * 100,
        animationDuration: Math.random() * 5 + 5,
        size: Math.random() * 3 + 2
      });
    }
  }
}
