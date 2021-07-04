import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

//ViewContainerRef-Used to get the content 
//TemplateRef-Represents an embedded template that can be used to instantiate embedded views

@Directive({
  selector: '[structure]'
})
export class StructureDirective {
  render=false;
  //<h2 *structure="display">Hello Angular JS</h2>  set Structure(display)
  @Input() set structure(value:any)
  {
    if(value && !this.render)//true true
    {
      //console.log("first if",value,!this.render)
      //Create the content
      this.viewRef.createEmbeddedView(this.temp)
      this.render=true
      
    }
    else if(!value && this.render)//false false
    {
      //console.log(!value,this.render)
      //Clear the content
      this.viewRef.clear()
      this.render=false
    }
  }
  constructor(public temp:TemplateRef<Object>,public viewRef:ViewContainerRef) { 
  
  }

}
