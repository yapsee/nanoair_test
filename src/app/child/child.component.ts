import { Component, OnInit , Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input() data:string | undefined ;

  @Output() public edit =   new EventEmitter(); 

  constructor() { }

  public id = 2;
  public name = "Basse"; 
  public age = 22; 
  public username = "Oumar";
  public work = "nanoair";
  public position = "CEO";
  public adresse = "Fann Hock";
  public phone = 779008998


  change_params() 
  { 
    this.edit.emit({id:this.id, name:this.name, username:this.username, age:this.age, position:this.position, phone:this.phone,
      work:this.work, adresse:this.adresse
    }); 
  } 

  ngOnInit(): void {
  }


}
