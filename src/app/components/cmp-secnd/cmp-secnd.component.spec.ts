import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpSecndComponent } from './cmp-secnd.component';

describe('CmpSecndComponent', () => {
  let component: CmpSecndComponent;
  let fixture: ComponentFixture<CmpSecndComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CmpSecndComponent]
    });
    fixture = TestBed.createComponent(CmpSecndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
