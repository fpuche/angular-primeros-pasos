import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [
    {
      name: 'Trunks',
      power: 10
    }
  ]

  //onDelete = Index value : number
  @Output()
  public onDelete: EventEmitter<number> = new EventEmitter();

  public onDeleteCharacter(index:number):void{
    //Emitir el ID del personaje
    console.log({index});
    this.onDelete.emit(index);

  }

}
