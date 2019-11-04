import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReaditComponent } from './readit.component';

describe('ReaditComponent', () => {
  let component: ReaditComponent;
  let fixture: ComponentFixture<ReaditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReaditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReaditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
