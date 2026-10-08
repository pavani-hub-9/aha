import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmotionalDramaComponent } from './emotional-drama.component';

describe('EmotionalDramaComponent', () => {
  let component: EmotionalDramaComponent;
  let fixture: ComponentFixture<EmotionalDramaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmotionalDramaComponent]
    });
    fixture = TestBed.createComponent(EmotionalDramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
