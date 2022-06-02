import { Component, Input, OnInit } from '@angular/core';
import { Client } from '../client-list/client-list.component';

@Component({
  selector: 'app-input-biding',
  templateUrl: './input-biding.component.html',
  styleUrls: ['./input-biding.component.scss'],
})
export class InputBidingComponent implements OnInit {
  // #region Properties (2)

  @Input('lastName') public lastNameUser = '';
  @Input('name') public nameUser = '';

  // #endregion Properties (2)

  // #region Constructors (1)

  constructor() {}

  // #endregion Constructors (1)

  // #region Public Accessors (1)

  public get listClient() {
    const clientsMock = [
      { id: 1, name: 'Victor Lucas', age: 21 },
      { id: 2, name: 'Evandro Mané', age: 21 },
      { id: 3, name: 'Carlos Talarico', age: 21 },
      { id: 4, name: 'Levy Cabaço', age: 21 },
      { id: 5, name: 'Wamberto Gado', age: 21 },
      { id: 6, name: 'Léo Irmão do Cabaço', age: 21 },
    ];
    return clientsMock;
  }

  // #endregion Public Accessors (1)

  // #region Public Methods (2)

  public addConsoleLog(client: Client){
    console.log(client);
    alert('Adicionado no Console!')
  }

  public ngOnInit(): void {}

  // #endregion Public Methods (2)
}
