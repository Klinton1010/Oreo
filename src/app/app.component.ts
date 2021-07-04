import { Component, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { HostDirective} from './host.directive';
import { HelloComponent } from './hello/hello.component';
import { HiComponent } from './hello/hello.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Oreo';
  display=false;
  
  constructor(public factoryRes: ComponentFactoryResolver){
    
  }
  
  /*@ViewChild(HostDirective, { static: true })
  childRef!: HostDirective;
  
  components = [HiComponent, HelloComponent];


  show(id: any)
  {
    this.childRef.viewRef.clear();
    //Selecting the component from array
    const resolvedFactory = this.factoryRes.resolveComponentFactory(
      this.components[id]
    );
    //Dumping the content inside the tag
    const compRef = this.childRef.viewRef.createComponent(resolvedFactory);
    //Giving the @input to child
    compRef.instance.name = id == 0 ? 'Gopi' : 'Surendran';
    console.log(compRef);
  }*/
  }

