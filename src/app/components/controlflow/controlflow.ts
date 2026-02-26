import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { isActive } from '@angular/router';

@Component({
  selector: 'app-controlflow',
  imports: [FormsModule],
  templateUrl: './controlflow.html',
  styleUrl: './controlflow.css',
})
export class Controlflow {
  isParavisible:boolean=false;
  startMonth:string="jan";
  cityList: string[]=["Coimbatore","Chennai","Bangalore"]
  arrayofObjects :any[]=[
    {name:"AAAA",city:"Bangalore",isActive:true},
    {name:"BBBB",city:"Chennai",isActive:false},
    {name:"CCCC",city:"Pune",isActive:true},
    {name:"DDD",city:"NewYork" ,isActive:false}
  ]
  show(){
    this.isParavisible=true;
  }
  hide(){
    this.isParavisible=false;
  }
}
