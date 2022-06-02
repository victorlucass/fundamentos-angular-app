import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-name-change',
  templateUrl: './name-change.component.html',
  styleUrls: ['./name-change.component.scss']
})
export class NameChangeComponent implements OnInit, OnChanges {

  public beforeName = '';
  @Input('change')public firstName = '';
  constructor() { }

  public ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
    if(changes.hasOwnProperty('firstName')){
      this.beforeName = changes['firstName'].previousValue;
    }
  }

  public ngOnInit(): void {
  }
}
