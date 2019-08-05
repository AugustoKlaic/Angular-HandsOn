import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { Attempt } from '../shared/attempt.model';

@Component({
  selector: 'app-attempts',
  templateUrl: './attempts.component.html',
  styleUrls: ['./attempts.component.scss']
})
export class AttemptsComponent implements OnInit, OnChanges {
  public lifes: Array<Attempt> = [];

  @Input()
  numberLifes: number;

  constructor() { }

  ngOnInit() {
    for (let i = 0; i < this.numberLifes; i++) {
      this.lifes.push(new Attempt(true));

    }
  }

  ngOnChanges(changes: SimpleChanges) {
    let i = 0;
    while (this.lifes[i].isFull === false) {
      i++;
    }
    this.lifes[i].isFull = false;

  }
}
