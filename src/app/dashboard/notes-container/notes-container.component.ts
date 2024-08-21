import { Component, Output, Input, EventEmitter } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { SearchbarService } from 'src/app/services/searchbar.service';

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

  searchedItem: string = '';

  @Output() title = new EventEmitter();
  notesList!: any[];
  constructor(private http: HttpService, private searchService: SearchbarService) { }

  ngOnInit(): void {

    //To fetch the Notes Data from API
    this.http.getAllNotes().subscribe({
      next: (res: any) => {
        console.log("res", res.data.data);
        this.notesList = res.data.data;
        this.filterData();
      },
      error: (err: string) => {
        console.log("err", err);
      }
    })

    //SearchService for Search Bar in Header
    this.searchService.currentData.subscribe(data => {
      this.searchedItem = data;
    })

  }

  //Filter the data from the NotesList
  filterData() {
    this.notesList = this.notesList.filter((item) => {
      if (item.isArchived == false || item.isDeleted == false) {
        return item;
      }
    })
  }

}
