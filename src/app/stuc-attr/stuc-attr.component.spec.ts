import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StucAttrComponent } from './stuc-attr.component';

describe('StucAttrComponent', () => {
  let component: StucAttrComponent;
  let fixture: ComponentFixture<StucAttrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StucAttrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StucAttrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
