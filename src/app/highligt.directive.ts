import { Directive ,ElementRef} from '@angular/core';

@Directive({
  selector: '[appHighligt]'
})
export class HighligtDirective {

  constructor(private elem:ElementRef) { 
    elem.nativeElement.style.backgroundColour = 'yellow'
    
  }

}
