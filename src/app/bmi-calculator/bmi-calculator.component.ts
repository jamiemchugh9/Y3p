import { Component} from '@angular/core';

@Component({
 moduleId: module.id,
  selector: 'app-bmi-calculator',
  templateUrl: 'bmi-calculator.component.html'
  })
export class BmiCalculatorComponent {

 model: any = {};
    loading = false;
    returnUrl: string;

  constructor() { }

  feet: number = 0;
  inches: number = 0;
  meters: number = 0;
  pounds: number = 0;
  stone: number = 0;
  kilo: number = 0;
  temp: number = 0;
  bmiNumber: number = 0;
  bmiString: string = "";
  range : string = "";


  bmiCalc() {
    this.bmiNumber = this.kilo / (this.meters * this.meters);
    this.bmiNumber = Math.round(this.bmiNumber * 100) / 100;
    //bmiNumber > 500 there because it was equating to infinity if the height was equal to zero
    if (this.bmiNumber > 29.9 && this.bmiNumber < 500) {
      this.bmiString = "Your estimated BMI is " + this.bmiNumber + ", this is in the ";
      this.range = "obese range";
    }
    else if (this.bmiNumber <= 29.9 && this.bmiNumber > 24.9) {
      this.bmiString = "Your estimated BMI is " + this.bmiNumber + ", this is in the ";
      this.range =  "overweight range";
    }
    else if (this.bmiNumber <= 24.9 && this.bmiNumber > 18.4) {
      this.bmiString = "Your estimated BMI is " + this.bmiNumber + ", this is in the "
      this.range = "normal range";
    }
    else if (this.bmiNumber <= 18.4 && this.bmiNumber > 0) {
      this.bmiString = "Your estimated BMI is " + this.bmiNumber + ", this is in the ";
      this.range = "underweight range";
    }
    else {
      this.bmiString = "One or mores values not entered. Enter height and/or weight, and click the button again";
    }
    // this.bmiString = "Your estimated BMI is " + this.bmiNumber + ", this is in the " + this.range + " range";
  }

  isNormal(){
    this.range === 'normal range';
  }

  FeetAndInchToMeter() {
    this.temp = 0;
    this.temp = Number(this.inches) + Number(this.feet * 12);
    this.meters = Number(this.temp) * 0.0254;
    this.meters = Math.round(this.meters * 100) / 100;
  }

  KGToLB() {
    this.temp = this.kilo / 0.453592;
    this.pounds = this.temp % 14;   
    this.stone = (Number(this.temp) - Number(this.pounds)) / 14;
    this.pounds = Math.round(this.pounds);
  }

  MeterToInchAndFeet() {
    this.temp = this.meters / 0.0254;
    this.inches = this.temp % 12;
    this.feet = (Number(this.temp) - Number(this.inches)) / 12;
    this.inches = Math.round(this.inches);
  }

  LBToKG() {
    this.temp = Number(this.pounds) + (Number(this.stone * 14));
    this.kilo = this.temp * 0.453592;
    this.kilo = Math.round(this.kilo);
  }






}
