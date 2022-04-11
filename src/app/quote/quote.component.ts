import { Component, OnInit } from '@angular/core'
import { Sayings } from '../sayings'
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit{

    quotes:Sayings[] =[
      new Sayings(1, 'Quote:', 0, 0),
      new Sayings(2, 'Quote:' ,0, 0),
      new Sayings(3, 'Qoute:',0, 0),
      new Sayings(1, 'Quote:', 0, 0),
      new Sayings(2, 'Quote:' ,0, 0),
    ]
     

  constructor() { }

  ngOnInit(): void {
  }

}