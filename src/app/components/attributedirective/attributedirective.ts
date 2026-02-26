import { NgClass, NgStyle } from '@angular/common';
import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnDestroy, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-attributedirective',
  imports: [NgStyle,NgClass],
  templateUrl: './attributedirective.html',
  styleUrl: './attributedirective.css',
})
export class Attributedirective implements OnInit,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy{
    className=signal<string>("");
    isDivgreen:boolean=false;
    changeClass(val:string){
      this.className.set(val);
    }
    toggle(){
      this.isDivgreen=!this.isDivgreen;
    }
    ngOnInit(): void {
      console.log("On init executed");
      //used to trigger api call
      // used to subscribe the obserables
    }
    ngAfterContentInit(): void {
      console.log("After content init executed");
    }    
    ngAfterContentChecked(): void {
      console.log("After content checked executed");
    }
    ngAfterViewInit(): void {
      console.log("After view init executed");
    }
    ngAfterViewChecked(): void {
      console.log("After view checked");
    }
    ngOnDestroy(): void {
      console.log("On destroy executed");
    }
}
