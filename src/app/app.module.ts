import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { LeftComponent } from './left/left.component';
import { HelloComponent } from './hello/hello.component';
import { HiComponent } from './hello/hello.component';
import { BindigsComponent } from './bindigs/bindigs.component';
import { ExampleDirective } from './example.directive';
import { StructureDirective } from './structure.directive';
import { StucAttrComponent } from './stuc-attr/stuc-attr.component';
import { ObserComponent } from './obser/obser.component';
import { CrudtestComponent } from './crudtest/crudtest.component';
import { CtComponent } from './ct/ct.component';
import { HttpClientModule } from '@angular/common/http';
import { Crudservice1Service } from './crudservice1.service';
import { MycrudComponent } from './mycrud/mycrud.component';
import { ServicecrudService } from './servicecrud.service';
import { HttpintercepterComponent } from './httpintercepter/httpintercepter.component';
import { RoutingappComponent } from './routingapp/routingapp.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    LeftComponent,
    HelloComponent,
    HiComponent,
    BindigsComponent,
   ExampleDirective,
    StructureDirective,
    StucAttrComponent,
    ObserComponent,
    CrudtestComponent,
    CtComponent,
    MycrudComponent,
    HttpintercepterComponent,
    RoutingappComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  entryComponents: [HelloComponent, HiComponent],
  providers: [ServicecrudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
