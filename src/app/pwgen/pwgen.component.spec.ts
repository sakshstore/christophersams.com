import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PwgenComponent } from './pwgen.component';
import validate = WebAssembly.validate;

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

  it('sets noOutput to true on init', () => {
    expect(component.noOutput).toBeDefined();
    expect(component.noOutput).toBeTruthy();
  });

  it('pwGenerate sets noOutput to false', () => {
    component.generatePw(10, 10, 'specialCharacters');
    expect(component.noOutput).toBeFalsy();
  });

  it('pwGenerate sets length to first argument value', () => {
    component.generatePw(10, 10, 'specialCharacters');
    expect(component.length).toEqual(10);
  });

  it('pwGenerate sets iterations to second argument', () => {
    component.generatePw(10, 10, 'specialCharacters');
    expect(component.iterations).toEqual(10);
  });

  it('pwGenerate sets the correct number of passwords', () => {
    component.generatePw(10, 10, 'specialCharacters');
    expect(component.passwords).toBeDefined();
    expect(component.passwords.length).toEqual(10);
  });

  it('pwGenerate sets the passwords to the correct length', () => {
    component.generatePw(10, 10, 'lettersOnly');
    expect(component.passwords[1].length).toEqual(10);
  });

  it('validateInput returns false if length param is too low', () => {
    expect(component.validateInput(1, 10)).toBeFalsy();
  });

  it('validateInput returns false if iterations param is too low', () => {
    expect(component.validateInput(10, 0)).toBeFalsy();
  });

  it('validateInput returns true if provided valid inputs', () => {
    expect(component.validateInput(10, 10)).toBeTruthy();
  });

  it('getUppercaseLetter returns a string with length 1', () => {
    const uppercaseLetter = component.getUppercaseLetter();
    expect(typeof uppercaseLetter === 'string').toBeTruthy();
    expect(uppercaseLetter.length).toEqual(1);
  });

  it('getLowercaseLetter returns a string with length 1', () => {
    const uppercaseLetter = component.getLowercaseLetter();
    expect(typeof uppercaseLetter === 'string').toBeTruthy();
    expect(uppercaseLetter.length).toEqual(1);
  });

  it('getNumber returns a string with length 1', () => {
    const uppercaseLetter = component.getNumberString();
    expect(typeof uppercaseLetter === 'string').toBeTruthy();
    expect(uppercaseLetter.length).toEqual(1);
  });
});
