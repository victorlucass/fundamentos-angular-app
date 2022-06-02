import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.scss']
})
export class NameComponent implements OnInit {

  private _name = '';

  public get name() {
    return this._name;
  }

  @Input()
  public set name(name: string){
    this._name =  'Your name: ' + name;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
