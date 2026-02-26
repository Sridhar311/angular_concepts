import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signalexample',
  imports: [],
  templateUrl: './signalexample.html',
  styleUrl: './signalexample.css',
})
export class Signalexample {
    courseName:string="Angular";//Normal variable declaration
    productName="Iphone"
    coursName=signal<string>("Angular tutorial") //signal declaration
    producName=signal("Iphone 17 pro");

    courseDuration=signal<string>("15");

    courseDetail=computed(()=>this.coursName()+" "+this.courseDuration());
    //changing values for variables and signal
    constructor(){
      this.courseName="Angular 21";
      setTimeout(()=>{
        //changing the value of signal after 5 sec
        this.coursName.set("Angular 21 Tutorial");
      },5000)

      //accessing the value
      console.log(this.courseName);
      console.log(this.coursName());
    }
}
