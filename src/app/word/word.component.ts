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
    new word(1, 'Watch finding Nemo', 'Find an online version and watch merlin find his son'),
    new word(2,'Buy Cookies','I have to buy cookies for the parrot'),
    new word(3,'Get new Phone Case','Diana has her birthday coming up soon'),
    new word(4,'Get Dog Food','Pupper likes expensive snacks'),
    new word(5,'Solve math homework','Damn Math'),
    new word(6,'Plot my world domination plan','Cause I am an evil overlord'),
  ];
  


      toggleDetails(index){
        this.word[index].showDescription = !this.word[index].showDescription;
      }
  constructor() { }

  ngOnInit(): void {
  }

}
