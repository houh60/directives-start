import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

    @Input() defaultColor: string = 'transparent';
    @Input() highlightColor: string = 'blue';

    @HostBinding('style.backgroundColor') backgroundColor: string;
    @HostBinding('style.color') color: string;

    constructor(private elRef: ElementRef, private renderer: Renderer2) {}

    ngOnInit(): void {
        // this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'blue');
        // this.renderer.setStyle(this.elRef.nativeElement, 'color', 'white');
        this.backgroundColor = this.defaultColor;
    }

    @HostListener('mouseenter') mouseover(eventData: Event) {
        this.backgroundColor = this.highlightColor;
        this.color = 'white';
        // this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'blue');
        // this.renderer.setStyle(this.elRef.nativeElement, 'color', 'white');
    }

    @HostListener('mouseleave') mouseleave(eventData: Event) {
        this.backgroundColor = this.defaultColor;
        this.color = 'black';
        // this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'transparent');
        // this.renderer.setStyle(this.elRef.nativeElement, 'color', 'black');
    }
}
