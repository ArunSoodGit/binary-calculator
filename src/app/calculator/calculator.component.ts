import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent  {

  title = 'zajecia';
  val = 0;
  text = '';
  text2 = '';
  operator = '';

  constructor() { }

  keyPress(ew: KeyboardEvent) {
    console.log(ew);
    if (ew.key !== '0' && ew.key !== '1') {
      ew.preventDefault();
    }

  }

  keyUp(ew: KeyboardEvent) {
    this.text2 = '(' + parseInt(this.text, 2) + ')';
  }

  onDigitClick(ew: MouseEvent) {
    this.text += (ew.target as HTMLElement).textContent;
    this.text2 = '(' + parseInt(this.text, 2) + ')';
  }

  onOperationClick(ew: MouseEvent) {
    this.val = parseInt(this.text, 2);
    console.log(this.val);
    this.text = '';
    if ((ew.target as HTMLElement).textContent === '+') {
      this.operator = '+';
    } else {
      this.operator = '-';
    }
  }
  onSubmit() {
    if (this.operator === '+') {
      const val2 = parseInt(this.text, 2);
      this.val += val2;
      this.text = this.val.toString(2);
      this.text2 = '(' + this.val + ')';
    } else {
      const val2 = parseInt(this.text, 2);
      this.val -= val2;
      this.text = this.val.toString(2);
      this.text2 = '(' + this.val + ')';
    }
  }
  clear() {
    this.text = '';
    this.val = 0;
    this.text2 = '';
  }

}
