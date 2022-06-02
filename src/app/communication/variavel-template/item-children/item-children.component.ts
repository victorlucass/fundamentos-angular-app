import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-children',
  templateUrl: './item-children.component.html',
  styleUrls: ['./item-children.component.scss'],
})
export class ItemChildrenComponent implements OnInit {
  showTextFirst = false;
  showTextSecond = false;

  constructor() {}

  ngOnInit(): void {}

  firstValue() {
    this.showTextFirst = true;
    this.showTextSecond = false;
  }

  secondValue() {
    this.showTextFirst = false;
    this.showTextSecond = true;
  }

  clear() {
    this.showTextFirst = false;
    this.showTextSecond = false;
  }
}
