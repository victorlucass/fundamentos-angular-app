import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss'],
})
export class ClientListComponent implements OnInit {
  @Input('client') clientUser: Client = {
    name: '',
    age: 0,
    id: 0
  };
  @Output() eventUser = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  eventClientComponent(){
    this.eventUser.emit();
  }
}

export interface Client {
  name: string;
  age: number;
  id: number;
}
