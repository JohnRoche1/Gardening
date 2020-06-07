import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plant-list',
  templateUrl: './plant-list.component.html',
  styleUrls: ['./plant-list.component.css']
})
export class PlantListComponent implements OnInit {


  plantItems: Array<any> = [
    {
        "PlantId": 1,
      "PlantName": "Tomato",
      "Type": "Vegetable"
    },
    {
      "PlantId": 2,
      "PlantName": "Aubergine",
      "Type": "Vegetable"
    },
    {
      "PlantId": 3,
      "PlantName": "Chilli",
      "Type": "Vegetable"
    },

    {
      "PlantId": 4,
      "PlantName": "Grapevine",
      "Type": "Fruit"
    },

    {
      "PlantId": 5,
      "PlantName": "Pepper",
      "Type": "Vegetable"
    },
  ]


  constructor() { }

  ngOnInit() {
  }

}
