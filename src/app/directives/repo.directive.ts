import { Directive ,ElementRef} from '@angular/core';

@Directive({
  selector: '[appRepo]'
})
export class RepoDirective {

  constructor(private element: ElementRef) { 
    this.element.nativeElement.style.color = "blue";
  }

}
