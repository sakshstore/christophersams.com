import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PwgenComponent } from './pwgen.component';

describe('PwgenComponent', () => {
  let component: PwgenComponent;
  let fixture: ComponentFixture<PwgenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PwgenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PwgenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
