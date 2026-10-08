import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetroClassicgemsComponent } from './retro-classicgems.component';

describe('RetroClassicgemsComponent', () => {
  let component: RetroClassicgemsComponent;
  let fixture: ComponentFixture<RetroClassicgemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RetroClassicgemsComponent]
    });
    fixture = TestBed.createComponent(RetroClassicgemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
