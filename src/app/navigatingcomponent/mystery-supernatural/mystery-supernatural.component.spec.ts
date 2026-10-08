import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MysterySupernaturalComponent } from './mystery-supernatural.component';

describe('MysterySupernaturalComponent', () => {
  let component: MysterySupernaturalComponent;
  let fixture: ComponentFixture<MysterySupernaturalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MysterySupernaturalComponent]
    });
    fixture = TestBed.createComponent(MysterySupernaturalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
