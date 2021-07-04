import { Directive, Input,ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[example]'
})
export class ExampleDirective {
  @Input() highColor: any;
  //To access the content :public view:ElementRef
  constructor(public view:ElementRef) { 
    this.view.nativeElement.style.color="black"
  }
  
  @HostListener('mouseenter')m1() {
    this.view.nativeElement.style.color=this.highColor
    
  }

  @HostListener('mouseleave')m2() {
    this.view.nativeElement.style.color=this.highColor


    
  }


}
