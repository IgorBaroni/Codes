import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCodesComponent } from './all-codes.component';

describe('AllCodesComponent', () => {
  let component: AllCodesComponent;
  let fixture: ComponentFixture<AllCodesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllCodesComponent]
    });
    fixture = TestBed.createComponent(AllCodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
