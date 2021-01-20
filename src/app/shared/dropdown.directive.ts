import { isSyntheticPropertyOrListener } from "@angular/compiler/src/render3/util";
import { Directive, ElementRef, HostBinding, HostListener} from "@angular/core";


@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;
  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }
  constructor(private elRef: ElementRef) {}
}


// @Directive({
//     selector: '[appDropdown]'
// })
// export class DropdownDirective {

//     @HostBinding('class.open') isOpen = false;

//     @HostListener('click') onMouseClick() {
//         this.isOpen = !this.isOpen;
//     }

// }