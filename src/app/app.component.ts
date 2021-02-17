import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'yestest';
  public person = { 
    id: 1,
    name: "kasse", 
    username: "Aliou",
    age: 24,
    work: "nanoair",
    position: "CTO",
    adresse: "Nord foire",
    phone: 779008998
   } 

   update(edit: { id: number; name: string; username: string; age: number; work: string; position: string; adresse: string; phone: number; }) { 
    this.person = edit; 
} 
 constructor() { }

}
