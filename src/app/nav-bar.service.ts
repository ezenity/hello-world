import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavBarService {

  constructor() { }


  getNavBar() {
    return ['button1', 'button2', 'button3'];
  }
}
