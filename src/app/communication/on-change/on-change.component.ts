import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-on-change',
  templateUrl: './on-change.component.html',
  styleUrls: ['./on-change.component.scss']
})
export class OnChangeComponent implements OnInit {

  name = '';
  nameNew = '';

  constructor() { }

  ngOnInit(): void {
  }

  update(){
    this.nameNew = this.name;
  }

}
