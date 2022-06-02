import { VariavelTemplateComponent } from './variavel-template/variavel-template.component';
import { CommunicationComponent } from './communication.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommunicationRoutingModule } from './communication-routing.module';
import { InputBidingComponent } from './input-biding/input-biding.component';
import { MaterialModule } from '../shared/material-components/material-components.module';
import { ClientListComponent } from './client-list/client-list.component';
import { FormsModule } from '@angular/forms';
import { ItemChildrenComponent } from './variavel-template/item-children/item-children.component';
import { OnChangeComponent } from './on-change/on-change.component';
import { NameChangeComponent } from './on-change/name-change/name-change.component';
import { InterceptingComponent } from './intercepting/intercepting.component';
import { NameComponent } from './intercepting/name/name.component';


@NgModule({
  declarations: [
    CommunicationComponent,
    InputBidingComponent,
    ClientListComponent,
    VariavelTemplateComponent,
    ItemChildrenComponent,
    OnChangeComponent,
    NameChangeComponent,
    InterceptingComponent,
    NameComponent
  ],
  imports: [
    CommonModule,
    CommunicationRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class CommunicationModule { }
