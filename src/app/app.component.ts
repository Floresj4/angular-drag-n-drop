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

  onDragStart($event, startIndex: number) {
    console.log('onDragStart: ' + $event + ' ' + this.listData[startIndex]);
    $event.dataTransfer.setData("StartIndex", startIndex);
  }

  onDragOver($event) {
    $event.preventDefault();
  }

  onDrop($event, dropIndex: number) {
    const startIndex: number = +$event.dataTransfer.getData("StartIndex");
    console.log('onDrop: ' + startIndex + ', ' + dropIndex);

    const removed = this.listData.splice(startIndex, 1)[0];
    this.listData.splice(dropIndex, 0, removed);
  }
}
