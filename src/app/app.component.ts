import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  listData: string[];

  ngOnInit() {
    this.listData = [
      'Hot water heater',
      'Digital locks',
      'Curtain hooks'
    ];
  }

  onDragStart($event, listItem: any) {
    console.log('onDragStart: ' + $event + ' ' + listItem);
    $event.dataTransfer.setData("ListItem", listItem);
  }

  onDragOver($event) {
    $event.preventDefault();
  }

  onDrop($event) {
    console.log('onDrop: ' + $event.dataTransfer.getData("ListItem"));
  }
}
