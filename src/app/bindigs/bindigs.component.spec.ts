import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindigsComponent } from './bindigs.component';

describe('BindigsComponent', () => {
  let component: BindigsComponent;
  let fixture: ComponentFixture<BindigsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BindigsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BindigsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
