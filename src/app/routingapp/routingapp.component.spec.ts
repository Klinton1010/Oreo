import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingappComponent } from './routingapp.component';

describe('RoutingappComponent', () => {
  let component: RoutingappComponent;
  let fixture: ComponentFixture<RoutingappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutingappComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutingappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
