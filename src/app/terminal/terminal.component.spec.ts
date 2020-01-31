import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminalComponent } from './terminal.component';
import { isArray } from 'util';

describe('TerminalComponent', () => {
  let component: TerminalComponent;
  let fixture: ComponentFixture<TerminalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerminalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerminalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create an about property with type string', () => {
    expect(component.about).toBeDefined();
    expect(typeof component.about === 'string').toBeTruthy();
  });

  it('should create an projects property with type array', () => {
    expect(component.projects).toBeDefined();
    expect(isArray(component.projects)).toBeTruthy();
    expect(component.projects.length > 0).toBeTruthy();
  });

  it('should create an links property with type array', () => {
    expect(component.links).toBeDefined();
    expect(isArray(component.links)).toBeTruthy();
    expect(component.links.length > 0).toBeTruthy();
  });

  it('should create an contacts property with type array', () => {
    expect(component.contacts).toBeDefined();
    expect(isArray(component.contacts)).toBeTruthy();
    expect(component.contacts.length > 0).toBeTruthy();
  });
});
