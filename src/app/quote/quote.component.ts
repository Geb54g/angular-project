import { Component, OnInit } from '@angular/core'
import { Sayings } from '../sayings'
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit{

    quotes:Sayings[] =[
      new Sayings(1, 'First Sayings;', 0,0),
      new Sayings(2, 'Second Sayings;', 0,0),
      new Sayings(3, 'Third Sayings;', 0,0),
      new Sayings(4, 'Fourth Sayings;', 0,0),
      new Sayings(5, 'Fifth Sayings;', 0,0),
    ]
     

  constructor() { }

  ngOnInit(): void {
  }

}