import {Directive, HostListener} from '@angular/core';

@Directive({
  selector: '[appFacebookLikes]'
})
export class FacebookLikesDirective {

  constructor() { }

  @HostListener('mousedown') onSelected() {
    console.log('Button was selected.');
  }

  @HostListener('mouseup') onUnselected() {
    console.log('Button was unselected.');
  }

}
