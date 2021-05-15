import { Component, Input, OnInit } from '@angular/core';
import { word } from '../word';

@Component({
  selector: 'app-word-detail',
  templateUrl: './word-detail.component.html',
  styleUrls: ['./word-detail.component.css']
})
export class WordDetailComponent implements OnInit {
  @Input() word:word;
  constructor() { }

  ngOnInit(): void {
  }

}
