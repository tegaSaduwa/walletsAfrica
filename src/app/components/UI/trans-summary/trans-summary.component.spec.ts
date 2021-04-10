import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransSummaryComponent } from './trans-summary.component';

describe('TransSummaryComponent', () => {
  let component: TransSummaryComponent;
  let fixture: ComponentFixture<TransSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
