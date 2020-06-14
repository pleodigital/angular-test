import {AfterViewInit, Directive, ElementRef, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appTest]'
})
export class TestDirective implements AfterViewInit {
  elementVisible = true;

  constructor(private elementRef: ElementRef, private renderer2: Renderer2) {
    // Jak utworzyć? ng g direcitve nazwaDyrektywy
  }

  ngAfterViewInit(): void {
    // pobieranie teksu
    // const nativeElement = this.elementRef.nativeElement;
    // const text = nativeElement.innerHTML;
    // if (text === 'costam') {
    /// to cos zrob?
    // }

    // renderer - wydajniejszy, łatwiejsze API
    // this.renderer2.setStyle(this.elementRef.nativeElement, 'background-color', 'yellow');
  }


  @HostListener('click')
  onClick() {
    const nativeElement = this.elementRef.nativeElement;
    if (this.elementVisible) {
      nativeElement.style.opacity = '0';
    } else {
      nativeElement.style.opacity = '1';
    }
    this.elementVisible = !this.elementVisible;
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    const nativeElement = this.elementRef.nativeElement;
    nativeElement.style.backgroundColor = 'red';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    const nativeElement = this.elementRef.nativeElement;
    nativeElement.style.backgroundColor = 'blue';
  }

}
