import { Component, OnInit } from '@angular/core'
import { Sayings } from '../sayings'
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit{

    quotes:Sayings[] =[
      new Sayings(1, 'Quote:Everyone knew it was impossibble,until a fool who did not know came along and did it :', 0, 0),
      new Sayings(2, 'Quote:Believe you can and your are halfway there:' ,0, 0),
      new Sayings(3, 'Qoute:You attract what you vibrate:',0, 0),
      new Sayings(1, 'Quote:Be a warrior,not a worrrier:', 0, 0),
      new Sayings(2, 'Quote:Doubt kills more dreams than failure eve will:' ,0, 0),
    ]
     
  constructor() { }

  ngOnInit(): void {
  }

}