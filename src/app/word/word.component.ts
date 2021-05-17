import { Component, OnInit } from '@angular/core';
import { word } from '../word';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.css']
})
export class WordComponent implements OnInit {
  title = 'word';
  word:word[] =
  [
    new word(1, 'Gathi', 'You must be the change you want to see in this world'),
    new word(2,'George Bernhard','A life spent making mistakesnis not only more honorable, but more usefule than a life spent doing nothing'),
    new word(3,'Michel De Montaigne,','He who fears will suffer, already suffers because he fears'),
    new word(4,'Confucius','Life is really simple, but we insist on making it complicated'),
    new word(5,'Mary engelbreit ','If you dont like something change it.If you can change it ,change the way you think about it'),
    new word(6,'Unkown','In seeking happiness in othere you will fiind it in yourself'),
  ];



      toggleDetails(index){
        this.word[index].showDescription = !this.word[index].showDescription;
      }
  constructor() { }

  ngOnInit(): void {
  }

}
