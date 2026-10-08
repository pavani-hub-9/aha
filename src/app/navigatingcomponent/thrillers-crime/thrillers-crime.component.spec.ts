import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThrillersCrimeComponent } from './thrillers-crime.component';

describe('ThrillersCrimeComponent', () => {
  let component: ThrillersCrimeComponent;
  let fixture: ComponentFixture<ThrillersCrimeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThrillersCrimeComponent]
    });
    fixture = TestBed.createComponent(ThrillersCrimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
