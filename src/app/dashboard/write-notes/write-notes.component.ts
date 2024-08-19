import { Component, EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-write-notes',
  templateUrl: './write-notes.component.html',
  styleUrls: ['./write-notes.component.css']
})
export class WriteNotesComponent {
  // @Output() noteAdded = new EventEmitter<string>();

  // addNote(event:Event):void{
  //   const inputData=event.target as HTMLInputElement;
  //   const note=inputData.value.trim();
  //   if(note){
  //     this.noteAdded.emit(note);
  //     inputData.value='';
  //   }
  // }

}
