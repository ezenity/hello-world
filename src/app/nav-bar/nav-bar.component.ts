import { Component, OnInit } from '@angular/core';
import {NavBarService} from '../nav-bar.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  title = 'FVP';
  buttons;

  constructor(service: NavBarService) {
    this.buttons = service.getNavBar();
  }

  ngOnInit() {
  }

}
