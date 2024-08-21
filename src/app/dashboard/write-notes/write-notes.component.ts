import { Component, EventEmitter, Output, HostListener, signal } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpService } from 'src/app/services/http.service';
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
  isExpanded = false;
  expandInputBox() {
    this.isExpanded = true;
  }


  // @HostListener('document:click', ['$event'])
  // collapseInputBox(event: Event) {
  //   const target = event.target as HTMLElement;
  //   if (!target.closest('.input-box')) {
  //     this.isExpanded = false;
  //   }
  // }
  addNotesForm!: FormGroup;
  title: string = '';
  description: string = '';

  constructor(private formbuilder: FormBuilder, private http: HttpService) {
    this.addNotesForm = formbuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    })
  };



  submitForm() {
    if (this.addNotesForm.valid) {
      this.title = this.addNotesForm.get('title')?.value;
      this.description = this.addNotesForm.get('description')?.value;

      // Calling LoginAccess() with email and password
      this.http.addNotes(this.title, this.description).subscribe({
        next: (res: any) => {
          console.log("SUCCESS")
          console.log(res);
          this.isExpanded = false;
        },
        error: (err: string) => {
          console.log("Failed");
          console.log(err);
          
        }
      })
      // if(this.isExpanded)this.isExpanded = false;
    }
    else {
      console.log("loginForm is not valid")
      // if(this.isExpanded)this.isExpanded = false;

    }
  }


}
