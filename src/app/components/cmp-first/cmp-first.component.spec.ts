import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpFirstComponent } from './cmp-first.component';

describe('CmpFirstComponent', () => {
  let component: CmpFirstComponent;
  let fixture: ComponentFixture<CmpFirstComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CmpFirstComponent]
    });
    fixture = TestBed.createComponent(CmpFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
