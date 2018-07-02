import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  listData: string[];

  onDragStart($event) {
    console.log($event);
  }

  ngOnInit() {
    this.listData = [
      'Hot water heater',
      'Digital locks',
      'Curtain hooks'
    ];
  }
}
