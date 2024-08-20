import { Component, Output ,EventEmitter} from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-notes-container',
  templateUrl: './notes-container.component.html',
  styleUrls: ['./notes-container.component.css']
})
export class NotesContainerComponent {
    // notes:string[]=[];

    // addNoteToContainer(note:string):void{
    //   this.notes.push(note);
    // }


    @Output() title=new EventEmitter();
    notesList!:any[];
    constructor(private http:HttpService){}
  
    ngOnInit(): void {
      this.http.getAllNotes().subscribe({
        next:(res:any)=>{
          console.log("res",res.data.data);
          this.notesList = res.data.data;
          this.filterData();
        },
        error:(err:string)=>{
          console.log("err",err);
        }
      })
    }
    
    filterData(){
      this.notesList=this.notesList.filter((item)=>{
         if(item.isArchived==false || item.isDeleted==false)
        {
          return item;
        }
      })
    }

}
