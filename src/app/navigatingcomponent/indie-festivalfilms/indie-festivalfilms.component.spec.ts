import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndieFestivalfilmsComponent } from './indie-festivalfilms.component';

describe('IndieFestivalfilmsComponent', () => {
  let component: IndieFestivalfilmsComponent;
  let fixture: ComponentFixture<IndieFestivalfilmsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndieFestivalfilmsComponent]
    });
    fixture = TestBed.createComponent(IndieFestivalfilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
