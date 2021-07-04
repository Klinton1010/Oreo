import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MycrudComponent } from './mycrud.component';

describe('MycrudComponent', () => {
  let component: MycrudComponent;
  let fixture: ComponentFixture<MycrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MycrudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MycrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
