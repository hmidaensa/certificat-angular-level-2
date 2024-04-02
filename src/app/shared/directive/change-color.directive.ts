import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appChangeColor]'
})
export class ChangeColorDirective {

  constructor(private elRef:ElementRef, private redener:Renderer2) { }

   @HostListener("mouseover")
    chaneColor(){
      this.redener.setStyle(this.elRef.nativeElement,'color','red') 
    }
    @HostListener("mouseleave")
    chaneColorLeave(){
      this.redener.setStyle(this.elRef.nativeElement,'color','green') 
    }

    

   

}
