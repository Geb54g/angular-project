import { Component, OnInit } from '@angular/core';
import { Quotez } from '../quotez';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

quote:Quotez[] = [
  new Quotez(1,'First Quote',0 ,0),
  new Quotez(2,'Second Quote',0,0),
  new Quotez(3,'Third Quote',0,0),
  new Quotez(4,'Fourthng Quote',0,0),

]
  constructor() { }

  ngOnInit(): void {
  }

}
