import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FantasicfafaComponent } from './fantasicfafa.component';

describe('FantasicfafaComponent', () => {
  let component: FantasicfafaComponent;
  let fixture: ComponentFixture<FantasicfafaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FantasicfafaComponent]
    });
    fixture = TestBed.createComponent(FantasicfafaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
