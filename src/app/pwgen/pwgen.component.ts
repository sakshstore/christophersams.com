import { Component, OnInit } from '@angular/core';
import {htmlAstToRender3Ast} from '@angular/compiler/src/render3/r3_template_transform';

@Component({
  selector: 'app-pwgen',
  templateUrl: './pwgen.component.html',
  styleUrls: ['./pwgen.component.scss']
})
export class PwgenComponent implements OnInit {
  passwords = [];
  length = 0;
  iterations = 0;
  noOutput = true;

  constructor() {}

  ngOnInit() {
  }

  getUppercaseLetter() {
    return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
  }

  getLowercaseLetter() {
    return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
  }

  getNumberString() {
    return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
  }

  generatePw(length, iterations, charType) {
    this.noOutput = false;
    this.passwords = [];
    this.length = length;
    this.iterations = iterations;

    let char = '';
    let password = '';
    let randCharTypeChoice = 0;

    for (let i = 0; i < this.iterations; i++) {
      // tslint:disable-next-line:prefer-for-of
      for (let l = 0; l < this.length; l++) {

        if (charType === 'specialCharacters') {
          char = String.fromCharCode(Math.floor(Math.random() * 74 + 48));

        } else if (charType === 'alphaNumeric') {
          randCharTypeChoice = (Math.floor(Math.random() * 3));

          if (randCharTypeChoice === 0) {
            char = this.getUppercaseLetter();
          } else if (randCharTypeChoice === 1) {
            char = this.getLowercaseLetter();
          } else if (randCharTypeChoice === 2) {
            char = this.getNumberString();
          }

        } else if (charType === 'lettersOnly') {
          randCharTypeChoice = (Math.floor(Math.random() * 2));

          if (randCharTypeChoice === 0) {
            char = this.getUppercaseLetter();
          } else {
            char = this.getLowercaseLetter();
          }

        } else if (charType === 'numericOnly') {
          char = this.getNumberString();
        }

        password += [char];
      }

      this.passwords.push(password);
      password = '';
    }
  }

  validateInput(length, iterations) {
    try {
      length = Number(length);
      iterations = Number(iterations);
    } catch {
      alert('Please only enter numbers...');
      return false;
    }

    if (length < 6 || length > 100) {
      alert('Please enter the length as a number between 6 and 100!');
      return;
    } else if (iterations < 1 || iterations > 30) {
      alert('Please enter the iterations as a number between 1 and 30!');
      return false;
    }

    return true;
  }

  getInput(length, iterations, charType) {
    if (this.validateInput(length, iterations)) {
      this.generatePw(length, iterations, charType);
    } else {
      return;
    }
  }
}
