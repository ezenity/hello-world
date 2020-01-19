import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'facebook-likes',
  templateUrl: './facebook-likes.component.html',
  styleUrls: ['./facebook-likes.component.css']
})

export class FacebookLikesComponent implements OnInit {
  count = 0;

  constructor() {
  }

  onClick() {
      this.count++;
      this.onClickCount();
  }

  onClickCount() {
    console.log(this.count);
    console.log('button is clicked');
  }

  ngOnInit() {
  }

}


