import { Component, Output,EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  @Output() calculate = new EventEmitter<{
    initialInvestment: number;
    annualInvestment: number;
    expectedReturn: number;
    duration: number;
  }>();
  initial_investment: string = '0';
  annual_investment: string = '0';
  expected_return: string = '5';
  duration: string = '10';

  onSubmit() {
    this.calculate.emit({
      initialInvestment: +this.initial_investment,
      annualInvestment: +this.annual_investment,
      expectedReturn: +this.expected_return,
      duration:+this.duration
    })
  }
}
