import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SENTENCES_MOCK } from '../shared/sentences.mock';
import { Sentence } from '../shared/sentence.model';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {
  public currentAnswer = '';
  public instruction = 'Traduza a frase:';
  public lifes = 3;
  private round = 0;

  @Output()
  finishTheGame = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onUpdateAnswer(word: string) {
    this.currentAnswer = word;
  }

  get currentQuestion() {
    return SENTENCES_MOCK[this.round];
  }

  get progress(){
    return (this.round * 100 ) / SENTENCES_MOCK.length;
  }

  validateAnswer() {
    if (this.currentAnswer === this.currentQuestion.portuguese) {
      this.round++;
      this.currentAnswer = '';
      if(this.round === SENTENCES_MOCK.length){
        this.finishTheGame.emit('Voce ganhou');
      }
    } else {
      this.lifes--;
      if(this.lifes === -1){
        this.finishTheGame.emit('Voce Perdeu');
      }

    }
  }
}
