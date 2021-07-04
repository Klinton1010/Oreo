import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpintercepterComponent } from './httpintercepter.component';

describe('HttpintercepterComponent', () => {
  let component: HttpintercepterComponent;
  let fixture: ComponentFixture<HttpintercepterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HttpintercepterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpintercepterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
