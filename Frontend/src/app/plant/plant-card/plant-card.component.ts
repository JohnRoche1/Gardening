import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plant-card',
  templateUrl: './plant-card.component.html',
  styleUrls: ['./plant-card.component.css']
})
export class PlantCardComponent implements OnInit {

  Item: any = {
    "PlantId": 1,
    "PlantName": "Tomato",
    "Type": "Vegetable"
  }

  constructor() { }

  ngOnInit() {


  }

}
